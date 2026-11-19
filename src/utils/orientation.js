/**
 * Gestor de orientación para Erasmus Valley: Salerno Edition.
 * Controla que en dispositivos móviles y tablets el juego sea exclusivamente horizontal.
 * Si se detecta orientación vertical en móvil/tablet:
 * - Muestra la pantalla superpuesta "¡Gira tu dispositivo!".
 * - Pausa las escenas activas del juego y silencia el audio.
 * - Bloquea cualquier interacción.
 * Al girar de nuevo a horizontal:
 * - Oculta la pantalla superpuesta.
 * - Reanuda automáticamente el juego desde el mismo punto.
 */

export function isMobileOrTablet() {
  const userAgent = navigator.userAgent || '';
  const isMobileUA = /Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry/i.test(userAgent);
  const isIPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  return isMobileUA || isIPad || hasTouch;
}

export function initOrientationManager(game) {
  const overlay = document.getElementById('rotate-device-overlay');
  if (!overlay) return;

  let isCurrentlyPausedByOrientation = false;

  function checkOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;
    const isMobileDevice = isMobileOrTablet();

    // Solo activamos la pantalla superpuesta de aviso en móviles y tablets en vertical
    if (isMobileDevice && isPortrait) {
      if (!isCurrentlyPausedByOrientation) {
        isCurrentlyPausedByOrientation = true;
        overlay.classList.remove('hidden');

        // Pausar escenas activas
        if (game && game.scene) {
          game.scene.scenes.forEach((scene) => {
            if (scene.scene.isActive()) {
              scene.scene.pause();
            }
          });
        }
      }
    } else {
      if (isCurrentlyPausedByOrientation) {
        isCurrentlyPausedByOrientation = false;
        overlay.classList.add('hidden');

        // Reanudar escenas pausadas
        if (game && game.scene) {
          game.scene.scenes.forEach((scene) => {
            if (scene.scene.isPaused()) {
              scene.scene.resume();
            }
          });
        }
      }
    }
  }

  // Eventos de comprobación
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', checkOrientation);

  if (window.matchMedia) {
    const portraitMql = window.matchMedia('(orientation: portrait)');
    if (portraitMql.addEventListener) {
      portraitMql.addEventListener('change', checkOrientation);
    } else if (portraitMql.addListener) {
      portraitMql.addListener(checkOrientation);
    }
  }

  // Comprobación inicial al cargar
  checkOrientation();
}
