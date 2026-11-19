import Phaser from 'phaser';
import BootScene from '../scenes/BootScene.js';
import TitleScene from '../scenes/TitleScene.js';
import WorldScene from '../scenes/WorldScene.js';
import UIScene from '../scenes/UIScene.js';

/**
 * Configuración principal de Phaser 3 para Erasmus Valley: Salerno Edition.
 * Utiliza modo RESIZE para adaptarse dinámicamente al 100% de la pantalla,
 * con la escena UIScene desacoplada a 1:1 para un HUD y joystick táctil perfectos en móvil y tablet.
 */
export const gameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  backgroundColor: '#0a0c16',
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: '100%',
    height: '100%',
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  },
  scene: [BootScene, TitleScene, WorldScene, UIScene]
};
