class SaveManager {

    static KEY = "erasmus-valley-save";
    static VERSION = 1;

    // Guardar la partida.
    static save(data) {
        const saveData = {
            version: this.VERSION,
            player: {
                x: data.player.x,
                y: data.player.y
            },
            decisions: { ...data.decisions }
        };

        try {
            localStorage.setItem(
                this.KEY,
                JSON.stringify(saveData)
            );

            return true;
        } catch (error) {
            console.error("No se pudo guardar la partida:", error);
            return false;
        }
    }

    // Recuperar una partida existente.
    static load() {
        try {
            const stored = localStorage.getItem(this.KEY);

            if (!stored) return null;

            const data = JSON.parse(stored);

            // Comprobar el formato de la partida.
            if (
                !data ||
                data.version !== this.VERSION ||
                !data.player ||
                !Number.isFinite(data.player.x) ||
                !Number.isFinite(data.player.y) ||
                data.player.x < 0 ||
                data.player.x > 960 ||
                data.player.y < 0 ||
                data.player.y > 576 ||
                !data.decisions ||
                typeof data.decisions !== "object" ||
                Array.isArray(data.decisions)
            ) {
                return null;
            }

            return data;
        } catch (error) {
            console.error("No se pudo cargar la partida:", error);
            return null;
        }
    }

    // Comprobar si existe una partida válida.
    static hasSave() {
        return this.load() !== null;
    }

    // Eliminar la partida anterior.
    static clear() {
        try {
            localStorage.removeItem(this.KEY);
            return true;
        } catch (error) {
            console.error("No se pudo borrar la partida:", error);
            return false;
        }
    }
}