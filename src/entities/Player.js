import Phaser from 'phaser';

/**
 * Entidad controlable que representa a Amy (Amanda).
 * Gestiona movimiento en cuatro direcciones con normalización diagonal,
 * animaciones de reposo y marcha, y tamaño de colisión optimizado para vista cenital.
 */
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'amy', 0);

    // Añadir al mundo y a la física
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Ajustar caja de colisión a los pies para profundidad cenital natural
    // (permite acercarse a obstáculos y pasar por detrás de objetos)
    this.body.setSize(18, 12);
    this.body.setOffset(7, 20);
    this.setCollideWorldBounds(true);

    // Parámetros de movimiento
    this.speed = 160;
    this.facing = 'down';

    // Registrar animaciones si no existen
    Player.initAnimations(scene);
    this.play('amy_idle_down');
  }

  /**
   * Crea las animaciones de 4 direcciones para Amy si aún no han sido registradas.
   */
  static initAnimations(scene) {
    if (scene.anims.exists('amy_walk_down')) return;

    // Fila 0: Down (frames 0, 1, 2, 3)
    scene.anims.create({
      key: 'amy_walk_down',
      frames: scene.anims.generateFrameNumbers('amy', { frames: [0, 1, 0, 3] }),
      frameRate: 8,
      repeat: -1
    });
    scene.anims.create({
      key: 'amy_idle_down',
      frames: [{ key: 'amy', frame: 0 }],
      frameRate: 1
    });

    // Fila 1: Left (frames 4, 5, 6, 7)
    scene.anims.create({
      key: 'amy_walk_left',
      frames: scene.anims.generateFrameNumbers('amy', { frames: [4, 5, 4, 7] }),
      frameRate: 8,
      repeat: -1
    });
    scene.anims.create({
      key: 'amy_idle_left',
      frames: [{ key: 'amy', frame: 4 }],
      frameRate: 1
    });

    // Fila 2: Right (frames 8, 9, 10, 11)
    scene.anims.create({
      key: 'amy_walk_right',
      frames: scene.anims.generateFrameNumbers('amy', { frames: [8, 9, 8, 11] }),
      frameRate: 8,
      repeat: -1
    });
    scene.anims.create({
      key: 'amy_idle_right',
      frames: [{ key: 'amy', frame: 8 }],
      frameRate: 1
    });

    // Fila 3: Up (frames 12, 13, 14, 15)
    scene.anims.create({
      key: 'amy_walk_up',
      frames: scene.anims.generateFrameNumbers('amy', { frames: [12, 13, 12, 15] }),
      frameRate: 8,
      repeat: -1
    });
    scene.anims.create({
      key: 'amy_idle_up',
      frames: [{ key: 'amy', frame: 12 }],
      frameRate: 1
    });
  }

  /**
   * Actualiza el movimiento y la animación según entradas de teclado y joystick.
   * @param {Object} keyboardInput - Teclado ({ left, right, up, down })
   * @param {Object} joystickInput - Joystick ({ x, y, isDown })
   */
  updateMovement(keyboardInput, joystickInput) {
    let moveX = 0;
    let moveY = 0;

    // 1. Entradas de teclado (WASD + Flechas)
    if (keyboardInput) {
      if (keyboardInput.left) moveX -= 1;
      if (keyboardInput.right) moveX += 1;
      if (keyboardInput.up) moveY -= 1;
      if (keyboardInput.down) moveY += 1;
    }

    // 2. Entradas de joystick virtual táctil (si está en uso)
    if (joystickInput && joystickInput.isDown) {
      moveX += joystickInput.x;
      moveY += joystickInput.y;
    }

    const vector = new Phaser.Math.Vector2(moveX, moveY);

    if (vector.length() > 0) {
      // Normalizar para que la velocidad diagonal no sea superior a la ortogonal
      vector.normalize().scale(this.speed);
      this.setVelocity(vector.x, vector.y);

      // Determinar dirección predominante para la animación
      if (Math.abs(vector.x) > Math.abs(vector.y)) {
        this.facing = vector.x > 0 ? 'right' : 'left';
      } else {
        this.facing = vector.y > 0 ? 'down' : 'up';
      }

      this.anims.play(`amy_walk_${this.facing}`, true);
    } else {
      // Detenerse y reproducir animación de reposo en la última dirección
      this.setVelocity(0, 0);
      this.anims.play(`amy_idle_${this.facing}`, true);
    }
  }
}
