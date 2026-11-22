class RoomScene extends Phaser.Scene {

    constructor() {
        super("RoomScene");
    }

    init(data = {}) {
        this.startData = data;
    }

    preload() {
        const path = "assets/sprites/";

        this.load.spritesheet(
            "amy-down",
            path + "Amanda_walk_Forward_64x64.png",
            { frameWidth: 64, frameHeight: 64 }
        );

        this.load.spritesheet(
            "amy-up",
            path + "Amanda_walk_Up_64x64.png",
            { frameWidth: 64, frameHeight: 64 }
        );

        this.load.spritesheet(
            "amy-left",
            path + "Amanda_walk_Left_64x64.png",
            { frameWidth: 64, frameHeight: 64 }
        );

        this.load.spritesheet(
            "amy-right",
            path + "Amanda_walk_Right_64x64.png",
            { frameWidth: 64, frameHeight: 64 }
        );

        this.load.image(
            "amy-room",
            "assets/maps/room_amy.png"
        );
    }

    create() {
        this.roomWidth = 960;
        this.roomHeight = 576;

        this.physics.world.setBounds(
            0, 0,
            this.roomWidth,
            this.roomHeight
        );

        // Escenario.
        this.add.image(0, 0, "amy-room").setOrigin(0);

        // Colisiones.
        this.obstacles = this.physics.add.staticGroup();
        this.createCollisions();

        // Protagonista.
        const savedPlayer = this.startData.saveData?.player;

        const startX = savedPlayer?.x ?? 480;
        const startY = savedPlayer?.y ?? 390;

        this.player = new Player(this, startX, startY);

        this.physics.add.collider(
            this.player.sprite,
            this.obstacles
        );

        // Cámara adaptable.
        this.cameras.main.setBackgroundColor("#172c30");
        this.resizeCamera();

        this.scale.on("resize", this.resizeCamera, this);

        // Decisiones tomadas durante la partida.
        this.decisions = {
            ...(this.startData.saveData?.decisions ?? {})
        };

        // Sistema de interacciones.
        this.createInteractions();
        this.setupInteractionUI();

        // Indicador de interacción sobre los objetos.
        this.interactionBackground = this.add.graphics();
        this.interactionBackground
            .setDepth(99)
            .setVisible(false);

        // Texto del indicador.
        this.interactionLabel = this.add.text(0, 0, "", {
            fontFamily: "Arial",
            fontSize: "14px",
            fontStyle: "bold",
            color: "#49321e"
        });

        this.interactionLabel
            .setOrigin(0.5, 0.5)
            .setDepth(100)
            .setVisible(false);

        // Gestionar pausa.
        this.events.on("pause", this.handlePause, this);

        // Guardar al cerrar o recargar la página.
        this.handlePageHide = () => {
            const menu = document.getElementById("main-menu");

            if (
                this.scene.isActive() &&
                menu.classList.contains("hidden")
            ) {
                this.saveProgress();
            }
        };

        window.addEventListener(
            "pagehide",
            this.handlePageHide
        );

        // Limpiar los eventos al salir de la escena.
        this.events.once("shutdown", () => {
            this.scale.off("resize", this.resizeCamera, this);
            this.events.off("pause", this.handlePause, this);

            window.removeEventListener("pagehide", this.handlePageHide);
            window.removeEventListener("keydown", this.handleInteractionKey, true);

            this.interactionLabel.setVisible(false);
            this.interactionBackground.setVisible(false);

            this.dialog.destroy();
        });

        // Crear el primer guardado al iniciar una partida nueva.
        if (this.startData.newGame) {
            this.saveProgress();
        }

    }

    // =====================================
    // COLISIONES
    // =====================================

    createCollisions() {
        const w = this.roomWidth;
        const h = this.roomHeight;

        // Paredes.
        this.addObstacle(w / 2, 40, w, 80);
        this.addObstacle(w / 2, h - 20, w, 40);
        this.addObstacle(20, h / 2, 40, h);
        this.addObstacle(w - 20, h / 2, 40, h);

        // Muebles.
        this.addObstacle(210, 187.5, 150, 110); // Cama
        this.addObstacle(680, 167.5, 145, 70);  // Escritorio
        this.addObstacle(805, 342.5, 95, 150);  // Armario
        this.addObstacle(110, 392.5, 80, 135);  // Estantería
        this.addObstacle(690, 452.5, 64, 50);   // Maleta
        this.addObstacle(350, 157.5, 60, 60);   // Mesilla
    }

    addObstacle(x, y, width, height) {
        const zone = this.add.zone(x, y, width, height);

        this.physics.add.existing(zone, true);
        this.obstacles.add(zone);

        return zone;
    }

    // =====================================
    // OBJETOS INTERACTIVOS
    // =====================================

    createInteractions() {
        this.interactionRadius = 90;

        // Coordenadas de acceso a cada objeto.
        this.interactions = [
            {
                id: "bookshelf",
                name: "Estantería",
                x: 165, y: 380,
                promptX: 110, promptY: 300,
                action: "Examinar",
                speaker: "Marcelo",
                text: "Una colección de libros de Física. Algunos incluso parecen haber sido abiertos."
            },
            {
                id: "bed",
                name: "Cama",
                x: 210, y: 260,
                promptX: 210, promptY: 115,
                action: "Examinar",
                speaker: "Marcelo",
                text: "La cama de Amanda. Probablemente lo que más va a echar de menos cuando empiece el Erasmus."
            },
            {
                id: "desk",
                name: "Portátil",
                x: 680, y: 220,
                promptX: 680, promptY: 110,
                action: "Examinar",

                lines: [
                    {
                        speaker: "Marcelo",
                        text: "Amy abre el portátil. Hay 37 pestañas abiertas."
                    },
                    {
                        speaker: "Amanda",
                        text: "Vale, tengo que preparar el Learning Agreement antes de irme."
                    },
                    {
                        speaker: "Amanda",
                        text: "¿Qué hago primero?",
                        decisionId: "learning_agreement",
                        choices: [
                            {
                                id: "responsable",
                                text: "Organizarme y revisar las asignaturas.",
                                speaker: "Marcelo",
                                response: "Amanda abre una hoja de cálculo y empieza a comparar asignaturas. Esto promete ser una tarde larga."
                            },
                            {
                                id: "improvisar",
                                text: "Mirar primero los vuelos a Italia.",
                                speaker: "Marcelo",
                                response: "Amanda termina viendo fotos de la costa amalfitana. Las convalidaciones pueden esperar un poquito."
                            }
                        ]
                    },
                    {
                        speaker: "Amanda",
                        text: "Sea como sea, esto del Erasmus va a dar mucho trabajo."
                    }
                ]
            },
            {
                id: "wardrobe",
                name: "Armario",
                x: 805, y: 450,
                promptX: 805, promptY: 250,
                action: "Examinar",
                speaker: "Amanda",
                text: "¿De verdad tengo que decidir qué ropa llevarme para tantos meses?"
            },
            {
                id: "suitcase",
                name: "Maleta",
                x: 690, y: 510,
                promptX: 690, promptY: 410,
                action: "Examinar",
                speaker: "Marcelo",
                text: "Una maleta vacía. En unas horas intentará contener toda una vida. Y probablemente un secador."
            },
            {
                id: "door",
                name: "Puerta",
                x: 480, y: 480,
                promptX: 480, promptY: 515,
                action: "Abrir",
                speaker: "Marcelo",
                text: "¿Ya quieres marcharte? Todavía tienes algunas cosas pendientes antes de comenzar el Erasmus."
            }
        ];

        this.nearbyInteraction = null;
    }

    // Buscar el objeto más adecuado para interactuar.
    findNearbyInteraction() {
        const playerPosition = this.player.sprite.body.center;

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
            const dx = object.x - playerPosition.x;
            const dy = object.y - playerPosition.y;

            const distance = Math.hypot(dx, dy);

            if (distance > this.interactionRadius) {
                continue;
            }

            // Objeto más cercano.
            if (distance < closestDistance) {
                closest = object;
                closestDistance = distance;
            }

            // Priorizar objetos situados delante de Amanda.
            const dot = dx * facing.x + dy * facing.y;

            if (dot > 0 && distance < closestFrontDistance) {
                closestInFront = object;
                closestFrontDistance = distance;
            }
        }

        return closestInFront || closest;
    }

    // =====================================
    // INTERFAZ DE INTERACCIÓN
    // =====================================

    setupInteractionUI() {
        this.dialog = new DialogManager((id, value) => {
            this.decisions[id] = value;
            this.saveProgress();
        });

        this.handleInteractionKey = (event) => {
            if (!this.scene.isActive()) return;

            const menu = document.getElementById("main-menu");

            if (!menu.classList.contains("hidden")) {
                return;
            }

            // Seleccionar respuestas con las teclas 1, 2, 3...
            if (this.dialog.isOpen() && this.dialog.hasChoices()) {
                const match = event.code.match(/^(Digit|Numpad)([1-9])$/);

                if (match) {
                    event.preventDefault();

                    if (!event.repeat) {
                        this.dialog.choose(Number(match[2]) - 1);
                    }

                    return;
                }
            }

            // Teclas para avanzar o interactuar.
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
                this.openDialog(this.nearbyInteraction);
            }
        };

        window.addEventListener(
            "keydown",
            this.handleInteractionKey,
            true
        );
    }

    updateNearbyInteraction() {
        const interaction = this.findNearbyInteraction();

        if (interaction === this.nearbyInteraction) {
            return;
        }

        this.nearbyInteraction = interaction;

        if (!interaction) {
            this.interactionLabel.setVisible(false);
            this.interactionBackground.setVisible(false);
            return;
        }

        const text = "E · " + interaction.action + " " + interaction.name;

        this.interactionLabel.setText(text);

        const x = interaction.promptX;
        const y = interaction.promptY - 15;

        const paddingX = 12;
        const paddingY = 7;

        const width = this.interactionLabel.width + paddingX * 2;
        const height = this.interactionLabel.height + paddingY * 2;

        this.interactionBackground.clear();

        // Borde marrón.
        this.interactionBackground.fillStyle(0x745635);
        this.interactionBackground.fillRoundedRect(
            x - width / 2 - 3,
            y - height / 2 - 3,
            width + 6,
            height + 6,
            7
        );

        // Fondo crema.
        this.interactionBackground.fillStyle(0xf5e7b2);
        this.interactionBackground.fillRoundedRect(
            x - width / 2,
            y - height / 2,
            width,
            height,
            5
        );

        this.interactionLabel.setPosition(x, y);

        this.interactionBackground.setVisible(true);
        this.interactionLabel.setVisible(true);
    }

    openDialog(interaction) {
        // Detener a Amanda.
        this.player.resetArrows();

        // Ocultar el indicador de interacción.
        this.interactionLabel.setVisible(false);
        this.interactionBackground.setVisible(false);

        // Forzar que el indicador se actualice al cerrar.
        this.nearbyInteraction = null;

        // Mostrar la conversación.
        this.dialog.open(interaction);
    }

    hideInteractionUI() {
        this.nearbyInteraction = null;

        this.interactionLabel.setVisible(false);
        this.interactionBackground.setVisible(false);

        this.dialog.close();
    }

    handlePause() {
        this.player.resetArrows();
        this.hideInteractionUI();
    }

    // =====================================
    // GUARDADO DE PARTIDA
    // =====================================

    saveProgress() {
        return SaveManager.save({
            player: {
                x: this.player.sprite.x,
                y: this.player.sprite.y
            },
            decisions: this.decisions
        });
    }

    // =====================================
    // CÁMARA
    // =====================================

    resizeCamera() {
        const width = this.scale.width;
        const height = this.scale.height;

        if (width <= 0 || height <= 0) {
            return;
        }

        const camera = this.cameras.main;

        camera.setViewport(0, 0, width, height);

        camera.setZoom(
            Math.min(
                width / this.roomWidth,
                height / this.roomHeight
            )
        );

        camera.centerOn(
            this.roomWidth / 2,
            this.roomHeight / 2
        );
    }

    // =====================================
    // ACTUALIZACIÓN
    // =====================================

    update() {
        // Durante un diálogo Amanda permanece quieta.
        if (this.dialog.isOpen()) {
            this.player.sprite.setVelocity(0, 0);
            return;
        }

        this.player.update();
        this.updateNearbyInteraction();
    }
}