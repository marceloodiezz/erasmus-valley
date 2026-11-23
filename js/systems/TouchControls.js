class TouchControls {

    constructor(onMove) {
        this.base = document.getElementById("joystick-base");
        this.thumb = document.getElementById("joystick-thumb");

        this.onMove = onMove;
        this.pointerId = null;

        this.base.addEventListener("pointerdown", event => {
            if (this.pointerId !== null) return;

            event.preventDefault();
            this.pointerId = event.pointerId;

            this.base.setPointerCapture(event.pointerId);
            this.update(event);
        });

        this.base.addEventListener("pointermove", event => {
            if (event.pointerId !== this.pointerId) return;

            event.preventDefault();
            this.update(event);
        });

        const release = event => {
            if (event.pointerId === this.pointerId) {
                this.reset();
            }
        };

        this.base.addEventListener("pointerup", release);
        this.base.addEventListener("pointercancel", release);
        this.base.addEventListener("lostpointercapture", release);

        window.addEventListener("blur", () => this.reset());

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) this.reset();
        });

        // Soltar el joystick al cambiar la orientación.
        window.addEventListener("orientationchange", () => this.reset());
    }

    update(event) {
        const rect = this.base.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = event.clientX - centerX;
        const dy = event.clientY - centerY;

        const distance = Math.hypot(dx, dy);

        // Radio máximo sin que el círculo salga de la base.
        const maxDistance =
            (rect.width - this.thumb.offsetWidth) / 2;

        const factor = distance > maxDistance
            ? maxDistance / distance
            : 1;

        const x = dx * factor;
        const y = dy * factor;

        // Desplazar visualmente el círculo interior.
        this.thumb.style.left = `calc(50% + ${x}px)`;
        this.thumb.style.top = `calc(50% + ${y}px)`;

        // Zona muerta para evitar movimientos accidentales.
        if (distance < 8) {
            this.onMove(0, 0);
            return;
        }

        // Enviar una dirección normalizada.
        this.onMove(
            x / maxDistance,
            y / maxDistance
        );
    }

    reset() {
        this.pointerId = null;

        this.thumb.style.left = "50%";
        this.thumb.style.top = "50%";

        this.onMove(0, 0);
    }
}