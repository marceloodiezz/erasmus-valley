const config = {
    type: Phaser.AUTO,
    parent: "game-container",

    backgroundColor: "#172c30",

    scale: {
        mode: Phaser.Scale.RESIZE,
        width: "100%",
        height: "100%"
    },

    render: {
        pixelArt: true
    },

    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: [RoomScene]
};

const game = new Phaser.Game(config);

// =====================================
// ELEMENTOS DEL MENÚ
// =====================================

const mainMenu = document.getElementById("main-menu");
const newGameButton = document.getElementById("new-game");
const continueGameButton = document.getElementById("continue-game");
const backMenuButton = document.getElementById("back-menu");
const touchControlsElement = document.getElementById("touch-controls");

const touchControls = new TouchControls((x, y) => {
    const roomScene = game.scene.getScene("RoomScene");

    // Enviar movimiento solo durante una partida activa.
    if (!roomScene.scene.isActive() || !roomScene.player) {
        return;
    }

    // No permitir movimiento durante los diálogos.
    if (roomScene.dialog?.isOpen()) {
        return;
    }

    roomScene.player.setTouchDirection(x, y);
});

// Las escenas pueden avisar cuando comienza una interacción.
game.events.on("interaction-open", () => {
    touchControls.reset();
});

// Actualizar el botón Continuar.
function refreshContinueButton() {
    continueGameButton.disabled = !SaveManager.hasSave();
}

// Comprobar si existe una partida guardada.
refreshContinueButton();

// =====================================
// NUEVA PARTIDA
// =====================================

newGameButton.addEventListener("click", () => {
    newGameButton.blur();

    // Eliminar el progreso anterior.
    SaveManager.clear();

    mainMenu.classList.add("hidden");
    backMenuButton.classList.remove("hidden");

    touchControls.reset();
    touchControlsElement.classList.remove("hidden");

    const roomScene = game.scene.getScene("RoomScene");

    // Reiniciar sin datos anteriores.
    roomScene.scene.restart({
        newGame: true
    });
});

// =====================================
// CONTINUAR PARTIDA
// =====================================

continueGameButton.addEventListener("click", () => {
    continueGameButton.blur();

    const saveData = SaveManager.load();

    if (!saveData) {
        refreshContinueButton();
        return;
    }

    mainMenu.classList.add("hidden");
    backMenuButton.classList.remove("hidden");

    touchControls.reset();
    touchControlsElement.classList.remove("hidden");

    const roomScene = game.scene.getScene("RoomScene");

    // Reiniciar recuperando el progreso.
    roomScene.scene.restart({
        saveData: saveData
    });
});

// =====================================
// VOLVER AL MENÚ
// =====================================

backMenuButton.addEventListener("click", () => {
    backMenuButton.blur();

    const roomScene = game.scene.getScene("RoomScene");

    // Guardar antes de salir.
    roomScene.saveProgress();

    // Pausar el juego.
    roomScene.scene.pause();

    touchControls.reset();
    touchControlsElement.classList.add("hidden");

    mainMenu.classList.remove("hidden");
    backMenuButton.classList.add("hidden");

    // Activar Continuar si se ha guardado correctamente.
    refreshContinueButton();
});

// =====================================
// CONTROLES DEL NAVEGADOR
// =====================================

// Evitar que las flechas y el espacio
// desplacen la página durante el juego.
window.addEventListener("keydown", (event) => {
    const blockedKeys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        " "
    ];

    if (
        mainMenu.classList.contains("hidden") &&
        blockedKeys.includes(event.key)
    ) {
        event.preventDefault();
    }
});