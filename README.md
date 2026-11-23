# ✈️ Erasmus Valley: Salerno Edition

### Cinco capítulos. Un Erasmus. Y bastantes posibilidades de acabar mal.

**Una aventura narrativa 2D sobre sobrevivir a la universidad, hacer amigos, viajar y conseguir volver a casa por Navidad.**

*Un pequeño videojuego creado como regalo de amigo invisible para Amanda.*

---

### 🎮 [¡Juega a Erasmus Valley!](https://marceloodiezz.github.io/erasmus-valley/)

El juego está disponible directamente desde el navegador, sin necesidad de instalación.

> **🚧 Versión en desarrollo:** actualmente puedes explorar la habitación de Amanda, interactuar con objetos, mantener conversaciones y tomar decisiones. Los cinco capítulos todavía están en desarrollo.

---

## 🇮🇹 Bienvenida a Salerno, Amanda

Amanda tiene 22 años, estudia Física y se ha ido de Erasmus a Salerno. Su plan era sencillo: descubrir Italia, conocer gente, viajar por Europa y, con suerte, aprobar alguna asignatura.

El universo tenía otros planes.

Entre trámites interminables, clases inesperadas, noches que iban a ser «tranquilas» y viajes organizados con una confianza preocupante, Amanda tendrá que tomar decisiones y afrontar sus consecuencias. Algunas se olvidarán pronto. Otras volverán cuando menos lo espere.

**Tu misión: llegar viva —mentalmente hablando— a Navidad.**

## 🎮 ¿Qué tipo de juego es?

Una aventura de exploración en **pixel art 2D**, vista desde arriba, con diálogos, personajes, pequeñas pruebas y decisiones que modifican lo que ocurre.

Podrás explorar habitaciones, calles, universidades y aeropuertos; hablar con los amigos de Amanda; encontrar pistas; resolver situaciones absurdas y elegir cómo responder cuando los planes se compliquen.

No necesitas experiencia jugando. Basta con tener algo de paciencia con la burocracia universitaria.

## 📖 Cinco capítulos, una historia

| | Capítulo | ¿Qué te espera? |
| --- | --- | --- |
| 🧳 | **1. Rumbo a Salerno** | El Learning Agreement, una maleta imposible y el primer aeropuerto de la aventura. |
| 🍕 | **2. Supervivencia: Primeros días** | Una ciudad desconocida, clases de Física y nuevas amistades. |
| 🪩 | **3. Vida Erasmus** | Una salida «tranquila», decisiones cuestionables y quizá algo de romance. |
| 🚆 | **4. Eurotrip** | **Roma, París o Ámsterdam:** tres viajes y tres formas distintas de que algo salga mal. |
| 🎄 | **5. Operación Navidad** | Últimos asuntos pendientes, despedidas y una vuelta a Asturias que no será tan fácil. |

## 🦋 Tus decisiones dejan huella

La historia principal sigue los cinco capítulos, pero lo que eliges cambia conversaciones, pequeñas escenas, recompensas y recuerdos.

Quizá alguien recuerde lo que metiste en la maleta. Quizá la elección de tu primer plan se convierta en una broma recurrente. Y quizá aquella persona que conociste de fiesta vuelva a salir en la conversación.

En **Eurotrip** podrás escoger una de tres aventuras diferentes. Para descubrirlas todas, tendrás que volver a jugar.

## 🧠 Salud mental Erasmus

Amanda comienza con **100 puntos de salud mental**. Los errores y contratiempos la reducen; descansar, superar pruebas y disfrutar con los amigos ayuda a recuperarla.

Si llega a cero, aparece el temido:

### ERASMUS OVER

*Has sufrido un colapso académico, social y emocional.*

Por suerte, podrás reintentarlo desde un punto de control. Bastante castigo es ya estudiar Física.

## 🕹️ Controles

| Acción | Ordenador |
| --- | --- |
| Mover a Amanda | WASD o flechas |
| Interactuar | E o espacio |
| Continuar diálogos | E, espacio o clic |
| Seleccionar respuestas | Teclas numéricas o clic |
| Volver al menú | Botón «Volver al menú» |

Se prevé incorporar controles táctiles para móvil y tablet en horizontal. **Actualmente se recomienda jugar desde un ordenador con teclado.**

El proyecto está en desarrollo, así que la compatibilidad y algunos controles pueden cambiar durante las pruebas.

## 🛠️ Sobre el proyecto

Este juego está siendo desarrollado como un proyecto personal, poco a poco, con **HTML, CSS, JavaScript y Phaser 3** para gestionar el movimiento, las interacciones y los escenarios.

La prioridad es hacer algo **jugable, divertido y personalizado**, no construir un videojuego enorme. No necesita servidor ni cuentas; la versión final se podrá jugar desde el navegador.

El desarrollo será incremental: primero una habitación con AmAmanday, después interacciones y decisiones, luego el primer capítulo completo y, a partir de ahí, el resto de la aventura.

Para consultar la historia, las mecánicas y el plan de implementación, ver **[GAME_DESIGN.md](GAME_DESIGN.md)**.

### Estado actual

- [x] Historia y estructura de los cinco capítulos.
- [x] Diseño de las decisiones y las rutas alternativas.
- [x] Prototipo jugable.
- [ ] Cinco capítulos implementados.
- [ ] Pruebas, personalización y publicación.

---

## Ejecución en local

Para probar el videojuego sin desplegarlo en GitHub Pages, abre una terminal en la raíz del proyecto y ejecuta:

```bash
python3 -m http.server 8000
```

Después, abre en el navegador:

http://localhost:8000

Para probarlo desde un móvil conectado a la misma red Wi-Fi, utiliza la IP local del ordenador:

http://IP_DEL_ORDENADOR:8000

Para detener el servidor, pulsa `Ctrl + C` en la terminal.