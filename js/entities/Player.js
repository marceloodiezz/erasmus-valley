class Player {

    constructor(scene, x, y) {
        this.scene = scene;
        this.speed = 175;
        this.facing = "down";
        this.wasMoving = false;

        // Crear el personaje.
        this.sprite = scene.physics.add.sprite(x, y, "amy-down", 0);
        this.sprite.setScale(1.45);

        this.sprite.setDepth(10);
        this.sprite.setCollideWorldBounds(true);

        // Colisión alrededor de los pies.
        this.sprite.body.setSize(18, 12);
        this.sprite.body.setOffset(23, 49);

        // Crear las animaciones.
        this.createAnimations();

        // Controles WASD mediante Phaser.
        this.keys = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        // Estado de las flechas.
        this.arrows = {
            up: false,
            down: false,
            left: false,
            right: false
        };

        const arrowKeys = {
            ArrowUp: "up",
            ArrowDown: "down",
            ArrowLeft: "left",
            ArrowRight: "right"
        };

        this.handleKeyDown = (event) => {
            const direction = arrowKeys[event.code];

            if (direction) {
                this.arrows[direction] = true;
                event.preventDefault();
            }
        };

        this.handleKeyUp = (event) => {
            const direction = arrowKeys[event.code];

            if (direction) {
                this.arrows[direction] = false;
                event.preventDefault();
            }
        };

        this.resetArrows = () => {
            for (const direction in this.arrows) {
                this.arrows[direction] = false;
            }

            this.sprite.setVelocity(0, 0);
            this.sprite.anims.stop();
            this.wasMoving = false;
            this.sprite.setTexture("amy-" + this.facing, 0);
        };

        window.addEventListener("keydown", this.handleKeyDown, true);
        window.addEventListener("keyup", this.handleKeyUp, true);
        window.addEventListener("blur", this.resetArrows);

        scene.events.once("shutdown", () => {
            window.removeEventListener("keydown", this.handleKeyDown, true);
            window.removeEventListener("keyup", this.handleKeyUp, true);
            window.removeEventListener("blur", this.resetArrows);
        });
    }

    createAnimations() {
        const directions = ["down", "up", "left", "right"];

        for (const direction of directions) {
            const animationKey = "amy-walk-" + direction;

            // Evitar duplicar animaciones al reiniciar la escena.
            if (this.scene.anims.exists(animationKey)) {
                continue;
            }

            this.scene.anims.create({
                key: animationKey,
                frames: this.scene.anims.generateFrameNumbers(
                    "amy-" + direction,
                    { start: 0, end: 3 }
                ),
                frameRate: 12,
                repeat: -1
            });
        }
    }

    update() {
        if (this.scene.dialogOpen) {
            this.sprite.setVelocity(0, 0);
            return;
        }

        let x = 0;
        let y = 0;

        // Movimiento horizontal.
        if (this.arrows.left || this.keys.left.isDown) {
            x = -1;
        } else if (this.arrows.right || this.keys.right.isDown) {
            x = 1;
        }

        // Movimiento vertical.
        if (this.arrows.up || this.keys.up.isDown) {
            y = -1;
        } else if (this.arrows.down || this.keys.down.isDown) {
            y = 1;
        }

        const direction = new Phaser.Math.Vector2(x, y);
        const isMoving = direction.lengthSq() > 0;

        if (isMoving) {
            direction.normalize().scale(this.speed);

            // Actualizar orientación.
            if (Math.abs(x) > Math.abs(y)) {
                this.facing = x < 0 ? "left" : "right";
            } else {
                this.facing = y < 0 ? "up" : "down";
            }

            // Reproducir la animación sin reiniciarla continuamente.
            this.sprite.anims.play(
                "amy-walk-" + this.facing,
                true
            );

        } else if (this.wasMoving) {
            // Cambiar a reposo solo cuando Amy deja de caminar.
            this.sprite.anims.stop();
            this.sprite.setTexture("amy-" + this.facing, 0);
        }

        this.sprite.setVelocity(direction.x, direction.y);

        this.wasMoving = isMoving;
    }

}