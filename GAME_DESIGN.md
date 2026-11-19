# 1. Descripción general

**Erasmus Valley: Salerno Edition** es un videojuego de aventuras 2D desarrollado como regalo de amigo invisible.

La protagonista es Amanda, conocida como **Amy** por sus amigos, una estudiante de Física de 22 años que está realizando su Erasmus en Salerno, Italia.

A lo largo del videojuego deberá superar diferentes aventuras relacionadas con su experiencia: los preparativos del viaje, la adaptación a una nueva ciudad, la universidad, las amistades, las fiestas, los romances y los viajes por Europa.

El videojuego tendrá un tono principalmente humorístico, con situaciones absurdas, diálogos divertidos, referencias personales y pequeños desafíos. También incluirá momentos emotivos, especialmente al final.

El objetivo es crear una experiencia entretenida y personalizada, con cierta dificultad, pero accesible para jugadores sin experiencia.

## 1.1. Características principales

| Característica | Descripción |
| --- | --- |
| Título | Erasmus Valley: Salerno Edition |
| Género | Aventura narrativa 2D con exploración |
| Protagonista | Amanda (Amy), estudiante de Física |
| Ambientación | Salerno, Italia, y otros destinos europeos |
| Estructura | 5 capítulos conectados |
| Duración | 3–5 minutos por capítulo |
| Duración total | Aproximadamente 20–30 minutos |
| Perspectiva | Cenital, desde arriba |
| Movimiento | Libre, en cuatro direcciones |
| Estética | Pixel art 2D |
| Dificultad | Baja-media |
| Plataformas | Ordenadores, móviles y tablets |
| Distribución | Navegador web mediante GitHub Pages |
| Final | Abierto, con regreso temporal por Navidad |
| Idioma | Español |

## 1.2. Objetivos de diseño

El desarrollo deberá priorizar:

1. Una aventura divertida y fácil de entender.
2. Exploración libre en escenarios pequeños o medianos.
3. Mecánicas variadas e integradas en la historia.
4. Diálogos humorísticos y situaciones absurdas.
5. Una dificultad moderada, con checkpoints frecuentes.
6. Diferentes decisiones y posibilidades de rejugabilidad.
7. Compatibilidad con dispositivos móviles, tablets y ordenadores.
8. Una arquitectura sencilla, modular y fácil de ampliar.

No se pretende desarrollar un RPG complejo ni un mundo abierto.

## 1.3. Libertad de diseño

**Antigravity tendrá libertad para seleccionar, adaptar y combinar recursos gráficos existentes**, siempre que sean compatibles con las condiciones de distribución del videojuego.

Se priorizará el uso de recursos gratuitos y reutilizables para proyectos independientes, especialmente spritesheets, tilesets, personajes, objetos, escenarios e interfaces pixel art.

El diseño deberá mantener una estética coherente, independientemente de que los recursos procedan de diferentes autores.

Antigravity podrá modificar los recursos cuando su licencia lo permita, incluyendo ajustes de colores, dimensiones, animaciones y otros detalles.

Se permitirá crear recursos gráficos originales cuando no exista una alternativa adecuada.

No será necesario diseñar todos los elementos desde cero.

---

# 2. Estructura narrativa

El videojuego estará dividido en cinco capítulos, cada uno correspondiente a una aventura diferente.

La historia seguirá un orden principal lineal, aunque algunas decisiones permitirán modificar acontecimientos, diálogos o desafíos.

Cada capítulo tendrá varios escenarios explorables, objetivos, personajes secundarios y pequeñas pruebas.

| Capítulo | Título | Aventura |
| --- | --- | --- |
| 1 | Rumbo a Salerno | Preparativos, aeropuerto y llegada |
| 2 | Supervivencia: Primeros días | Adaptación, amistades y universidad |
| 3 | Vida Erasmus | Fiestas, planes y romances |
| 4 | Eurotrip | Viajes e imprevistos |
| 5 | Operación Navidad | Regreso temporal a casa |

La duración de 3–5 minutos es un objetivo de diseño, no un límite rígido. Los reintentos, las conversaciones opcionales y la exploración pueden incrementar el tiempo de juego.

---

# 3. Jugabilidad

## 3.1. Movimiento y exploración

El videojuego utilizará una perspectiva cenital similar a los juegos clásicos de exploración 2D, tomando como referencia *Stardew Valley* y *Animal Crossing*.

El jugador controlará únicamente a Amy.

El movimiento será libre, en cuatro direcciones, permitiendo recorrer habitaciones, calles y otros escenarios.

El sistema deberá incorporar:

- Movimiento fluido mediante teclado o joystick virtual.
- Animaciones básicas de caminar y permanecer quieta.
- Colisiones con paredes, muebles y obstáculos.
- Cámara que siga al personaje cuando sea necesario.
- Transiciones entre escenarios.
- Interacción con objetos y NPC cercanos.

Los escenarios deberán estar diseñados para que desplazarse resulte entretenido y no se convierta en una tarea repetitiva.

## 3.2. Interacciones

Amy podrá interactuar con elementos próximos a su posición.

Las interacciones principales serán:

- Hablar con personajes.
- Examinar objetos.
- Recoger elementos.
- Utilizar objetos.
- Abrir puertas.
- Activar mecanismos.
- Iniciar misiones o desafíos.

Los objetos interactivos mostrarán un indicador visual cuando Amy esté suficientemente cerca.

Cuando exista más de un elemento cercano, el sistema deberá seleccionar de forma predecible el objeto situado frente a Amy o permitir elegir entre los disponibles.

## 3.3. Personajes secundarios

Existirá una única protagonista controlable.

El resto de personajes serán NPC.

Podrán permanecer estáticos, desplazarse por recorridos cortos o aparecer durante acontecimientos concretos.

Sus funciones principales serán:

- Participar en conversaciones.
- Dar pistas.
- Ofrecer misiones.
- Entregar objetos.
- Intervenir en situaciones humorísticas.
- Reaccionar a decisiones anteriores.

Se utilizarán personajes recurrentes cuando sea posible, especialmente durante los capítulos de supervivencia y vida Erasmus.

## 3.4. Sistema de diálogos

Los diálogos aparecerán mediante una interfaz superpuesta al escenario.

Cada conversación deberá mostrar:

- Nombre del personaje.
- Texto del diálogo.
- Retrato o representación del personaje, cuando esté disponible.
- Indicador para avanzar.
- Opciones de respuesta, cuando corresponda.

Durante un diálogo, Amy no podrá desplazarse.

Las conversaciones serán breves, con un tono humorístico.

El narrador tendrá especial protagonismo y podrá realizar comentarios irónicos sobre las acciones del jugador.

## 3.5. Decisiones

Determinadas conversaciones permitirán elegir entre varias respuestas o acciones.

Las decisiones podrán provocar:

- Cambios en la salud mental.
- Diálogos alternativos.
- Reacciones distintas de los NPC.
- Pequeñas recompensas.
- Variaciones en el desarrollo de una misión.
- Activación de situaciones opcionales.

Las elecciones no deberán bloquear permanentemente el avance.

La historia principal seguirá siendo lineal, aunque algunos capítulos permitirán rutas alternativas.

## 3.6. Misiones

Cada capítulo tendrá una misión principal dividida en objetivos.

Los objetivos deberán aparecer en una interfaz accesible durante el juego.

Ejemplo:

**Capítulo 1 — Rumbo a Salerno**

- Completar el Learning Agreement.
- Preparar el equipaje.
- Superar el control de seguridad.
- Encontrar la puerta de embarque.
- Llegar a Salerno.

El jugador podrá consultar el objetivo actual en cualquier momento.

No será necesario implementar un diario de misiones complejo.

## 3.7. Inventario

Se utilizará un inventario sencillo.

Su función principal será almacenar objetos necesarios para completar las aventuras.

Características:

- Capacidad inicial de 8 objetos diferentes.
- Visualización mediante iconos.
- Nombre y descripción breve de cada objeto.
- Posibilidad de examinar objetos.
- Uso contextual cuando una misión lo requiera.
- Eliminación automática de objetos consumidos o entregados.

No será necesario implementar un sistema de equipamiento, fabricación o comercio.

Los objetos importantes para la historia no se podrán descartar accidentalmente.

Algunos objetos podrán conservarse entre capítulos para provocar diálogos o pequeñas recompensas.

## 3.8. Rejugabilidad

Se introducirán variaciones en las aventuras para que repetir el juego no produzca siempre exactamente la misma experiencia.

Estas variaciones podrán incluir:

- Diálogos diferentes.
- Respuestas alternativas.
- Objetos opcionales.
- Distintas formas de resolver una situación.
- Personajes secundarios.
- Rutas alternativas.

El capítulo 4, Eurotrip, incorporará diferentes destinos.

Una partida normal recorrerá únicamente una de las rutas disponibles.

El jugador podrá volver a jugar los capítulos completados desde un menú de selección.

Repetir un capítulo no deberá sobrescribir automáticamente el progreso principal. Se tratará como una repetición independiente, salvo que el jugador elija comenzar una partida nueva.

---

# 4. Sistema de salud mental

Amy tendrá una barra de **salud mental**, que funcionará como sistema de vida.

## 4.1. Valores

- Salud máxima: 100 puntos.
- Salud inicial: 100 puntos.
- Salud mínima: 0 puntos.
- Estado de derrota: salud igual a 0.

La salud mental se mostrará permanentemente durante la exploración.

## 4.2. Funcionamiento

Los errores y acontecimientos negativos podrán reducir la salud.

Las acciones positivas permitirán recuperarla.

Valores orientativos:

| Acción | Salud mental |
| --- | --- |
| Error leve | −5 |
| Error importante | −10 |
| Contratiempo grave | −20 |
| Descanso breve | +10 |
| Actividad agradable | +15 |
| Completar misión | +10 |
| Recompensa especial | +20 |

La salud nunca podrá superar los 100 puntos ni disminuir por debajo de 0.

No se perderá salud por caminar o explorar normalmente.

## 4.3. Colapso Erasmus

Cuando la salud mental llegue a cero, aparecerá una pantalla de derrota.

**Título:** ERASMUS OVER

**Mensaje:** Has sufrido un colapso académico, social y emocional.

El jugador podrá seleccionar:

- Reintentar desde el último checkpoint.
- Volver al menú principal.

Al reintentar se recuperarán 70 puntos de salud mental, salvo que el checkpoint tuviera un valor superior, en cuyo caso se conservará ese valor.

## 4.4. Checkpoints

Cada capítulo tendrá varios puntos de control.

Se guardarán al completar objetivos importantes o antes de desafíos que puedan requerir reintentos.

Cada checkpoint almacenará:

- Capítulo.
- Escenario.
- Posición segura de aparición.
- Objetivos completados.
- Salud mental.
- Inventario relevante.
- Decisiones importantes.
- Estado de los acontecimientos.

Si Amy pierde toda la salud, podrá volver al último checkpoint.

No deberá ser necesario repetir partes extensas del capítulo.

## 4.5. Guardado de partida

Se utilizará `localStorage` para guardar el progreso en el navegador.

El guardado se realizará automáticamente en checkpoints y al completar capítulos.

También existirá una opción de continuar desde el menú principal.

El progreso será local al navegador y dispositivo utilizado. No se ofrecerá sincronización entre dispositivos.

Las partidas guardadas deberán incorporar una versión de esquema para gestionar posibles modificaciones del formato durante el desarrollo.

---

# 5. Personajes y escenarios

## 5.1. Protagonista

**Nombre:** Amanda.

**Apodo:** Amy.

**Edad:** 22 años.

**Estudios:** Física.

**Destino Erasmus:** Salerno, Italia.

### Apariencia

Amanda es una chica joven de aspecto cotidiano.

Tiene el pelo castaño, de longitud media, ni demasiado corto ni demasiado largo. Su cabello es principalmente liso, con una ligera ondulación.

El personaje deberá resultar reconocible y mantener una apariencia coherente en todas las animaciones.

Antigravity tendrá libertad para decidir su ropa, proporciones, expresiones y diseño pixel art, tomando esta descripción como referencia.

Se utilizará un sprite con animaciones básicas en cuatro direcciones.

### Personalidad

Amanda es generalmente una persona tranquila, aunque puede ponerse nerviosa cuando se enfrenta a situaciones estresantes.

La universidad suele agobiarla, especialmente por la carga académica de Física.

Tiene sentido del humor, disfruta pasando tiempo con sus amigos y dedica parte de su ocio al cine.

Estas características deberán reflejarse en sus diálogos y reacciones.

## 5.2. Narrador

El narrador será un elemento recurrente.

Tendrá un tono irónico y comentará determinadas situaciones de forma humorística.

No deberá intervenir constantemente ni interrumpir la jugabilidad sin motivo.

## 5.3. NPC

Los NPC serán diseñados según las necesidades de cada capítulo.

Se podrán reutilizar personajes secundarios en distintas escenas y escenarios.

Sus nombres y apariencias podrán ser ficticios, salvo los personajes que se personalicen posteriormente.

## 5.4. Escenarios

Todos los escenarios seguirán una estética pixel art 2D coherente.

Antigravity decidirá su distribución, dimensiones y elementos decorativos.

Se respetarán las siguientes condiciones:

- Los espacios deben permitir movimiento libre.
- Los elementos importantes deben ser reconocibles.
- Los obstáculos deben tener colisiones coherentes.
- Los escenarios deben contener interacciones suficientes.
- Los recorridos no deben resultar innecesariamente largos.
- Los objetivos deben poder completarse sin conocimientos externos.

---

# 6. Interfaz y controles

## 6.1. Interfaz principal

Durante la exploración aparecerán:

- Barra de salud mental.
- Objetivo actual.
- Acceso al inventario.
- Acceso al menú de pausa.
- Indicadores de interacción cuando corresponda.

La interfaz deberá ser clara y ocupar el menor espacio posible sin comprometer la legibilidad.

## 6.2. Ordenador

| Acción | Control |
| --- | --- |
| Moverse | WASD o flechas |
| Interactuar | E o espacio |
| Avanzar diálogos | E, espacio o clic |
| Inventario | I |
| Pausa | Escape |
| Seleccionar opciones | Ratón o teclado |

## 6.3. Móvil y tablet

Se implementarán controles táctiles:

- Joystick virtual para desplazarse.
- Botón de interacción.
- Botones de inventario y pausa.
- Selección táctil de diálogos y opciones.

Los controles deberán adaptarse al tamaño y orientación de pantalla.

El juego deberá ser funcional tanto en orientación horizontal como vertical, aunque podrá recomendarse la horizontal cuando ofrezca una mejor experiencia.

No se deberá depender de acciones exclusivas de ratón, como pasar el cursor sobre un elemento.

## 6.4. Menú principal

El menú principal incluirá:

- Nueva partida.
- Continuar.
- Selección de capítulos, si existen capítulos completados.
- Ajustes.
- Créditos.

Los ajustes incluirán controles básicos de sonido y, cuando corresponda, opciones de visualización.

---

# 7. Desarrollo y tecnologías

## 7.1. Tecnologías

Se utilizarán tecnologías web compatibles con GitHub Pages.

**Propuesta técnica:**

- HTML5.
- CSS3.
- JavaScript.
- JSON para datos del juego.
- Phaser 3 para el motor 2D.
- Vite para desarrollo y generación de la versión distribuible.

Se utilizará Phaser para gestionar:

- Escenas.
- Movimiento.
- Colisiones.
- Cámara.
- Animaciones.
- Entradas de teclado y controles táctiles.
- Interacciones.

Las interfaces y menús podrán implementarse mediante Phaser o elementos HTML/CSS, según resulte más sencillo y mantenible.

No se utilizará backend ni base de datos.

## 7.2. Arquitectura

El código deberá organizarse de forma modular.

Se recomienda separar:

- Configuración del juego.
- Escenas.
- Protagonista.
- NPC.
- Movimiento e interacciones.
- Misiones.
- Diálogos.
- Inventario.
- Salud mental.
- Checkpoints y guardado.
- Recursos gráficos.
- Datos de capítulos.

La lógica común no deberá duplicarse entre capítulos.

Los diálogos, objetivos y configuraciones deberán almacenarse preferentemente en archivos de datos independientes.

## 7.3. Recursos gráficos

El videojuego utilizará principalmente recursos gráficos existentes, obtenidos de bibliotecas de assets para videojuegos independientes.

### Fuentes recomendadas

- **Kenney**: https://kenney.nl/assets
- **itch.io**: https://itch.io/game-assets
- **OpenGameArt**: https://opengameart.org/

Se podrán utilizar otras fuentes si sus licencias son compatibles.

### Licencias

Se priorizarán los siguientes recursos:

1. **CC0**: recursos reutilizables sin obligación de atribución.
2. **CC BY**: recursos que permiten su utilización y modificación cumpliendo los requisitos de atribución.
3. **Licencias personalizadas permisivas**: siempre que autoricen expresamente su utilización en un videojuego público y permitan su distribución mediante GitHub Pages.

No se utilizarán recursos con licencia desconocida, permisos ambiguos o restricciones incompatibles con el proyecto.

Se evitarán inicialmente licencias con obligaciones adicionales complejas, como GPL o CC BY-SA.

### Tipos de recursos

Se buscarán recursos para:

- **Protagonista**: sprite femenino con animaciones en cuatro direcciones.
- **NPC**: personajes secundarios con animaciones básicas.
- **Interiores**: habitaciones, muebles, camas, armarios, escritorios y objetos.
- **Exteriores**: calles, edificios, plazas, árboles y elementos urbanos.
- **Universidad**: aulas, mesas, sillas, pizarras y objetos académicos.
- **Aeropuertos**: mostradores, puertas, señalización y equipaje.
- **Viajes**: estaciones, transportes y escenarios urbanos.
- **Interfaces**: botones, indicadores, cuadros de diálogo e inventario.

### Coherencia visual

Se priorizará utilizar varios elementos de un mismo pack o de packs visualmente compatibles.

Los recursos deberán mantener proporciones, resolución, perspectiva y estilo similares.

Se evitará combinar sprites con estilos muy diferentes.

Antigravity podrá adaptar los gráficos para mejorar su integración, siempre que la licencia lo permita.

## 7.4. Audio

El videojuego podrá incorporar música ambiental y efectos de sonido.

Se priorizarán dos alternativas:

1. Recursos de audio libres o con licencias compatibles.
2. Efectos de sonido generados proceduralmente mediante Web Audio API.

La segunda alternativa será especialmente útil para sonidos sencillos:

- Interacciones.
- Confirmaciones.
- Errores.
- Recogida de objetos.
- Finalización de misiones.
- Cambios de salud mental.

No será necesario generar todos los efectos a partir de archivos externos.

La música ambiental podrá utilizar pistas con licencias compatibles o composiciones originales.

El audio deberá respetar las restricciones de reproducción automática de los navegadores y ofrecer una opción para silenciarlo.

## 7.5. GitHub Pages

El proyecto deberá poder desplegarse como una web estática.

La configuración de Vite deberá permitir la publicación en una ruta de proyecto de GitHub Pages, sin asumir que la aplicación siempre se encuentra en la raíz del dominio.

No se deberán utilizar rutas absolutas que impidan cargar los recursos correctamente.

## 7.6. Desarrollo con Antigravity

Antigravity será la herramienta principal de implementación.

Deberá utilizar este documento como especificación funcional.

Podrá tomar decisiones sobre:

- Arquitectura interna.
- Diseño visual.
- Organización de archivos.
- Distribución de escenarios.
- Animaciones.
- Detalles secundarios de interacción.

No deberá modificar los objetivos principales, la historia o las reglas de jugabilidad sin justificación.

El desarrollo será incremental y deberá permitir probar cada capítulo antes de continuar con el siguiente.

---

# 8. Diseño de los capítulos

Cada capítulo deberá funcionar como una aventura integrada.

No se pretende crear una secuencia de minijuegos independientes, sino escenarios conectados donde Amy pueda explorar, hablar con personajes y superar distintas situaciones.

Las pruebas deberán introducir variedad sin modificar constantemente el sistema de control.

---

# 9. Capítulo 1 — Rumbo a Salerno

## 9.1. Descripción

**Duración objetivo:** 4–6 minutos.

**Escenarios:**

1. Habitación de Amy.
2. Aeropuerto.
3. Llegada a Salerno.

**Objetivo:** completar los preparativos del Erasmus y llegar a Italia.

## 9.2. Introducción

La aventura comienza en Asturias, antes de que Amy se marche de Erasmus.

**Narrador:**

> Amanda, estudiante de Física y conocida por sus amigos como Amy, ha decidido marcharse de Erasmus a Salerno.
> 
> 
> Después de años estudiando las leyes del universo, está a punto de descubrir que hay algo que ni la Física puede explicar: la burocracia universitaria.
> 

Aparece el título:

**CAPÍTULO 1: RUMBO A SALERNO**

Amy aparece en su habitación y recibe una notificación de la universidad.

Objetivo inicial: completar el Learning Agreement.

## 9.3. Escenario 1 — Habitación

La habitación será explorable y contendrá:

| Elemento | Función |
| --- | --- |
| Portátil | Learning Agreement |
| Escritorio | Documentación |
| Armario | Ropa |
| Maleta | Preparar equipaje |
| Estantería | Objetos e interacciones |
| Cama | Recuperar salud |
| Móvil | Objetivos y mensajes |
| Puerta | Salida |

Los objetos secundarios podrán activar diálogos humorísticos.

### Misión 1 — Learning Agreement

**Duración:** 1–1,5 minutos.

Amy deberá utilizar el portátil para completar su solicitud de convalidaciones.

Primero tendrá que relacionar tres asignaturas de Física con sus equivalentes italianas.

| Asignatura | Equivalente |
| --- | --- |
| Mecánica Cuántica | Quantum Mechanics |
| Termodinámica | Thermodynamics |
| Electromagnetismo | Electromagnetism |

Las asignaturas son ficticias y se utilizan únicamente como parte del puzle.

Cada error restará 5 puntos de salud mental.

Después aparecerá una secuencia de aprobaciones, firmas y comprobaciones burocráticas.

Al finalizar:

**Logro desbloqueado: Doctora en burocracia.**

**Checkpoint 1:** Learning Agreement completado.

### Misión 2 — Preparar la maleta

**Duración:** 1–1,5 minutos.

Amy deberá recoger objetos de la habitación y preparar su equipaje.

La maleta tendrá un límite de 20 kg.

| Objeto | Peso | Obligatorio |
| --- | --- | --- |
| Pasaporte y documentación | 0,2 kg | Sí |
| Ropa | 8 kg | Sí |
| Portátil | 2 kg | Sí |
| Zapatos extra | 3 kg | No |
| Libros de Física | 7 kg | No |
| Peluches | 4 kg | No |
| Secador | 2 kg | No |
| Provisiones asturianas | 5 kg | No |

No será obligatorio llenar la maleta.

Será suficiente con incluir los objetos imprescindibles y respetar el límite de peso.

Los objetos opcionales podrán provocar pequeños diálogos o recompensas posteriores.

Superar el peso máximo provocará una penalización de salud mental y obligará a reorganizar el equipaje.

Una vez completada la misión se desbloqueará la puerta.

**Checkpoint 2:** Equipaje preparado.

## 9.4. Escenario 2 — Aeropuerto

**Duración:** 1,5–2 minutos.

Amy llega al aeropuerto con su equipaje.

El escenario incluirá pasajeros, trabajadores, mostradores y puertas de embarque.

### Misión 3 — Control de seguridad

Amy deberá localizar el control de seguridad.

Un trabajador le indicará que prepare sus pertenencias.

Deberá seleccionar correctamente los objetos que corresponda colocar en las bandejas.

Los errores provocarán penalizaciones moderadas y diálogos humorísticos.

Una vez superado el control podrá acceder a la zona de embarque.

### Misión 4 — Encontrar la puerta

Amy consultará una pantalla de salidas que mostrará la puerta de su vuelo.

Se activará una prueba contrarreloj de 60 segundos.

La protagonista deberá desplazarse por el aeropuerto, seguir las señales y llegar a la puerta correcta.

Durante el recorrido encontrará NPC y obstáculos.

Los choques podrán reducir la salud mental, pero no deberán bloquear el movimiento de manera injusta.

Si se agota el tiempo podrá repetir desde el inicio del desafío.

Al llegar a la puerta correcta se iniciará la transición del vuelo.

## 9.5. Escenario 3 — Llegada a Salerno

**Duración:** 30–45 segundos.

Tras una transición aérea, Amy aparecerá en una plaza inspirada en Salerno.

Podrá desplazarse brevemente y examinar algunos elementos del entorno.

Recibirá una notificación de bienvenida.

**Narrador:**

> Has sobrevivido a la burocracia, al equipaje y al aeropuerto.
> 
> 
> Enhorabuena. Ya estás en Salerno.
> 
> Ahora solo tienes que aprender italiano, aprobar Física, conocer gente y sobrevivir hasta Navidad.
> 
> Fácil, ¿no?
> 

**Amy:**

> Fácil.
> 

**Narrador:**

> Eso dijiste del Learning Agreement.
> 

Aparece:

**¡CAPÍTULO 1 COMPLETADO!**

Se desbloquea el capítulo 2.

## 9.6. Checkpoints

1. Learning Agreement completado.
2. Equipaje preparado.
3. Inicio del desafío de embarque.
4. Llegada a Salerno.

## 9.7. Condición de victoria

Amy deberá:

1. Completar el Learning Agreement.
2. Preparar el equipaje.
3. Superar el control de seguridad.
4. Llegar a la puerta de embarque.
5. Llegar a Salerno.

---

# 10. Capítulo 2 — Supervivencia: Primeros días

## 10.1. Descripción

**Duración objetivo:** 3–5 minutos.

**Escenarios:**

1. Alojamiento de Amy.
2. Calles de Salerno.
3. Universidad.
4. Plaza o zona de encuentro.

**Objetivo general:** adaptarse a Salerno, conocer gente y superar el primer día universitario.

## 10.2. Introducción

Amy despierta en su nuevo alojamiento.

El narrador anuncia:

> Primer día en Salerno.
> 
> 
> Ciudad nueva, idioma nuevo, universidad nueva.
> 
> ¿Qué podría salir mal?
> 
> Correcto: todo.
> 

El móvil muestra tres tareas:

- Encontrar la universidad.
- Conocer a otros estudiantes.
- Sobrevivir a las primeras clases.

## 10.3. Misión 1 — Explorar Salerno

Amy sale de su alojamiento y aparece en una pequeña zona de la ciudad.

El mapa contendrá calles, comercios, NPC y señales.

Deberá encontrar la universidad siguiendo indicaciones del entorno.

Podrá interactuar con personas que ofrezcan información.

Algunos NPC podrán hablar italiano básico.

Ejemplo:

**NPC:** Scusa, cerchi qualcosa?

Amy podrá responder:

- «Sí, la universidad».
- «No entiendo nada».
- «Una pizza, si puede ser».

Las respuestas provocarán diálogos distintos y pequeñas consecuencias.

El objetivo será llegar a la universidad.

## 10.4. Misión 2 — Primer día de Física

Amy entra en un edificio universitario.

Deberá encontrar su aula consultando un horario.

El escenario tendrá varias puertas, carteles y estudiantes.

Al llegar al aula comenzará una pequeña prueba.

### Desafío universitario

Un profesor plantea tres preguntas breves.

Las preguntas combinarán conocimientos básicos de Física con alguna opción absurda.

Ejemplos:

**¿Cuál es la unidad de fuerza en el Sistema Internacional?**

- Newton.
- Julio.
- Pizza por segundo.

**¿Qué ocurre si no estudias para el examen?**

- Aumenta la entropía.
- Apruebas por superposición cuántica.
- Probablemente suspendes.

El jugador deberá responder correctamente al menos dos de tres preguntas.

Si falla, podrá repetir la prueba con preguntas equivalentes.

Los errores reducirán la salud mental.

**Checkpoint 1:** Primer día universitario superado.

## 10.5. Misión 3 — Encontrar amigos

Al salir de clase, Amy encuentra a varios estudiantes Erasmus.

Uno de ellos la invita a conocer la ciudad.

El jugador deberá hablar con tres NPC para descubrir sus nombres y aceptar el plan.

Se introducirán tres personajes recurrentes:

- **Luca:** estudiante italiano, sociable y bromista.
- **Sofia:** estudiante Erasmus, organizada y aficionada a viajar.
- **Alex:** estudiante Erasmus, improvisador y aficionado a las fiestas.

Los nombres y diseños son ficticios y podrán personalizarse más adelante.

Cada conversación permitirá seleccionar alguna respuesta.

La finalidad será presentar el grupo de amigos que acompañará a Amy durante los siguientes capítulos.

## 10.6. Misión 4 — Primer plan

Los nuevos amigos proponen visitar una zona de Salerno.

Amy deberá reunirse con ellos en una plaza.

Durante el recorrido tendrá que localizar el punto de encuentro.

Al llegar, el grupo le ofrecerá tres planes:

- Comer pizza.
- Dar un paseo.
- Tomar algo.

Cada elección activará un diálogo diferente y recuperará algo de salud mental.

No será necesario desarrollar tres escenarios completos. Las variantes podrán resolverse mediante pequeñas escenas y conversaciones.

## 10.7. Final

**Narrador:**

> Enhorabuena. Has sobrevivido a tu primer día.
> 
> 
> Has encontrado la universidad, conocido gente y todavía no te has planteado volver a casa.
> 
> Todo un éxito.
> 

Se desbloquea el capítulo 3.

## 10.8. Checkpoints

1. Llegada a la universidad.
2. Primer día de clase superado.
3. Grupo de amigos formado.
4. Capítulo completado.

## 10.9. Condición de victoria

Amy deberá:

1. Encontrar la universidad.
2. Superar el desafío académico.
3. Conocer a los tres estudiantes.
4. Llegar al punto de encuentro.
5. Completar el primer plan.

---

# 11. Capítulo 3 — Vida Erasmus

## 11.1. Descripción

**Duración objetivo:** 3–5 minutos.

**Escenarios:**

1. Alojamiento.
2. Calles nocturnas.
3. Local de fiesta.
4. Regreso al alojamiento.

**Objetivo general:** disfrutar de una noche Erasmus, superar varios imprevistos y regresar a casa.

## 11.2. Introducción

Amy está en su alojamiento viendo una película.

Recibe un mensaje de sus amigos.

**Alex:**

> Salimos un rato. Algo tranquilo.
> 

**Narrador:**

> La frase más peligrosa de cualquier Erasmus.
> 

Amy decide acompañarlos.

## 11.3. Misión 1 — Reunir al grupo

Amy deberá recorrer una pequeña zona nocturna de Salerno y encontrar a sus amigos.

Los tres NPC estarán situados en diferentes puntos.

Cada uno tendrá una pequeña situación:

- Luca se ha equivocado de lugar.
- Sofia está intentando organizar el plan.
- Alex ya quiere cambiar de local.

Amy deberá hablar con ellos para reunir al grupo.

## 11.4. Misión 2 — La fiesta

El grupo llega a un local.

Se activa un desafío de reflejos integrado en el escenario.

### Mecánica

Amy deberá reaccionar a señales visuales que aparecerán durante una secuencia musical.

El jugador tendrá que pulsar el botón de interacción cuando un indicador entre en una zona marcada.

Habrá ocho señales.

Se necesitarán cinco aciertos para superar la prueba.

Los errores reducirán ligeramente la salud mental.

No se utilizará música protegida por derechos de autor.

La prueba deberá funcionar con teclado y controles táctiles.

**Checkpoint 1:** Fiesta superada.

## 11.5. Misión 3 — Romance inesperado

Durante la fiesta, Amy conoce a un personaje.

Se inicia una conversación humorística con varias respuestas.

Ejemplo:

**NPC:** ¿Qué estudias?

Opciones:

- «Física».
- «Intento entender el universo».
- «Ahora mismo, supervivencia Erasmus».

El NPC reaccionará de forma diferente según la respuesta.

La conversación podrá terminar en:

- Una situación romántica.
- Una amistad inesperada.
- Una despedida cómica.

Todas las posibilidades permitirán continuar.

La elección no afectará permanentemente a los siguientes capítulos, aunque podrá conservarse para mostrar un comentario posterior.

## 11.6. Misión 4 — Volver a casa

La fiesta termina y Amy debe regresar a su alojamiento.

Tendrá que recorrer un pequeño escenario nocturno siguiendo un mapa o señales.

Durante el trayecto encontrará un imprevisto.

Por ejemplo, uno de sus amigos propone continuar la fiesta.

El jugador deberá decidir:

- Seguir de fiesta.
- Volver directamente.
- Parar a comer algo.

Cada elección provocará una situación distinta y modificará ligeramente la salud mental.

El objetivo final será llegar a casa.

## 11.7. Final

Amy entra en su habitación.

**Amy:**

> Mañana no salgo.
> 

**Narrador:**

> Una promesa que durará aproximadamente 24 horas.
> 

Se desbloquea el capítulo 4.

## 11.8. Checkpoints

1. Grupo reunido.
2. Fiesta superada.
3. Conversación completada.
4. Regreso al alojamiento.

## 11.9. Condición de victoria

Amy deberá:

1. Reunir a sus amigos.
2. Superar la prueba de fiesta.
3. Completar la conversación.
4. Resolver el imprevisto final.
5. Regresar a casa.

---

# 12. Capítulo 4 — Eurotrip

## 12.1. Descripción

**Duración objetivo:** 4–5 minutos por ruta.

**Escenarios:**

1. Alojamiento de Amy.
2. Estación o aeropuerto.
3. Ciudad de destino.
4. Alojamiento o punto final del viaje.

**Objetivo general:** organizar un viaje, llegar al destino y superar diferentes imprevistos.

Este capítulo será el principal elemento de rejugabilidad.

## 12.2. Introducción

Amy está en su alojamiento cuando recibe un mensaje de Sofia.

**Sofia:**

> ¿Y si organizamos un viaje este finde?
> 

**Amy:**

> Vale, pero esta vez lo organizamos bien.
> 

**Narrador:**

> Una afirmación optimista.
> 

Se abre la selección de destinos.

## 12.3. Selección de destino

Habrá tres destinos:

1. Roma.
2. París.
3. Ámsterdam.

Los destinos son ficticios dentro de la historia y no representan necesariamente viajes reales de Amanda.

Cada destino tendrá una aventura distinta, utilizando sistemas comunes.

El jugador podrá elegir libremente.

La elección determinará qué ruta se jugará.

## 12.4. Misión común — Preparativos

Antes de viajar, Amy deberá preparar una mochila.

Tendrá que seleccionar tres objetos entre varias opciones.

Objetos disponibles:

- Documentación.
- Móvil.
- Cargador.
- Ropa.
- Cámara.
- Libro de Física.
- Almohada.
- Comida.

Los objetos imprescindibles serán la documentación y el móvil.

El tercer objeto podrá afectar a algún diálogo o situación posterior.

Una vez preparada la mochila se iniciará el viaje.

## 12.5. Ruta A — Roma

### Historia

Amy llega a Roma con sus amigos.

El grupo quiere visitar varios lugares, pero termina separándose.

### Misión

Amy deberá explorar una pequeña zona inspirada en Roma y encontrar a sus amigos.

El escenario incluirá:

- Calles.
- NPC turistas.
- Señales.
- Lugares reconocibles.
- Obstáculos.

El jugador deberá encontrar tres pistas que permitan localizar a los amigos.

Durante la búsqueda podrá hablar con NPC y consultar indicaciones.

### Imprevisto

Alex ha enviado una ubicación incorrecta.

Amy deberá descubrir el punto de encuentro real.

### Final

El grupo consigue reunirse y aparece una escena turística.

**Narrador:**

> Has viajado hasta Roma para perder a tus amigos.
> 
> 
> Experiencia cultural completada.
> 

## 12.6. Ruta B — París

### Historia

Amy llega a París con sus amigos.

Descubren que no encuentran la reserva del alojamiento.

### Misión

El jugador deberá explorar una zona de la ciudad y resolver un pequeño puzle de información.

Amy tendrá que:

1. Encontrar la dirección del alojamiento.
2. Hablar con un NPC.
3. Localizar el acceso correcto.
4. Recuperar los datos de la reserva.

### Imprevisto

La dirección que tenían guardada estaba incompleta.

Amy deberá relacionar varias pistas para encontrar la dirección correcta.

### Final

Consiguen entrar al alojamiento.

**Narrador:**

> París, ciudad del amor, la cultura y las reservas que nadie sabe dónde están.
> 

## 12.7. Ruta C — Ámsterdam

### Historia

Amy llega a Ámsterdam con sus amigos.

Deciden alquilar bicicletas para recorrer la ciudad.

### Misión

Se activa una aventura de movimiento por calles con carriles bici.

Amy deberá seguir un recorrido marcado, esquivando obstáculos y respetando las indicaciones.

Durante el trayecto encontrará varios puntos de control.

### Imprevisto

El grupo se equivoca de ruta.

Amy tendrá que encontrar el camino correcto hasta el destino.

### Final

El grupo llega al punto previsto.

**Narrador:**

> Has recorrido media ciudad en bicicleta.
> 
> 
> Todavía no sabemos si era el camino correcto, pero al menos has llegado.
> 

## 12.8. Mecánicas compartidas

Las tres rutas deberán reutilizar:

- Movimiento y exploración.
- Diálogos.
- Inventario.
- Objetivos.
- Salud mental.
- Checkpoints.
- Interacciones con NPC.

Cada ruta tendrá un escenario y desafío principal diferente.

El desarrollo deberá evitar duplicar sistemas completos para cada destino.

## 12.9. Rejugabilidad

Una vez superada una ruta, el capítulo se considerará completado.

Las otras rutas permanecerán disponibles para repetirse desde el menú de selección de capítulos.

Se guardará qué destinos ha completado el jugador.

No será necesario superar los tres destinos para avanzar al capítulo 5.

## 12.10. Checkpoints

Cada ruta tendrá:

1. Preparativos completados.
2. Llegada al destino.
3. Inicio del desafío principal.
4. Aventura completada.

## 12.11. Condición de victoria

Amy deberá:

1. Preparar la mochila.
2. Seleccionar un destino.
3. Llegar a la ciudad.
4. Resolver el desafío correspondiente.
5. Completar el viaje.

---

# 13. Capítulo 5 — Operación Navidad

## 13.1. Descripción

**Duración objetivo:** 4–5 minutos.

**Escenarios:**

1. Universidad.
2. Alojamiento.
3. Salerno.
4. Aeropuerto.
5. Llegada a Asturias.

**Objetivo general:** completar los últimos preparativos y regresar a casa durante las vacaciones de Navidad.

## 13.2. Introducción

Se acerca Navidad.

Amy está deseando volver a Asturias para pasar unos días con su familia y amigos.

El narrador anuncia:

> Después de meses de aventuras, fiestas, viajes y algún intento de estudiar Física, ha llegado el momento.
> 
> 
> Amy vuelve a casa por Navidad.
> 
> Solo tiene que superar unas últimas pruebas.
> 

## 13.3. Misión 1 — Últimos asuntos universitarios

Amy aparece en la universidad.

Deberá completar una pequeña misión para poder marcharse tranquila.

La prueba consistirá en localizar tres elementos relacionados con sus asignaturas:

- Un documento.
- Un profesor.
- Una entrega pendiente.

El jugador deberá recorrer un escenario universitario y completar las interacciones.

Durante la misión aparecerán pequeños comentarios humorísticos relacionados con el estrés académico.

**Checkpoint 1:** Universidad completada.

## 13.4. Misión 2 — Preparar la vuelta

Amy regresa a su alojamiento.

Deberá preparar la maleta para volver a Asturias.

Esta misión reutilizará parte del sistema de equipaje del capítulo 1, pero con una situación diferente.

Tendrá que recoger:

- Documentación.
- Ropa.
- Regalos.
- Recuerdos del Erasmus.

El jugador deberá respetar el límite de peso.

Podrán aparecer referencias a objetos o decisiones de capítulos anteriores.

## 13.5. Misión 3 — Despedida temporal

Amy tendrá que encontrar a sus amigos Erasmus antes de marcharse.

Cada NPC tendrá una conversación breve.

Luca, Sofia y Alex podrán recordar situaciones anteriores.

Si el jugador tomó determinadas decisiones, podrán aparecer pequeños diálogos alternativos.

La despedida será humorística, aunque con algún momento emotivo.

**Checkpoint 2:** Despedidas completadas.

## 13.6. Misión 4 — El último viaje

Amy debe llegar al aeropuerto y regresar a España.

Se reutilizarán las mecánicas de exploración y orientación, con un desafío final ligeramente más exigente.

El recorrido podrá incluir:

- Localizar el transporte.
- Encontrar la terminal.
- Comprobar el vuelo.
- Llegar a la puerta de embarque.

El desafío tendrá varios obstáculos y un límite de tiempo moderado.

No deberá ser excesivamente difícil.

Al superar el trayecto, aparecerá una transición de vuelo.

## 13.7. Escena final — Vuelta a casa

Amy llega a Asturias.

Aparece en un escenario navideño con su maleta.

El narrador comenta:

> Has conseguido sobrevivir a tu primer semestre Erasmus.
> 
> 
> Has estudiado, viajado, conocido gente y tomado algunas decisiones cuestionables.
> 
> Pero lo importante es que has vuelto a casa.
> 
> Aunque sea por unos días.
> 

La pantalla cambia a una escena especial de felicitación.

## 13.8. Mensaje personalizado

Se mostrará una felicitación de amigo invisible.

El contenido deberá combinar humor y emoción.

Texto inicial propuesto:

> Después de 19 años aguantándome, pensabas que marcharte a Italia iba a ser suficiente para librarte de mí.
> 
> 
> Pues no.
> 
> Espero que estés disfrutando muchísimo de esta etapa, que sigas viajando, conociendo gente y acumulando historias que después tendrás que contarme.
> 
> Y, aunque ahora estemos en países diferentes, seguimos teniendo muchas aventuras pendientes.
> 
> Feliz amigo invisible, Amy.
> 

El mensaje definitivo podrá modificarse antes de publicar.

Se reservará una sección para incorporar fotografías personales si se proporcionan.

Si no se dispone de fotografías, se utilizará una escena ilustrada con Amy y elementos de sus aventuras.

## 13.9. Final abierto

Después de la felicitación aparecerá:

**¡AVENTURA COMPLETADA!**

**Has conseguido volver a casa por Navidad.**

Tras una pequeña pausa:

**Pero el Erasmus todavía no ha terminado...**

**CONTINUARÁ...**

**Erasmus Valley — Temporada 2**

El videojuego terminará mostrando los créditos y la opción de volver al menú principal.

## 13.10. Checkpoints

1. Universidad completada.
2. Equipaje y despedidas completados.
3. Inicio del desafío del aeropuerto.
4. Llegada a Asturias.

## 13.11. Condición de victoria

Amy deberá:

1. Resolver los últimos asuntos universitarios.
2. Preparar el equipaje.
3. Despedirse de sus amigos.
4. Superar el viaje de regreso.
5. Llegar a Asturias.

---

# 14. Sistema de progresión

## 14.1. Desbloqueo de capítulos

Al comenzar una partida nueva únicamente estará disponible el capítulo 1.

Los capítulos posteriores se desbloquearán en orden.

Completar un capítulo permitirá acceder al siguiente.

## 14.2. Selección de capítulos

El menú permitirá volver a jugar los capítulos completados.

La selección estará disponible después de superar al menos el primer capítulo.

Se mostrarán:

- Capítulos desbloqueados.
- Capítulos completados.
- Rutas de Eurotrip superadas.

## 14.3. Logros

Se implementará un sistema sencillo de logros.

Los logros serán principalmente humorísticos y no afectarán a la progresión obligatoria.

Propuesta inicial:

| Logro | Condición |
| --- | --- |
| Doctora en burocracia | Completar el Learning Agreement |
| Equipaje imposible | Completar la maleta |
| Erasmus oficialmente | Llegar a Salerno |
| Física aplicada | Superar el primer día universitario |
| Vida social desbloqueada | Formar el grupo de amigos |
| Una noche tranquila | Completar la aventura de fiesta |
| Ciudadana del mundo | Completar una ruta de Eurotrip |
| Vuelta por Navidad | Terminar el capítulo 5 |
| Superviviente Erasmus | Completar la historia |

Los logros se podrán consultar desde el menú.

No será obligatorio conseguirlos todos para terminar el videojuego.

---

# 15. Diseño visual

El videojuego utilizará una estética pixel art 2D con perspectiva cenital.

Antigravity será responsable de seleccionar y adaptar los recursos visuales necesarios.

## 15.1. Criterios generales

- Utilizar principalmente recursos existentes con licencias compatibles.
- Mantener un estilo gráfico uniforme.
- Priorizar sprites y tilesets con perspectiva cenital.
- Utilizar personajes con animaciones en cuatro direcciones.
- Mantener proporciones coherentes entre personajes y escenarios.
- Evitar recursos demasiado detallados o visualmente incompatibles.
- Adaptar los elementos gráficos cuando sea necesario y esté permitido.
- Utilizar gráficos originales cuando no existan recursos adecuados.

## 15.2. Protagonista

Amanda deberá estar representada mediante un personaje femenino con cabello castaño de longitud media, principalmente liso y ligeramente ondulado.

Se podrá utilizar un sprite existente como base y modificarlo para aproximarlo a su apariencia, siempre que la licencia lo permita.

El personaje deberá contar, como mínimo, con:

- Animación de reposo.
- Animación de caminar hacia arriba.
- Animación de caminar hacia abajo.
- Animación de caminar hacia la izquierda.
- Animación de caminar hacia la derecha.

Las animaciones deberán mantener una apariencia consistente.

## 15.3. Escenarios

Se construirán utilizando tilesets y recursos compatibles con la perspectiva del videojuego.

Se priorizarán packs que permitan crear varios escenarios con un estilo uniforme.

La distribución de los mapas quedará a criterio de Antigravity, respetando los objetivos de cada capítulo.

## 15.4. Interfaces

Se podrán utilizar recursos gráficos existentes para botones, ventanas, cuadros de diálogo e indicadores.

La interfaz deberá ser clara, legible y adaptable a dispositivos móviles.

No será obligatorio que todos los elementos de interfaz estén realizados en pixel art si eso perjudica su usabilidad.

---

# 16. Requisitos técnicos y de calidad

## 16.1. Rendimiento

El videojuego deberá funcionar de manera fluida en navegadores modernos.

Se tomará como objetivo una ejecución de hasta 60 FPS, reduciendo la complejidad gráfica si fuera necesario.

El juego deberá seguir siendo jugable en dispositivos móviles de rendimiento medio.

## 16.2. Compatibilidad

Se deberá comprobar el funcionamiento en:

- Google Chrome.
- Safari.
- Firefox.
- Navegadores móviles compatibles.

Se prestará especial atención a Safari en iPhone y iPad.

## 16.3. Guardado

El sistema deberá permitir:

- Crear una nueva partida.
- Continuar una partida.
- Guardar automáticamente.
- Reintentar checkpoints.
- Volver a jugar capítulos.
- Reiniciar el progreso mediante una acción explícita con confirmación.

## 16.4. Errores y recuperación

El juego no deberá bloquearse por:

- Interacciones repetidas.
- Diálogos interrumpidos.
- Cambios de escenario.
- Colisiones.
- Pérdida de salud.
- Reinicios desde checkpoints.
- Ausencia o corrupción de datos guardados.

Si los datos guardados no son válidos, el juego deberá permitir iniciar una partida nueva sin mostrar errores técnicos al jugador.

## 16.5. Pruebas

Antes de considerar completado un capítulo se comprobará:

- Que todos los objetivos sean alcanzables.
- Que no existan bloqueos de progresión.
- Que los controles funcionen.
- Que los NPC puedan interactuar.
- Que las colisiones sean correctas.
- Que los checkpoints restauren el estado adecuado.
- Que la salud mental se actualice correctamente.
- Que el capítulo pueda completarse.
- Que funcione en ordenador y móvil.
- Que la duración sea razonable.

---

# 17. Plan de desarrollo

El desarrollo se organizará en fases.

## Fase 1 — Preparación técnica

- Crear el proyecto.
- Configurar Phaser y Vite.
- Preparar la estructura de directorios.
- Configurar el entorno de desarrollo.
- Preparar el sistema de recursos.
- Comprobar la compatibilidad inicial con GitHub Pages.

## Fase 2 — Sistemas comunes

- Movimiento de Amy.
- Cámara y colisiones.
- Interacciones con objetos.
- NPC y diálogos.
- Sistema de misiones.
- Salud mental.
- Inventario.
- Checkpoints.
- Guardado de partida.
- Controles táctiles.

## Fase 3 — Capítulo 1

Implementar la primera aventura completa.

Este capítulo servirá para validar los sistemas comunes antes de desarrollar el resto.

## Fase 4 — Capítulos 2 y 3

Desarrollar la adaptación a Salerno y la vida Erasmus.

Reutilizar los sistemas existentes y añadir únicamente las mecánicas específicas necesarias.

## Fase 5 — Capítulo 4

Implementar Eurotrip con sus tres destinos.

Priorizar la reutilización de componentes y sistemas.

## Fase 6 — Capítulo 5

Implementar el regreso por Navidad y la escena final.

## Fase 7 — Pruebas y publicación

- Revisar errores.
- Ajustar la dificultad.
- Optimizar recursos gráficos.
- Comprobar la compatibilidad móvil.
- Validar la duración de los capítulos.
- Preparar la versión final.
- Publicar mediante GitHub Pages.

---

# 18. Criterios de aceptación

El proyecto se considerará funcionalmente completo cuando:

- [ ]  Exista un menú principal operativo.
- [ ]  Amy pueda moverse libremente en cuatro direcciones.
- [ ]  Los escenarios tengan colisiones.
- [ ]  Los objetos y NPC sean interactivos.
- [ ]  Los diálogos permitan avanzar y tomar decisiones.
- [ ]  El sistema de misiones funcione.
- [ ]  El inventario permita gestionar objetos.
- [ ]  La salud mental pueda disminuir y recuperarse.
- [ ]  El colapso Erasmus permita reintentar desde checkpoints.
- [ ]  Las partidas se guarden correctamente.
- [ ]  El capítulo 1 pueda completarse.
- [ ]  El capítulo 2 pueda completarse.
- [ ]  El capítulo 3 pueda completarse.
- [ ]  Eurotrip incluya tres rutas jugables.
- [ ]  El capítulo 5 pueda completarse.
- [ ]  Exista una escena final personalizada.
- [ ]  El juego funcione con teclado y controles táctiles.
- [ ]  El juego sea accesible desde móvil, tablet y ordenador.
- [ ]  El juego esté publicado en GitHub Pages.

---

# 19. Instrucciones para Antigravity

Este documento constituye la **especificación funcional principal del videojuego**.

Antigravity deberá utilizarlo como referencia para implementar el proyecto.

## 19.1. Autonomía de diseño

Antigravity podrá decidir de forma autónoma:

- Selección de recursos gráficos libres.
- Elección de packs y tilesets.
- Adaptación visual de personajes.
- Distribución y diseño de escenarios.
- Animaciones.
- Interfaces.
- Organización de los recursos.
- Efectos visuales y sonoros.
- Detalles decorativos.

Antes de incorporar recursos externos, deberá comprobar que sus licencias permiten utilizarlos y distribuirlos en el proyecto.

No deberá seleccionar recursos únicamente por su apariencia sin comprobar las condiciones de uso.

## 19.2. Restricciones

Se deberán respetar:

- La historia principal.
- Los cinco capítulos.
- Los objetivos de cada aventura.
- La perspectiva cenital.
- El movimiento libre.
- La protagonista única.
- El sistema de salud mental.
- Los checkpoints.
- La compatibilidad multiplataforma.
- La publicación mediante GitHub Pages.

No se deberán añadir sistemas complejos que no sean necesarios para cumplir los objetivos.

## 19.3. Prioridades

En caso de conflicto entre distintas decisiones, se priorizará:

1. Funcionamiento correcto.
2. Jugabilidad entretenida.
3. Compatibilidad móvil.
4. Claridad de los controles.
5. Coherencia visual.
6. Facilidad de mantenimiento.
7. Detalles gráficos secundarios.

## 19.4. Desarrollo incremental

El desarrollo deberá realizarse por etapas verificables.

Antes de implementar los cinco capítulos, deberán estar probados los sistemas comunes.

El capítulo 1 servirá como referencia funcional para los capítulos posteriores.

No se deberá considerar completada una fase hasta comprobar que sus funcionalidades principales funcionan correctamente.

## 19.5. Personalización futura

El juego deberá facilitar la incorporación posterior de:

- Fotografías personales.
- Nuevos diálogos.
- Nombres de amigos reales.
- Referencias y anécdotas.
- Modificaciones de la apariencia de Amy.
- Nuevos destinos de Eurotrip.
- Nuevos capítulos.

Estos cambios deberán poder realizarse sin reestructurar todo el proyecto.

---

# 20. Estado del proyecto

## Diseño funcional

- [x]  Concepto general.
- [x]  Protagonista y personalidad.
- [x]  Estructura de cinco capítulos.
- [x]  Perspectiva y movimiento.
- [x]  Interacciones y NPC.
- [x]  Sistema de misiones.
- [x]  Sistema básico de inventario.
- [x]  Sistema de salud mental.
- [x]  Checkpoints y guardado.
- [x]  Rejugabilidad.
- [x]  Diseño funcional del capítulo 1.
- [x]  Diseño funcional del capítulo 2.
- [x]  Diseño funcional del capítulo 3.
- [x]  Diseño funcional del capítulo 4.
- [x]  Diseño funcional del capítulo 5.
- [x]  Controles y compatibilidad.
- [x]  Propuesta de arquitectura técnica.
- [x]  Criterios de aceptación.

## Implementación

Preparación del proyecto.

- [ ]  Implementación de sistemas comunes.
- [ ]  Diseño de recursos gráficos.
- [ ]  Implementación del capítulo 1.
- [ ]  Implementación del capítulo 2.
- [ ]  Implementación del capítulo 3.
- [ ]  Implementación del capítulo 4.
- [ ]  Implementación del capítulo 5.
- [ ]  Pruebas.
- [ ]  Ajustes de dificultad.
- [ ]  Personalización final.
- [ ]  Publicación.

---

# 21. Mantenimiento del documento

Este documento será la referencia del desarrollo de Erasmus Valley: Salerno Edition.

Las modificaciones futuras deberán actualizar las secciones afectadas, evitando duplicar información.

Los cambios significativos en la historia, la jugabilidad o la arquitectura deberán reflejarse en el documento antes de implementarse.

Las decisiones visuales y técnicas concretas adoptadas durante el desarrollo podrán documentarse en archivos independientes.

La implementación deberá mantenerse coherente con la versión más reciente de esta especificación.

---

# 22. Gestión de recursos y licencias

## 22.1. Registro de recursos

Se creará un archivo ASSETS_CREDITS.md para documentar los recursos externos utilizados en el videojuego.

Para cada recurso se registrará:

- Nombre del recurso o pack.
- Autor o creador.
- Página de origen.
- Licencia.
- Condiciones de atribución.
- Modificaciones realizadas, si corresponde.
- Ubicación de los archivos dentro del proyecto.

## 22.2. Créditos

El videojuego incluirá una sección de créditos accesible desde el menú principal.

En ella se mencionarán los autores de los recursos cuando su licencia lo exija.

También podrán incluirse créditos voluntarios para recursos CC0.

## 22.3. Restricciones

No se utilizarán recursos cuando:

- No se pueda identificar su licencia.
- La licencia no permita su distribución en un videojuego web.
- Existan restricciones incompatibles con la publicación del repositorio.
- No se puedan cumplir los requisitos de atribución.
- Se desconozca si está permitido modificarlos cuando sea necesario hacerlo.

No se deberán eliminar avisos de licencia que deban conservarse.

## 22.4. Publicación

Antes del despliegue definitivo se revisará que todos los recursos utilizados tengan licencias compatibles y estén correctamente documentados.

La publicación del código en GitHub no otorgará automáticamente a terceros derechos adicionales sobre los recursos externos. Estos conservarán sus licencias originales.