import Phaser from 'phaser';
import { generateProvisionalTextures } from '../utils/textureGenerator.js';

/**
 * Escena de arranque inicial (BootScene).
 * Genera los recursos gráficos provisionales (spritesheet de Amy, baldosas y controles)
 * y pasa a la pantalla de título.
 */
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  create() {
    // Generar texturas pixel art provisionales para la Fase 2.1
    generateProvisionalTextures(this);

    // Iniciar pantalla de título
    this.scene.start('TitleScene');
  }
}
