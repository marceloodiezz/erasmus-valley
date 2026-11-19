# Erasmus Valley: Salerno Edition — Documentación Técnica

Este documento describe la arquitectura, configuración, entorno de desarrollo y procedimientos de despliegue del proyecto.

---

## 1. Stack Tecnológico

- **Motor 2D**: [Phaser 3](https://phaser.io/) (v3.90.0)
- **Empaquetador y Servidor Dev**: [Vite](https://vitejs.dev/) (v8.x)
- **Lenguaje**: JavaScript moderno (ES Modules / ES2022)
- **Físicas**: Arcade Physics (integradas en Phaser)
- **Audio**: Web Audio API nativo con desbloqueo interactivo
- **Despliegue**: GitHub Pages mediante GitHub Actions automatizado

---

## 2. Estructura de Directorios (Fase 1)

```text
erasmus-valley/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Flujo CI/CD para GitHub Pages
├── public/
│   └── assets/                 # Recursos estáticos (spritesheets, audio, fuentes)
├── src/
│   ├── config/
│   │   └── gameConfig.js       # Configuración de Phaser 3 (Scale.RESIZE, dinámica)
│   ├── scenes/
│   │   ├── BootScene.js        # Escena inicial de arranque
│   │   └── TitleScene.js       # Pantalla de título fluida y horizontal
│   ├── styles/
│   │   └── main.css            # Estilos globales y pantalla de aviso "¡Gira tu dispositivo!"
│   ├── utils/
│   │   └── orientation.js      # Gestor de orientación y pausa para móviles/tablets
│   └── main.js                 # Punto de entrada de la aplicación
├── index.html                  # Plantilla HTML5 principal
├── vite.config.js              # Configuración de Vite con rutas relativas
├── package.json                # Dependencias y scripts de ejecución
├── ASSETS_CREDITS.md           # Registro de recursos gráficos y licencias
├── GAME_DESIGN.md              # Especificación funcional y de diseño del juego
├── README.md                   # Presentación narrativa del videojuego
└── TECHNICAL.md                # Este documento técnico
```

---

## 3. Adaptabilidad Dinámica y Formato Horizontal (Landscape)

De acuerdo con la sección 6.4 de `GAME_DESIGN.md`:
1. **Sin tamaño fijo predeterminado**:
   - El juego no fuerza una resolución fija rígida. Utiliza el modo **`Phaser.Scale.RESIZE`** con `width: '100%'` y `height: '100%'`.
   - Se adapta dinámicamente al tamaño real disponible de la pantalla o ventana del navegador (pantallas 16:9, 16:10, 21:9 ultrawide, tablets o teléfonos móviles en horizontal), aprovechando todo el espacio sin bandas negras fijas artificiales.
   - Las escenas y elementos de interfaz recalculan sus proporciones y posiciones relativas mediante eventos de redimensionado (`resize`).
2. **Pantalla superpuesta «¡Gira tu dispositivo!»**:
   - En **móviles y tablets**, cuando el dispositivo se sostiene en posición vertical (*portrait*):
     - Aparece una pantalla superpuesta (`#rotate-device-overlay`) con el icono animado del móvil girando y el mensaje: *«¡Gira tu dispositivo! Erasmus Valley se juega en horizontal. Gira la pantalla para continuar tu aventura»*.
     - Las escenas de Phaser se pausan automáticamente y el audio se silencia.
     - La capa superpuesta bloquea cualquier interacción táctil sobre el lienzo.
     - Al girar el dispositivo a posición horizontal (*landscape*), el aviso desaparece de inmediato y el juego se reanuda automáticamente en el mismo punto.
3. **Comportamiento en ordenadores**:
   - En ordenadores de sobremesa y portátiles, el contenido mantiene una distribución horizontal adaptada al ancho y alto de la ventana, recalculando la escala de fuentes y posiciones para evitar deformaciones.
4. **Diseño de futuros controles táctiles (Fase 2+)**:
   - El joystick virtual se ubicará en la esquina inferior izquierda y los botones de acción en la esquina inferior derecha del área horizontal, optimizados ergonómicamente para jugar con los pulgares.

---

## 4. Scripts Disponibles

```bash
# Iniciar servidor de desarrollo local con recarga rápida (HMR)
npm run dev

# Compilar para producción (genera la carpeta dist/)
npm run build

# Previsualizar localmente la compilación de producción
npm run preview
```

---

## 5. Despliegue en GitHub Pages

1. La configuración en `vite.config.js` define `base: './'`, lo que genera rutas relativas en los assets (`dist/assets/...`). Esto permite que el juego funcione tanto en la raíz de un dominio como en una subruta de repositorio (ej. `https://<usuario>.github.io/<repositorio>/`).
2. El archivo `.github/workflows/deploy.yml` compila el proyecto y lo despliega automáticamente en GitHub Pages cada vez que se autoriza y realiza un `push` a la rama `main`.
