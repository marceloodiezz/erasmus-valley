class DialogManager {

    constructor(onChoice = () => {}) {
        this.overlay = document.getElementById("dialog-overlay");
        this.speakerElement = document.getElementById("dialog-speaker");
        this.textElement = document.getElementById("dialog-text");
        this.choicesElement = document.getElementById("dialog-choices");
        this.closeButton = document.getElementById("dialog-close");

        this.onChoice = onChoice;

        this.lines = [];
        this.currentLine = 0;
        this.opened = false;

        this.handleClick = () => this.next();

        this.closeButton.addEventListener(
            "click",
            this.handleClick
        );
    }

    // Iniciar una conversación.
    open(interaction) {
        // Aceptar diálogos nuevos y antiguos.
        const lines = interaction.lines || [
            {
                speaker: interaction.speaker,
                text: interaction.text
            }
        ];

        // Copia para poder añadir respuestas sin
        // modificar el diálogo original.
        this.lines = lines.map(line => ({ ...line }));

        this.currentLine = 0;
        this.opened = true;

        this.overlay.classList.remove("hidden");
        this.showLine();
    }

    // Mostrar la frase actual.
    showLine() {
        const line = this.lines[this.currentLine];

        this.speakerElement.textContent = line.speaker;
        this.textElement.textContent = line.text;

        // Limpiar las opciones anteriores.
        this.choicesElement.replaceChildren();
        this.choicesElement.classList.add("hidden");

        // Mostrar opciones si existen.
        if (line.choices && line.choices.length > 0) {
            this.showChoices(line);
            return;
        }

        const isLastLine =
            this.currentLine === this.lines.length - 1;

        this.closeButton.textContent =
            isLastLine ? "Cerrar" : "Continuar";

        this.closeButton.classList.remove("hidden");
    }

    // Mostrar las respuestas disponibles.
    showChoices(line) {
        this.closeButton.classList.add("hidden");
        this.choicesElement.classList.remove("hidden");

        line.choices.forEach((choice, index) => {
            const button = document.createElement("button");

            button.type = "button";
            button.className = "dialog-choice";
            button.textContent =
                (index + 1) + ". " + choice.text;

            button.addEventListener("click", () => {
                this.choose(index);
            });

            this.choicesElement.appendChild(button);
        });
    }

    // Seleccionar una respuesta.
    choose(index) {
        if (!this.opened) return;

        const line = this.lines[this.currentLine];

        if (!line.choices) return;

        const choice = line.choices[index];

        if (!choice) return;

        // Registrar la decisión.
        if (line.decisionId) {
            this.onChoice(line.decisionId, choice.id);
        }

        // Insertar el comentario correspondiente
        // después de la pregunta.
        if (choice.response) {
            this.lines.splice(
                this.currentLine + 1,
                0,
                {
                    speaker: choice.speaker || "Narrador",
                    text: choice.response
                }
            );
        }

        // Avanzar en la conversación.
        this.currentLine++;
        this.showLine();
    }

    // Avanzar a la siguiente frase.
    next() {
        if (!this.opened) return;

        const line = this.lines[this.currentLine];

        // Una decisión requiere elegir una respuesta.
        if (line.choices && line.choices.length > 0) {
            return;
        }

        this.currentLine++;

        if (this.currentLine >= this.lines.length) {
            this.close();
        } else {
            this.showLine();
        }
    }

    // Cerrar la conversación.
    close() {
        this.opened = false;
        this.lines = [];
        this.currentLine = 0;

        this.choicesElement.replaceChildren();
        this.choicesElement.classList.add("hidden");
        this.closeButton.classList.remove("hidden");
        this.overlay.classList.add("hidden");
    }

    isOpen() {
        return this.opened;
    }

    // Indicar si esperamos una elección.
    hasChoices() {
        if (!this.opened) return false;

        const line = this.lines[this.currentLine];

        return !!(line.choices && line.choices.length > 0);
    }

    destroy() {
        this.close();

        this.closeButton.removeEventListener(
            "click",
            this.handleClick
        );
    }
}