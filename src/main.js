import Phaser from 'phaser';
import { gameConfig } from './config/gameConfig.js';
import { initOrientationManager } from './utils/orientation.js';

// Inicialización de la instancia del juego Phaser 3
window.addEventListener('DOMContentLoaded', () => {
  const game = new Phaser.Game(gameConfig);

  // Inicializar el control de orientación para móviles y tablets
  initOrientationManager(game);

  // Exponer la instancia en desarrollo para depuración si fuera necesario
  if (import.meta.env.DEV) {
    window.__PHASER_GAME__ = game;
  }
});
