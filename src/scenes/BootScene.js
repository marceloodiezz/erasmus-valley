import Phaser from 'phaser';

/**
 * Escena de arranque inicial (BootScene).
 * Prepara el entorno inicial y da paso a la pantalla de título.
 */
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // En fases posteriores se precargarán aquí assets críticos o fuentes
  }

  create() {
    // Pasar a la pantalla de título
    this.scene.start('TitleScene');
  }
}
