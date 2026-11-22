# Erasmus Valley: Salerno Edition

## 1. La idea

**Erasmus Valley: Salerno Edition** es una aventura narrativa 2D de humor, exploración y decisiones creada como regalo de amigo invisible para Amanda («Amy»), una estudiante de Física de 22 años que está de Erasmus en Salerno, Italia.

Amy tendrá que sobrevivir a trámites universitarios, maletas imposibles, clases, amistades, fiestas, romances, viajes y un regreso a Asturias por Navidad. Entre situaciones absurdas y bromas personales, el juego terminará con una felicitación especial.

Se inspira en la cercanía y la exploración de juegos como *Stardew Valley*, **sin intentar reproducir sus sistemas complejos**. No habrá combates, cultivos, economía, niveles de personaje ni mundo abierto.

### 1.1. Objetivo del proyecto

Crear **un juego pequeño, completo, divertido y fácil de jugar**, desarrollado por su creador paso a paso con ayuda de ChatGPT. Cada mejora se programará, probará y ajustará antes de continuar. El documento es una guía flexible, no un contrato de funcionalidades irrelevantes.

### 1.2. Requisitos que sí se mantienen

- **Cinco capítulos** con historia propia, conectados por una trama principal.
- Amy como única protagonista jugable; personajes secundarios (NPC) con los que hablar e interactuar.
- Exploración libre en escenarios pequeños, vista cenital y movimiento en cuatro direcciones.
- Diálogos breves, humorísticos y con elecciones.
- **Todas las elecciones ofrecidas al jugador tendrán alguna consecuencia reconocible**: una reacción, una pista, un objeto, un cambio en la salud mental, una escena, un objetivo resuelto de otra manera o un recuerdo en capítulos posteriores.
- Consecuencias acumuladas entre capítulos para que algunas elecciones importen más adelante.
- **Rutas realmente diferentes en el capítulo 4**, para que una segunda partida pueda ofrecer una aventura nueva.
- Minipruebas sencillas, barra de salud mental, objetivos y guardado local.
- Un final navideño personalizado, cálido y con un toque de humor.

### 1.3. Alcance realista

- Duración **orientativa**: 20–35 minutos en una primera partida; se ajustará después de probarlo.
- Dificultad baja o moderada; sin bloqueos permanentes por decisiones equivocadas.
- Escenarios compactos, con interacciones interesantes y desplazamientos cortos.
- Prioridad inicial: **ordenador y navegador**. El diseño dejará espacio para controles táctiles y orientación horizontal en móvil, que se implementarán y probarán después de tener un capítulo completo.
- Distribución final: página web estática, preferiblemente GitHub Pages.

---

## 2. Historia y estructura

La narración principal mantiene un orden lineal: terminar un capítulo desbloquea el siguiente. Las decisiones modifican el modo de llegar a cada objetivo, escenas, relaciones y comentarios posteriores, pero no impiden terminar la historia.

| Capítulo | Título | Historia principal | Diferencia jugable |
| --- | --- | --- | --- |
| 1 | **Rumbo a Salerno** | Prepararse en Asturias y llegar a Italia | Puzle universitario, equipaje y aeropuerto |
| 2 | **Supervivencia: Primeros días** | Adaptarse, encontrar la universidad y hacer amigos | Exploración, preguntas y conversaciones |
| 3 | **Vida Erasmus** | Salir de fiesta y sobrevivir a la noche | Reunir al grupo, prueba de ritmo, romance y decisiones |
| 4 | **Eurotrip** | Organizar un viaje e improvisar ante los imprevistos | **Tres rutas alternativas: Roma, París o Ámsterdam** |
| 5 | **Operación Navidad** | Resolver asuntos pendientes y regresar a Asturias | Recuerdos, despedidas y cierre personalizado |

### 2.1. Tono

Los diálogos serán naturales y rápidos. El narrador comentará con ironía los desastres de Amy, sin interrumpir continuamente. El humor se apoyará en la burocracia, la Física, la vida universitaria, los viajes y referencias personales que se incorporarán después. La última escena será más emotiva, sin perder el tono del juego.

### 2.2. Personajes

- **Amy**: protagonista, estudiante de Física, tranquila, a veces estresada, con sentido del humor y afición al cine. Pelo castaño de longitud media, principalmente liso, algo ondulado.
- **Narrador**: voz irónica que acompaña la aventura.
- **Luca**: estudiante italiano sociable y bromista; da pistas y propone planes.
- **Sofia**: estudiante Erasmus organizada y viajera; aporta información y ayuda a preparar viajes.
- **Alex**: estudiante Erasmus impulsivo, amante de improvisar; suele provocar situaciones disparatadas.
- **NPC de cada capítulo**: profesores, estudiantes, trabajadores del aeropuerto, turistas y otros personajes de una o dos conversaciones.

Los personajes recurrentes aparecerán en varios capítulos. No necesitan inteligencia artificial ni movimientos complejos: podrán estar quietos o recorrer trayectos muy cortos. Lo importante será qué cuentan y cómo reaccionan.

---

## 3. Cómo se juega

### 3.1. Exploración

- Vista desde arriba, escenarios pixel art y cuatro direcciones.
- Movimiento con WASD o flechas; una tecla para interactuar (E o espacio).
- Colisiones simples con paredes, muebles y obstáculos sólidos.
- Interacción al acercarse a un NPC u objeto; indicador visible («E · Hablar», «E · Examinar»).
- Puertas o puntos de salida para cambiar de escenario.
- La cámara puede permanecer fija en mapas pequeños; solo seguirá a Amy cuando el mapa lo necesite.

**Simplificación:** no habrá simulación de rutinas de NPC, físicas avanzadas ni mapas gigantes.

### 3.2. Diálogos e interacciones

Un cuadro mostrará el nombre del personaje, su texto y, cuando proceda, dos o tres respuestas. Mientras esté abierto, Amy no caminará. Los NPC podrán dar pistas, desbloquear un objetivo, comentar decisiones previas o regalar un objeto.

Un mismo sistema servirá para conversaciones, examinación de objetos y mensajes del narrador. Las frases y sus respuestas se definirán como datos, sin crear código específico para cada conversación.

### 3.3. Regla de las decisiones: ninguna respuesta de adorno

**Cada vez que el juego pida elegir, cada opción producirá un efecto visible o recordado.** No significa que haya que crear una historia completa para cada frase. Usaremos tres escalas:

1. **Inmediata:** otra respuesta del NPC, una pista, pérdida o recuperación de salud mental, un objeto o una pequeña escena.
2. **De capítulo:** cambia la solución de una misión, un encuentro posterior o un diálogo del mismo capítulo.
3. **Persistente:** se guarda una elección y otro personaje la recuerda en capítulos posteriores, especialmente en la despedida y la escena final.

Las decisiones importantes tendrán nombre en el estado del juego. Ejemplos:

| Decisión | Consecuencia inmediata | Eco posterior |
| --- | --- | --- |
| Llevar provisiones asturianas en la maleta | Ocupan peso y activan una broma | Se pueden compartir con un amigo en el capítulo 2 o mencionar en Navidad |
| Responder en italiano o admitir que no se entiende | El NPC reacciona y da una pista distinta | Luca recuerda el primer encuentro |
| Elegir pizza, paseo o bebida en el primer plan | Escena y recuperación de salud diferentes | Un amigo alude al plan durante la fiesta |
| Elegir tono de la conversación romántica | Romance, amistad o despedida cómica | Comentario en la despedida del capítulo 5 |
| Seguir de fiesta, volver a casa o parar a comer | Escena, humor y cambio de salud | Broma recurrente en el capítulo 5 |
| Escoger Roma, París o Ámsterdam | **Se juega una misión diferente** | Recuerdo de ese destino en el final |

**Regla de escritura:** no añadir una pregunta con opciones hasta haber definido qué cambia cada respuesta. Si una opción no tiene efecto, se sustituirá por diálogo lineal o se le dará una reacción propia.

### 3.4. Objetivos y progreso

El juego mostrará un objetivo actual, por ejemplo: «Recoge la documentación y prepara la maleta». Al completarlo, se activará el siguiente. No hará falta un diario de misiones complejo; bastan un indicador de objetivo y, si se considera útil, una lista corta en pausa.

Los eventos se activarán según el progreso. Un NPC podrá hablar aunque su misión todavía no esté activa, con una respuesta apropiada. Los objetos necesarios nunca quedarán irrecuperables.

### 3.5. Inventario sencillo

El inventario será **contextual**: guardará principalmente los objetos que necesita la historia (documentos, móvil, un recuerdo, etc.). No necesita límite de ocho ranuras, sistema de arrastrar y soltar, tienda, equipamiento ni fabricación. Un panel sencillo mostrará nombre, icono y descripción. Los objetos se recogerán o utilizarán mediante interacción.

Las maletas de los capítulos 1 y 5 usarán **un minijuego independiente de elección de objetos y peso**, reutilizando el mismo código. No hace falta representar físicamente cada objeto dentro del inventario general.

### 3.6. Salud mental Erasmus

- Empieza en **100**; nunca supera 100 ni baja de 0.
- Errores leves: aproximadamente −5; problemas importantes: −10 o −15.
- Descansar, terminar un reto o vivir algo agradable: +10 o +15, ajustable.
- Caminar y explorar no consumen salud.
- Si llega a 0: **ERASMUS OVER** y opción de reintentar desde el último punto de control.
- Al reintentar, se recupera una cantidad suficiente de salud para no quedar atrapado en una cadena de derrotas.

La salud refuerza el humor y las decisiones; no debe convertir un juego corto en algo frustrante.

### 3.7. Guardado y repetición

- Guardar en `localStorage` el capítulo, objetivo actual, salud, inventario, elecciones significativas y rutas completadas.
- Guardado automático al terminar objetivos importantes, cambiar de capítulo y antes de una prueba que pueda fallarse.
- «Continuar» desde el menú, si hay una partida válida.
- Reiniciar la historia con confirmación.
- Los capítulos desbloqueados podrán repetirse sin borrar el progreso principal. Si esto complica demasiado la primera versión, se añadirá después de completar los cinco capítulos.
- Guardar una versión de los datos para poder detectar partidas incompatibles y ofrecer un comienzo nuevo sin bloquear el juego.

---

## 4. Capítulo 1 — Rumbo a Salerno

**Lugar:** Asturias → aeropuerto → plaza de Salerno.  
**Objetivo:** completar los preparativos y llegar a Italia.

### Escena inicial

El narrador presenta a Amy, estudiante de Física y futura víctima de la burocracia Erasmus:

> «Después de años estudiando las leyes del universo, está a punto de descubrir que hay algo que ni la Física puede explicar: la burocracia universitaria».

Título: **CAPÍTULO 1 · RUMBO A SALERNO**.

### Misión 1. El Learning Agreement

Amy aparece en su habitación. Puede examinar la cama, el escritorio, la estantería y el móvil. Al utilizar el portátil comienza un puzle corto: relacionar Mecánica Cuántica con *Quantum Mechanics*, Termodinámica con *Thermodynamics* y Electromagnetismo con *Electromagnetism*.

Los errores restan un poco de salud mental. Después se muestra una secuencia humorística de firmas y aprobaciones. Se desbloquea el logro opcional **Doctora en burocracia** y se guarda el progreso.

### Misión 2. La maleta de 20 kg

La maleta se prepara con una interfaz de selección. Hay que llevar documentación (0,2 kg), ropa (8 kg) y portátil (2 kg). Son opcionales zapatos extra (3 kg), libros de Física (7 kg), peluches (4 kg), secador (2 kg) y provisiones asturianas (5 kg).

Se puede elegir cualquier combinación que incluya los imprescindibles y no supere 20 kg. Si se supera el máximo, hay una reacción del narrador, una pequeña penalización y una nueva oportunidad. **Las elecciones opcionales se guardan**: un peluche, unas provisiones o unos libros podrán aparecer en bromas y conversaciones más adelante.

### Misión 3. Seguridad del aeropuerto

Amy habla con un trabajador y selecciona qué objetos colocar en la bandeja. Se trata de un puzle breve con respuestas humorísticas y sin depender de conocimientos especializados. Si falla, recibe una pista o pierde algo de salud, pero puede repetirlo.

### Misión 4. ¿Dónde está mi puerta?

Una pantalla informa de la puerta de embarque. Amy debe alcanzarla recorriendo un mapa compacto con indicaciones, personas y obstáculos. **Reto contrarreloj opcional de 60 segundos**, si al probarlo resulta divertido y justo; si no, se reemplazará por orientación sin límite de tiempo. Fallar reinicia solo este reto.

### Llegada a Salerno

Transición breve y plaza inspirada en Salerno. Amy explora unos segundos y recibe una bienvenida:

> **Narrador:** «Has sobrevivido a la burocracia, al equipaje y al aeropuerto. Ahora solo tienes que aprender italiano, aprobar Física y sobrevivir hasta Navidad. Fácil, ¿no?»  
> **Amy:** «Fácil».  
> **Narrador:** «Eso dijiste del Learning Agreement».

**Fin:** capítulo 2 desbloqueado. Se conservan las decisiones sobre el equipaje.

---

## 5. Capítulo 2 — Supervivencia: Primeros días

**Lugar:** alojamiento → calles de Salerno → universidad → plaza.  
**Objetivo:** orientarse, sobrevivir a las clases y encontrar un grupo de amigos.

### Inicio

Amy despierta en su nuevo alojamiento. El narrador anuncia:

> «Ciudad nueva, idioma nuevo, universidad nueva. ¿Qué podría salir mal? Correcto: todo».

### Misión 1. Encontrar la universidad

Explorar un pequeño barrio con señales, un comercio y algunos NPC. Preguntar a distintas personas dará pistas diferentes. Un NPC se dirigirá a Amy en italiano:

> «Scusa, cerchi qualcosa?»

Opciones: «Sí, la universidad», «No entiendo nada», «Una pizza, si puede ser».

Las tres respuestas **tendrán una reacción diferenciada**: indicación directa, explicación más simple o broma con una pista alternativa. Se recordará el estilo de respuesta para un comentario de Luca.

### Misión 2. Primer día de Física

Amy consulta un horario para encontrar su aula y responde **tres preguntas cortas**. Algunas opciones son absurdas, por ejemplo «Pizza por segundo» como unidad de fuerza. Debe acertar dos; si falla, podrá reintentarlo con preguntas similares. Cada fallo implica diálogo y una pequeña pérdida de salud.

### Misión 3. Hacer amigos

Amy conoce a **Luca, Sofia y Alex**. Tiene que hablar con los tres. Cada uno revela algo de su personalidad, da información útil y plantea una pequeña elección con reacción propia. Si Amy lleva provisiones asturianas, puede ofrecérselas a alguien y desbloquear un comentario especial.

### Misión 4. El primer plan

El grupo se reúne en la plaza y propone **pizza, paseo o tomar algo**. La elección cambia una escena corta, el diálogo y la recuperación de salud; se guarda como `primerPlan` para que vuelva a mencionarse en el capítulo 3.

**Fin:** el narrador felicita a Amy por sobrevivir al primer día. Se desbloquea el capítulo 3.

---

## 6. Capítulo 3 — Vida Erasmus

**Lugar:** alojamiento → calles nocturnas → local → alojamiento.  
**Objetivo:** reunir a los amigos, sobrevivir a una fiesta y volver a casa.

### Inicio

Amy está viendo una película y Alex escribe:

> «Salimos un rato. Algo tranquilo».

El narrador responde:

> «La frase más peligrosa de cualquier Erasmus».

### Misión 1. Reunir al grupo

Amy encuentra a los amigos en un mapa nocturno. Luca está en el lugar equivocado, Sofia intenta organizar al grupo y Alex quiere cambiar de plan. Cada conversación permite conocerles mejor y puede variar según `primerPlan` y otras decisiones del capítulo 2.

### Misión 2. Una fiesta «tranquila»

Minijuego de reflejos muy simple: pulsar cuando un indicador llega a una zona marcada. **Ocho señales, cinco aciertos** para superar el reto. Los errores reducen algo la salud. No necesita una canción conocida ni una sincronización musical compleja; bastan señales visuales y efectos propios o con licencia compatible.

### Misión 3. Romance inesperado

Amy conoce a alguien que pregunta qué estudia. Las respuestas permiten llevar la conversación hacia **romance, amistad o desenlace cómico**. Las tres tienen una escena final diferente y un valor persistente `resultadoRomance`, que reaparecerá en algún diálogo posterior.

### Misión 4. Regreso nocturno

De vuelta a casa, alguien propone prolongar la noche. Se puede elegir **seguir de fiesta, volver directamente o parar a comer**. Cada ruta requiere como máximo una breve conversación o interacción distinta, no un mapa completo nuevo. Cambian la salud y el recuerdo `finalFiesta`.

> **Amy:** «Mañana no salgo».  
> **Narrador:** «Una promesa que durará aproximadamente 24 horas».

**Fin:** capítulo 4 desbloqueado.

---

## 7. Capítulo 4 — Eurotrip

**Lugar:** alojamiento → estación/aeropuerto → destino elegido.  
**Objetivo:** organizar un viaje y afrontar un desastre diferente según la ciudad.

Este es el capítulo con **tres historias alternativas de verdad**. En una partida se juega una ruta. Para conocer las demás, habrá que repetir el capítulo o empezar otra partida.

### Preparativos comunes

Sofia propone viajar un fin de semana. Amy debe seleccionar **documentación, móvil y un tercer objeto** (cargador, ropa, cámara, libro de Física, almohada o comida). Ese tercer objeto genera una pequeña ventaja, comentario o escena en la ruta elegida. El juego guarda la elección.

Después se elige el destino:

| Ruta | Problema | Desarrollo |
| --- | --- | --- |
| **Roma** | El grupo se separa y Alex envía una ubicación equivocada | Buscar tres pistas y encontrar a los amigos |
| **París** | Se pierde la reserva del alojamiento | Reunir indicios, hablar con un NPC y localizar el acceso correcto |
| **Ámsterdam** | El recorrido en bicicleta acaba en un desvío | Seguir señales, esquivar obstáculos simples y recuperar el rumbo |

### Ruta A. Roma: «¿Dónde está todo el mundo?»

Mapa pequeño inspirado en Roma. Amy pregunta a turistas, examina señales y encuentra tres pistas que contradicen la ubicación de Alex. Debe descubrir el punto de encuentro correcto. Un objeto de la mochila puede ofrecer una pista o comentario especial. Final:

> «Has viajado hasta Roma para perder a tus amigos. Experiencia cultural completada».

### Ruta B. París: «La reserva fantasma»

En una calle parisina, Amy encuentra fragmentos de la dirección, consulta a un NPC y busca una entrada. Un puzle de información revela que faltaba parte de la dirección. Las respuestas del NPC y el objeto extra de la mochila pueden facilitar la resolución. Final:

> «París, ciudad del amor, la cultura y las reservas que nadie sabe dónde están».

### Ruta C. Ámsterdam: «El carril bici del destino»

Amy debe llegar a varios puntos marcados en un mapa compacto siguiendo carriles y señales, evitando obstáculos que producen pequeñas penalizaciones. Al descubrir que iban en dirección equivocada, elige cómo corregir el rumbo. **No hace falta programar vehículos ni físicas de bicicletas**: Amy puede desplazarse con los controles habituales y el reto se representa como recorrido guiado. Final:

> «Todavía no sabemos si era el camino correcto, pero al menos has llegado».

### Consecuencias y repetición

La ruta seleccionada se guarda como `destinoEurotrip`. El capítulo 5 recordará el viaje. Si se implementa la selección de capítulos, se podrán jugar los otros destinos sin borrar el progreso principal y se registrarán como rutas descubiertas. Basta con completar **una** para desbloquear Navidad.

**Simplificación crucial:** las tres rutas comparten movimiento, diálogos, objetivos, interacciones y guardado. Solo cambian el mapa compacto, la secuencia de objetivos y algunos diálogos.

---

## 8. Capítulo 5 — Operación Navidad

**Lugar:** universidad → alojamiento → Salerno → aeropuerto → Asturias.  
**Objetivo:** resolver pendientes, despedirse y volver a casa.

### Inicio

Se acerca Navidad y Amy quiere volver a Asturias. El narrador recuerda que todavía quedan cosas por resolver.

### Misión 1. Últimos asuntos de Física

Amy busca un documento, habla con un profesor y localiza una entrega pendiente en un único escenario universitario. Los NPC aportan pistas y comentarios sobre el estrés universitario.

### Misión 2. Maleta de vuelta

Se reutiliza la interfaz de equipaje del capítulo 1. Hay que llevar documentación, ropa, regalos y recuerdos sin superar el límite. Algunos objetos elegidos al comienzo del juego pueden aparecer como recuerdos o bromas. No habrá un segundo sistema de inventario.

### Misión 3. Despedidas

Amy habla con Luca, Sofia y Alex. **Aquí reaparecerán las consecuencias más importantes**:

- Luca puede recordar cómo Amy pidió ayuda al llegar a Salerno.
- Alguien mencionará el primer plan que escogieron.
- Los amigos recordarán la noche de fiesta y el resultado de la conversación romántica.
- Un personaje comentará el destino elegido en Eurotrip.
- Un objeto del primer equipaje puede producir una última broma o pequeña escena.

No se escribirán cientos de combinaciones: cada NPC tendrá un diálogo base y **una o dos líneas condicionales** por recuerdo relevante. Si una elección no tuvo eco antes, este es un lugar adecuado para recuperarla.

### Misión 4. Último aeropuerto

Una versión corta del reto de orientación del capítulo 1: encontrar el transporte, confirmar el vuelo y alcanzar la puerta. Puede incluir un límite de tiempo moderado solo si su versión anterior ya funciona bien.

### Final en Asturias

Amy aparece en un escenario navideño. El narrador resume la aventura y puede mencionar **uno o dos recuerdos elegidos durante la partida** para personalizar la despedida, sin necesidad de crear finales totalmente distintos.

Después aparece la felicitación de amigo invisible, editable antes de publicar:

> «Después de 19 años aguantándome, pensabas que marcharte a Italia iba a ser suficiente para librarte de mí. Pues no.  
> Espero que estés disfrutando muchísimo de esta etapa, que sigas viajando, conociendo gente y acumulando historias que después tendrás que contarme.  
> Y, aunque ahora estemos en países diferentes, seguimos teniendo muchas aventuras pendientes.  
> Feliz amigo invisible, Amy».

Se reservará espacio para fotografías personales o, si no se usan, una ilustración final. Después aparecerá:

**¡AVENTURA COMPLETADA!**  
**Has conseguido volver a casa por Navidad.**  
**Pero el Erasmus todavía no ha terminado...**  
**CONTINUARÁ · Erasmus Valley: Temporada 2**

El menú permitirá ver los créditos y regresar al inicio.

---

## 9. Diseño de consecuencias: versión fácil de implementar

### 9.1. Estado único de partida

Un objeto JavaScript central puede guardar todo lo necesario. Ejemplo orientativo, **no es aún código definitivo**:

```js
const partida = {
  version: 1,
  capitulo: 1,
  objetivo: "learningAgreement",
  saludMental: 100,
  inventario: [],
  decisiones: {
    equipajeOpcional: [],
    respuestaItaliano: null,
    primerPlan: null,
    resultadoRomance: null,
    finalFiesta: null,
    destinoEurotrip: null,
    objetoMochila: null
  },
  rutasCompletadas: [],
  capitulosCompletados: []
};
```

Cuando se elige una respuesta se actualiza el estado, se muestra su reacción y, si procede, se guarda. Más tarde, el diálogo comprueba ese valor:

```js
if (partida.decisiones.primerPlan === "pizza") {
  // Un NPC recuerda aquella primera pizza en Salerno.
}
```

**No habrá un sistema de relaciones numéricas con cada NPC**, árboles narrativos gigantes ni reglas complicadas. Bastarán variables claras y condiciones pequeñas.

### 9.2. Cómo evitar una explosión de posibilidades

- Una decisión puede cambiar una escena corta, no un capítulo completo.
- Dos decisiones pueden producir diálogos distintos sin multiplicar todos los caminos.
- Las rutas de Eurotrip son la **única bifurcación grande obligatoria**.
- Se programarán primero las consecuencias dentro del capítulo y después sus recuerdos futuros.
- Cada elección se registrará en una tabla breve: opciones, efecto, variable que modifica y lugar donde se consulta.
- Si una decisión debe tener consecuencias importantes, se decidirá antes de escribir sus diálogos.

---

## 10. Estética y experiencia

### 10.1. Dirección visual

- **Pixel art 2D cenital**, colores y proporciones consistentes.
- Amy identificable por su pelo castaño y un sprite con reposo y desplazamiento en cuatro direcciones.
- Un pack principal de personajes y escenarios, complementado solo cuando encaje visualmente.
- Habitaciones, calles, aula, aeropuerto, local y destinos europeos representados mediante mapas pequeños y elementos reconocibles.
- UI discreta: salud mental, objetivo, interacción, pausa e inventario.
- Los diálogos y menús pueden ser HTML/CSS aunque el escenario esté dibujado por el motor.

No se diseñarán todos los recursos desde cero. Se podrán usar sprites y tilesets gratuitos con licencias compatibles; se registrarán sus créditos cuando sea necesario.

### 10.2. Audio

Música y sonidos opcionales, que puedan silenciarse. Es suficiente con algunos efectos cortos de interacción, acierto, error y final de misión. No es necesario un sistema musical complejo.

### 10.3. Accesibilidad y dispositivos

**Primera fase: teclado en ordenador.** Interacción con E/espacio, diálogos con E/espacio/clic y pausa con Escape.

**Segunda fase: móvil/tablet horizontal.** Joystick o controles direccionales táctiles y botón de interacción; diseño adaptable a pantallas pequeñas. En vertical se muestra un aviso para girar el dispositivo y se pausa la partida. Esto se probará antes de publicar, pero no frenará el desarrollo del primer prototipo.

---

## 11. Tecnología y organización

### 11.1. Tecnologías

- **HTML** para la página y las interfaces.
- **CSS** para menús, cuadros de diálogo, HUD y adaptación a tamaños de pantalla.
- **JavaScript** para reglas, escenas, decisiones y guardado.
- **Phaser 3, recomendado** para movimiento, sprites, colisiones y cámara. Es una biblioteca, no obliga a crear una aplicación compleja.
- `localStorage` para el guardado.
- **Sin backend, sin base de datos y sin cuentas de usuario.**

Vite y otros sistemas de construcción son **opcionales**: se incorporarán solo si facilitan el desarrollo o el despliegue. Se evitarán dependencias sin una función clara.

### 11.2. Estructura mínima orientativa

```text
Erasmus-Valley/
├── index.html
├── style.css
├── js/
│   ├── main.js          # Inicio, configuración y escenas
│   ├── game.js          # Movimiento, interacción, salud y guardado
│   ├── story.js         # Capítulos, NPC, diálogos y decisiones
│   └── minigames.js     # Puzles reutilizables (si hacen falta)
├── assets/
│   ├── sprites/
│   ├── maps/
│   └── audio/
├── README.md
└── GAME_DESIGN.md
```

Es un **punto de partida, no una obligación**. Si `game.js` termina siendo demasiado grande, se dividirá. Si `minigames.js` no es necesario, no se creará. Los capítulos no necesitan un archivo propio hasta que exista una razón práctica.

### 11.3. Principios de implementación

1. Preferir **funciones reutilizables y datos** frente a repetir código para cada capítulo.
2. No crear una clase nueva para cada NPC u objeto.
3. Usar un único formato de conversación y un único estado de partida.
4. Crear los escenarios de uno en uno, con elementos provisionales si aún no hay sprites finales.
5. Probar cada interacción al añadirla.
6. Priorizar una misión terminada sobre diez sistemas a medio hacer.
7. Mantener siempre una versión jugable.

---

## 12. Plan de trabajo paso a paso

La colaboración consistirá en diseñar una pieza pequeña, escribir o adaptar el código, ejecutarlo en el navegador, comprobar el resultado y corregirlo **antes** de añadir la siguiente.

### Etapa 1. Prototipo jugable

- [ ] Crear la página y arrancar el escenario.
- [ ] Mostrar a Amy y moverla en cuatro direcciones.
- [ ] Añadir un escenario de habitación con obstáculos.
- [ ] Interactuar con un objeto y un NPC.
- [ ] Mostrar un diálogo con dos respuestas y consecuencias visibles.

**Resultado:** una habitación pequeña que ya parece un videojuego.

### Etapa 2. Capítulo 1 completo

- [ ] Objetivos y progreso.
- [ ] Learning Agreement.
- [ ] Maleta con límite de peso.
- [ ] Aeropuerto y seguridad.
- [ ] Embarque y llegada a Salerno.
- [ ] Salud mental y guardado local.

**Resultado:** primera aventura de principio a fin.

### Etapa 3. Historia y consecuencias

- [ ] Capítulo 2: universidad, NPC y primer plan.
- [ ] Capítulo 3: fiesta, romance y regreso.
- [ ] Guardar decisiones y comprobar que cambian diálogos posteriores.

### Etapa 4. Rutas y desenlace

- [ ] Eurotrip: Roma, París y Ámsterdam con misiones distintas.
- [ ] Capítulo 5: regreso a Asturias y recuerdos de decisiones previas.
- [ ] Felicitación personalizada y créditos.

### Etapa 5. Pulido y entrega

- [ ] Revisar recursos gráficos, licencias y coherencia visual.
- [ ] Añadir efectos y ajustes básicos de sonido.
- [ ] Comprobar controles táctiles y orientación horizontal.
- [ ] Corregir errores, ajustar dificultad y revisar que todas las rutas puedan terminarse.
- [ ] Publicar en GitHub Pages y probar el enlace final.

Los logros, la selección de capítulos y detalles visuales adicionales son **mejoras opcionales**, nunca bloqueos para terminar el regalo.

---

## 13. Comprobaciones antes de darlo por terminado

### Historia y jugabilidad

- [ ] Los cinco capítulos se pueden jugar en orden hasta el final.
- [ ] Amy puede moverse e interactuar con objetos y NPC.
- [ ] Cada elección de diálogo produce al menos una consecuencia identificable.
- [ ] Algunas decisiones se recuerdan en capítulos posteriores.
- [ ] Roma, París y Ámsterdam ofrecen desafíos distintos.
- [ ] Los objetivos siempre pueden completarse, incluso tras errores.
- [ ] La salud mental, la derrota y el reintento funcionan sin bloqueos.
- [ ] El guardado permite continuar una partida.
- [ ] El final muestra una felicitación personalizada.

### Publicación

- [ ] Se ve y se controla correctamente en los dispositivos que finalmente se anuncien como compatibles.
- [ ] Los recursos se cargan desde GitHub Pages sin rutas rotas.
- [ ] Los recursos externos tienen permisos de uso apropiados y créditos cuando corresponda.
- [ ] Una persona que no ha participado en el desarrollo puede jugar sin instrucciones adicionales.

---

## 14. Recursos y personalización

Antes de publicar, se podrán sustituir nombres ficticios por nombres reales, añadir anécdotas, ajustar bromas y personalizar la apariencia de Amy. Para los recursos visuales pueden consultarse [Kenney](https://kenney.nl/assets), [itch.io](https://itch.io/game-assets) y [OpenGameArt](https://opengameart.org/), siempre comprobando la licencia de **cada recurso**.

Cuando se incorporen assets externos se documentará su origen y atribución en `ASSETS_CREDITS.md` si es necesario. Las fotos personales se usarán solo con permiso de quienes aparezcan si se van a publicar abiertamente.

## 15. Estado actual

- [x] Concepto y narrativa de los cinco capítulos.
- [x] Mecánicas centrales y sistema simple de consecuencias.
- [x] Tres rutas alternativas de Eurotrip.
- [x] Propuesta de tecnología y plan incremental.
- [ ] Prototipo funcional.
- [ ] Capítulos implementados.
- [ ] Pruebas y publicación.

**Regla final:** si una idea añade mucha programación y apenas mejora el juego, simplificarla. Si una decisión mejora el humor, la historia o el recuerdo que se llevará Amy, intentar conservarla.
