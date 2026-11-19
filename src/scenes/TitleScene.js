import Phaser from 'phaser';

/**
 * Pantalla inicial del juego (TitleScene).
 * Presenta el videojuego y permite acceder directamente al prototipo de exploración.
 */
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
    this.bgGraphics = null;
    this.stars = [];
    this.titleText = null;
    this.subtitleText = null;
    this.taglineText = null;
    this.promptText = null;
    this.versionText = null;
    this.statusText = null;
    this.hasInteracted = false;
  }

  create() {
    // Fondo estilizado generado por código
    this.bgGraphics = this.add.graphics();
    this.generateStarfield();

    // Creación de objetos de texto
    this.titleText = this.add.text(0, 0, 'ERASMUS VALLEY', {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '44px',
      fontStyle: 'bold',
      color: '#ffdd59',
      stroke: '#3c1361',
      strokeThickness: 8,
      align: 'center'
    }).setOrigin(0.5);

    this.subtitleText = this.add.text(0, 0, 'SALERNO EDITION', {
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '22px',
      fontStyle: 'bold',
      color: '#575fcf',
      stroke: '#050515',
      strokeThickness: 5,
      align: 'center'
    }).setOrigin(0.5);

    this.taglineText = this.add.text(0, 0, 'Cinco aventuras. Un Erasmus. Demasiados problemas.', {
      fontFamily: 'sans-serif',
      fontSize: '15px',
      fontStyle: 'italic',
      color: '#d2dae2',
      align: 'center'
    }).setOrigin(0.5);

    // Botón / aviso interactivo para iniciar la exploración
    this.promptText = this.add.text(0, 0, '▶ Iniciar Exploración con Amy (Haz clic o toca) ◀', {
      fontFamily: 'sans-serif',
      fontSize: '16px',
      fontStyle: 'bold',
      color: '#0be881',
      backgroundColor: 'rgba(5, 10, 20, 0.7)',
      padding: { x: 16, y: 10 },
      align: 'center'
    }).setOrigin(0.5).setInteractive({ cursor: 'pointer' });

    // Animación de pulso para el aviso
    this.tweens.add({
      targets: this.promptText,
      alpha: { from: 1, to: 0.4 },
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.statusText = this.add.text(0, 0, '', {
      fontFamily: 'sans-serif',
      fontSize: '14px',
      color: '#ffc048',
      align: 'center'
    }).setOrigin(0.5);

    this.versionText = this.add.text(0, 0, 'v0.2.1 • Fase 2.1: Prototipo de Movimiento y Exploración', {
      fontFamily: 'sans-serif',
      fontSize: '12px',
      color: '#808e9b',
      align: 'center'
    }).setOrigin(0.5);

    // Ajustar maquetación al tamaño real disponible
    this.layoutElements(this.scale.width, this.scale.height);

    // Escuchar cambios de redimensionado de pantalla
    this.scale.on('resize', this.handleResize, this);

    // Al interactuar con el botón o pulsar espacio/enter, arrancar la exploración
    this.promptText.on('pointerdown', () => this.startExploration());
    this.input.keyboard?.on('keydown-SPACE', () => this.startExploration());
    this.input.keyboard?.on('keydown-ENTER', () => this.startExploration());

    this.events.on('shutdown', () => {
      this.scale.off('resize', this.handleResize, this);
    });
  }

  generateStarfield() {
    this.stars = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      this.stars.push({
        xRatio: Math.random(),
        yRatio: Math.random(),
        size: Math.random() < 0.75 ? 2 : 3,
        alpha: 0.3 + Math.random() * 0.7
      });
    }
  }

  drawBackground(width, height) {
    this.bgGraphics.clear();

    // Fondo degradado nocturno mediterráneo
    this.bgGraphics.fillGradientStyle(0x0a0c16, 0x0a0c16, 0x1e1533, 0x24113b, 1);
    this.bgGraphics.fillRect(0, 0, width, height);

    // Dibujar estrellas adaptadas proporcionalmente a cualquier resolución
    for (const star of this.stars) {
      this.bgGraphics.fillStyle(0xffffff, star.alpha);
      this.bgGraphics.fillRect(star.xRatio * width, star.yRatio * height, star.size, star.size);
    }

    // Línea de horizonte decorativa
    this.bgGraphics.lineStyle(2, 0x575fcf, 0.4);
    this.bgGraphics.lineBetween(width * 0.05, height * 0.85, width * 0.95, height * 0.85);
  }

  layoutElements(width, height) {
    this.drawBackground(width, height);

    const scale = Phaser.Math.Clamp(Math.min(width / 960, height / 540), 0.6, 1.4);

    this.titleText.setFontSize(`${Math.round(44 * scale)}px`);
    this.subtitleText.setFontSize(`${Math.round(22 * scale)}px`);
    this.taglineText.setFontSize(`${Math.round(15 * scale)}px`);
    this.promptText.setFontSize(`${Math.round(16 * scale)}px`);
    this.statusText.setFontSize(`${Math.round(14 * scale)}px`);
    this.versionText.setFontSize(`${Math.round(12 * scale)}px`);

    const centerX = width / 2;
    const centerY = height / 2;

    this.titleText.setPosition(centerX, centerY - 95 * scale);
    this.subtitleText.setPosition(centerX, centerY - 35 * scale);
    this.taglineText.setPosition(centerX, centerY + 20 * scale);
    this.promptText.setPosition(centerX, centerY + 90 * scale);
    this.statusText.setPosition(centerX, centerY + 145 * scale);
    this.versionText.setPosition(centerX, height - 20);
  }

  handleResize(gameSize) {
    this.layoutElements(gameSize.width, gameSize.height);
  }

  startExploration() {
    this.playChimeSound();
    // Transición suave a la escena del mundo de exploración
    this.cameras.main.fadeOut(250, 10, 12, 22);
    this.cameras.main.once('camerafadeoutcomplete', () => {
      this.scene.start('WorldScene');
    });
  }

  playChimeSound() {
    try {
      const audioCtx = this.sound?.context || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const now = audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // Do Mayor (C5, E5, G5)

      notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0.001, now + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, now + index * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.4);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.45);
      });
    } catch {
      // Ignorar si el navegador bloquea audio antes del primer gesto
    }
  }
}
