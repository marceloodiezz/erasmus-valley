import Phaser from 'phaser';

/**
 * Joystick virtual táctil para dispositivos móviles y tablets.
 * Permite control analógico de movimiento en 360 grados, normalizado entre -1 y 1.
 * Funciona en la capa de interfaz (UIScene), libre de distorsiones de la cámara del mundo.
 */
export default class VirtualJoystick {
  constructor(scene) {
    this.scene = scene;
    this.maxDistance = 38; // Radio máximo de arrastre

    this.output = {
      x: 0,
      y: 0,
      isDown: false
    };

    this.activePointer = null;

    // Crear elementos visuales en la escena de interfaz
    this.base = scene.add.image(0, 0, 'joystick_base')
      .setDepth(100)
      .setAlpha(0.65);

    this.thumb = scene.add.image(0, 0, 'joystick_thumb')
      .setDepth(101)
      .setAlpha(0.85);

    // Zona interactiva amplia para facilitar el toque táctil
    this.touchZone = scene.add.zone(0, 0, 160, 160)
      .setDepth(99)
      .setInteractive({ cursor: 'pointer' });

    this.setupEvents();
    this.reposition(scene.scale.width, scene.scale.height);
  }

  setupEvents() {
    this.touchZone.on('pointerdown', (pointer) => {
      this.activePointer = pointer;
      this.output.isDown = true;
      this.base.setAlpha(0.9);
      this.thumb.setAlpha(1.0);
      this.updateThumbPosition(pointer);
    });

    this.scene.input.on('pointermove', (pointer) => {
      if (this.output.isDown && this.activePointer && this.activePointer.id === pointer.id) {
        this.updateThumbPosition(pointer);
      }
    });

    const releaseJoystick = (pointer) => {
      if (this.activePointer && this.activePointer.id === pointer.id) {
        this.resetJoystick();
      }
    };

    this.scene.input.on('pointerup', releaseJoystick);
    this.scene.input.on('pointerout', releaseJoystick);
  }

  updateThumbPosition(pointer) {
    const dx = pointer.x - this.base.x;
    const dy = pointer.y - this.base.y;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) {
      this.thumb.setPosition(this.base.x, this.base.y);
      this.output.x = 0;
      this.output.y = 0;
      return;
    }

    const angle = Math.atan2(dy, dx);
    const clampedDistance = Math.min(distance, this.maxDistance);

    this.thumb.x = this.base.x + Math.cos(angle) * clampedDistance;
    this.thumb.y = this.base.y + Math.sin(angle) * clampedDistance;

    // Normalizar vector de salida entre -1 y 1
    this.output.x = (Math.cos(angle) * clampedDistance) / this.maxDistance;
    this.output.y = (Math.sin(angle) * clampedDistance) / this.maxDistance;
  }

  resetJoystick() {
    this.output.isDown = false;
    this.output.x = 0;
    this.output.y = 0;
    this.activePointer = null;

    this.base.setAlpha(0.65);
    this.thumb.setAlpha(0.85);

    // Suavizado de retorno al centro
    this.scene.tweens.add({
      targets: this.thumb,
      x: this.base.x,
      y: this.base.y,
      duration: 100,
      ease: 'Back.easeOut'
    });
  }

  /**
   * Reposiciona el joystick de forma segura en la esquina inferior izquierda.
   */
  reposition(width, height) {
    // Margen seguro considerando barras de navegación móviles
    const posX = Math.max(75, Math.min(110, width * 0.12));
    const posY = height - Math.max(75, Math.min(100, height * 0.22));

    this.base.setPosition(posX, posY);
    this.thumb.setPosition(posX, posY);
    this.touchZone.setPosition(posX, posY);
  }

  getValue() {
    return this.output;
  }

  destroy() {
    this.base.destroy();
    this.thumb.destroy();
    this.touchZone.destroy();
  }
}
