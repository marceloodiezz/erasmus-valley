class InteractionManager {

    constructor(scene, player, interactions, dialog) {
        this.scene = scene;
        this.player = player;
        this.interactions = interactions;
        this.dialog = dialog;

        this.radius = 90;
        this.nearbyInteraction = null;

        this.createIndicator();
        this.createClickableZones();
        this.setupKeyboard();
    }

    // =====================================
    // INDICADOR VISUAL
    // =====================================

    createIndicator() {
        this.panel = document.getElementById("interaction-panel");
        this.actionButton = document.getElementById("interaction-action");

        this.handleActionClick = () => {
            if (this.nearbyInteraction) {
                this.tryInteract(this.nearbyInteraction);
            }
        };

        this.actionButton.addEventListener(
            "click",
            this.handleActionClick
        );
    }

    createClickableZones() {
        this.zones = [];

        for (const interaction of this.interactions) {
            const hitbox = interaction.hitbox;

            if (!hitbox) continue;

            // Crear una zona invisible sobre el objeto.
            const zone = this.scene.add.zone(
                hitbox.x,
                hitbox.y,
                hitbox.width,
                hitbox.height
            );

            zone.setDepth(20);
            zone.setInteractive();

            // Detectar clics y pulsaciones táctiles.
            zone.on("pointerdown", () => {
                this.tryInteract(interaction);
            });

            this.zones.push(zone);
        }
    }

    showIndicator(interaction) {
        const isTouchDevice = window.matchMedia(
            "(any-pointer: coarse)"
        ).matches;

        this.actionButton.replaceChildren(
            document.createTextNode(interaction.name)
        );

        if (!isTouchDevice) {
            const key = document.createElement("span");
            key.className = "interaction-key";
            key.textContent = "E";

            this.actionButton.appendChild(key);
        }

        this.actionButton.setAttribute(
            "aria-label",
            interaction.action + " " + interaction.name
        );

        this.positionIndicator(interaction);
        this.panel.classList.remove("hidden");
    }

    positionIndicator(interaction) {
        const camera = this.scene.cameras.main;
        const canvas = this.scene.game.canvas;
        const rect = canvas.getBoundingClientRect();

        const scaleX = rect.width / canvas.width;
        const scaleY = rect.height / canvas.height;

        // Posición relativa al centro de la habitación.
        const x = camera.x + camera.width / 2 +
            (interaction.promptX - this.scene.roomWidth / 2) * camera.zoom;

        const y = camera.y + camera.height / 2 +
            (interaction.promptY - this.scene.roomHeight / 2) * camera.zoom;

        // Convertir a coordenadas de la pantalla.
        this.panel.style.left = (rect.left + x * scaleX) + "px";
        this.panel.style.top = (rect.top + y * scaleY) + "px";
    }

    hideIndicator() {
        this.panel.classList.add("hidden");
    }

    // =====================================
    // DETECCIÓN DE OBJETOS
    // =====================================

    findNearby() {
        const position = this.player.sprite.body.center;

        const facingVectors = {
            up: { x: 0, y: -1 },
            down: { x: 0, y: 1 },
            left: { x: -1, y: 0 },
            right: { x: 1, y: 0 }
        };

        const facing = facingVectors[this.player.facing];

        let closest = null;
        let closestDistance = Infinity;
        let closestInFront = null;
        let closestFrontDistance = Infinity;

        for (const object of this.interactions) {
            const dx = object.x - position.x;
            const dy = object.y - position.y;
            const distance = Math.hypot(dx, dy);

            if (distance > this.radius) continue;

            if (distance < closestDistance) {
                closest = object;
                closestDistance = distance;
            }

            // Priorizar el objeto situado delante.
            const dot = dx * facing.x + dy * facing.y;

            if (dot > 0 && distance < closestFrontDistance) {
                closestInFront = object;
                closestFrontDistance = distance;
            }
        }

        return closestInFront || closest;
    }

    update() {
        const menu = document.getElementById("main-menu");

        // Nunca mostrar etiquetas desde el menú principal.
        if (
            !menu.classList.contains("hidden") ||
            !this.scene.scene.isActive() ||
            this.dialog.isOpen()
        ) {
            this.nearbyInteraction = null;
            this.hideIndicator();
            return;
        }

        const interaction = this.findNearby();

        if (interaction !== this.nearbyInteraction) {
            this.nearbyInteraction = interaction;

            if (interaction) {
                this.showIndicator(interaction);
            } else {
                this.hideIndicator();
            }
        }

        // Mantener la posición correcta si cambia el tamaño
        // de la pantalla o el zoom de la cámara.
        if (interaction) {
            this.positionIndicator(interaction);
        }
    }

    // =====================================
    // CONTROLES
    // =====================================

    setupKeyboard() {
        this.handleKeyDown = (event) => {
            if (!this.scene.scene.isActive()) return;

            const menu = document.getElementById("main-menu");

            if (!menu.classList.contains("hidden")) return;

            // Seleccionar respuestas numéricas.
            if (this.dialog.isOpen() && this.dialog.hasChoices()) {
                const match = event.code.match(
                    /^(Digit|Numpad)([1-9])$/
                );

                if (match) {
                    event.preventDefault();

                    if (!event.repeat) {
                        this.dialog.choose(Number(match[2]) - 1);
                    }

                    return;
                }
            }

            // Interactuar o avanzar diálogos.
            if (
                event.code !== "KeyE" &&
                event.code !== "Space"
            ) {
                return;
            }

            event.preventDefault();

            if (event.repeat) return;

            if (this.dialog.isOpen()) {
                this.dialog.next();
            } else if (this.nearbyInteraction) {
                this.tryInteract(this.nearbyInteraction);
            }
        };

        window.addEventListener(
            "keydown",
            this.handleKeyDown,
            true
        );
    }

    // =====================================
    // INTERACCIONES
    // =====================================

    tryInteract(interaction) {
        // No interactuar si la escena está pausada.
        if (!this.scene.scene.isActive()) return;

        // No interactuar desde el menú.
        const menu = document.getElementById("main-menu");

        if (!menu.classList.contains("hidden")) return;

        // No abrir otro diálogo si ya hay uno activo.
        if (this.dialog.isOpen()) return;

        // Calcular la distancia entre Amanda y el objeto.
        const position = this.player.sprite.body.center;

        const distance = Math.hypot(
            interaction.x - position.x,
            interaction.y - position.y
        );

        // El objeto debe estar dentro del radio permitido.
        if (distance > this.radius) return;

        // Ejecutar la interacción.
        this.open(interaction);
    }

    open(interaction) {
        this.player.resetMovement();

        this.hideIndicator();
        this.nearbyInteraction = null;

        // Avisar a los controles táctiles.
        this.scene.game.events.emit("interaction-open");

        this.dialog.open(interaction);
    }

    reset() {
        this.nearbyInteraction = null;
        this.hideIndicator();
        this.dialog.close();
    }

    destroy() {
        window.removeEventListener(
            "keydown",
            this.handleKeyDown,
            true
        );

        this.actionButton.removeEventListener(
            "click",
            this.handleActionClick
        );

        this.reset();

        for (const zone of this.zones) {
            zone.destroy();
        }

        this.zones = [];
    }
}