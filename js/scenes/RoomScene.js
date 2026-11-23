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

        // Sistema de diálogos.
        this.dialog = new DialogManager((id, value) => {
            this.decisions[id] = value;
            this.saveProgress();
        });

        // Sistema de interacciones.
        this.interactionManager = new InteractionManager(
            this,
            this.player,
            roomInteractions,
            this.dialog
        );

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

            window.removeEventListener(
                "pagehide",
                this.handlePageHide
            );

            this.interactionManager.destroy();
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

    handlePause() {
        this.player.resetMovement();
        this.interactionManager.reset();
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
        if (this.dialog.isOpen()) {
            this.player.sprite.setVelocity(0, 0);
            return;
        }

        this.player.update();
        this.interactionManager.update();
    }
}