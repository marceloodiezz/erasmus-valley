import Phaser from 'phaser';
import VirtualJoystick from '../ui/VirtualJoystick.js';

/**
 * Escena de interfaz (UIScene).
 * Se ejecuta en paralelo a 1:1 de escala de pantalla (sin verse afectada por el zoom de cámara del mundo).
 * Alberga el HUD superior, los botones de navegación y el joystick virtual táctil.
 */
export default class UIScene extends Phaser.Scene {
  constructor() {
    super('UIScene');
    this.joystick = null;
    this.hudBg = null;
    this.hudTitle = null;
    this.hudHint = null;
    this.btnMenu = null;
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    // 1. Barra superior de HUD
    this.hudBg = this.add.graphics().setDepth(10);

    this.hudTitle = this.add.text(16, 11, 'Erasmus Valley', {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '14px',
      fontStyle: 'bold',
      color: '#ffdd59'
    }).setDepth(12);

    this.hudHint = this.add.text(180, 12, 'WASD / Flechas / Joystick táctil', {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      color: '#d2dae2'
    }).setDepth(12);

    // Botón accesible de Menú
    this.btnMenu = this.add.text(width - 95, 8, '☰ Menú', {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      fontStyle: 'bold',
      color: '#0be881',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: { x: 10, y: 5 }
    }).setDepth(12).setInteractive({ cursor: 'pointer' });

    this.btnMenu.on('pointerdown', () => this.returnToTitle());

    // Tecla Escape para salir al menú
    this.input.keyboard?.on('keydown-ESC', () => this.returnToTitle());

    // 2. Joystick virtual táctil (esquina inferior izquierda)
    this.joystick = new VirtualJoystick(this);

    // 3. Ajuste inicial de maquetación
    this.layoutUI(width, height);

    // 4. Escuchar cambios de redimensionado de pantalla
    this.scale.on('resize', this.handleResize, this);
    this.events.on('shutdown', () => {
      this.scale.off('resize', this.handleResize, this);
    });
  }

  layoutUI(width, height) {
    const barHeight = 40;

    // Dibujar fondo del HUD con altura fija y compacta
    this.hudBg.clear();
    this.hudBg.fillStyle(0x0a0c16, 0.85);
    this.hudBg.fillRect(0, 0, width, barHeight);
    this.hudBg.lineStyle(1, 0x575fcf, 0.4);
    this.hudBg.lineBetween(0, barHeight, width, barHeight);

    // En pantallas estrechas o móviles, simplificar los textos para evitar solapamientos
    if (width < 640) {
      this.hudTitle.setText('Erasmus Valley');
      this.hudHint.setVisible(false);
    } else {
      this.hudTitle.setText('Erasmus Valley — Prototipo 2.1');
      this.hudHint.setVisible(true);
      this.hudHint.setPosition(Math.min(300, width * 0.35), 12);
    }

    // Ubicar el botón de menú en el extremo derecho
    this.btnMenu.setPosition(width - 85, 7);

    // Reposicionar joystick en la esquina inferior izquierda
    if (this.joystick) {
      this.joystick.reposition(width, height);
    }
  }

  handleResize(gameSize) {
    this.layoutUI(gameSize.width, gameSize.height);
  }

  getJoystickValue() {
    return this.joystick ? this.joystick.getValue() : { x: 0, y: 0, isDown: false };
  }

  returnToTitle() {
    this.scene.stop('UIScene');
    this.scene.stop('WorldScene');
    this.scene.start('TitleScene');
  }
}
