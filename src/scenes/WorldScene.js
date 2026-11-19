import Phaser from 'phaser';
import Player from '../entities/Player.js';

/**
 * Escena de exploración y prueba del mundo (WorldScene).
 * Presenta un entorno cuidado, limpio y uniforme con estética indie pixel art:
 * - Dormitorio acogedor con cama, alfombra bohemia, escritorio de estudio y estantería.
 * - Aula de Física con pupitres y archivadores.
 * - Plaza exterior italiana con adoquines, farolas clásicas y gran fuente central.
 * - Parque verde con césped natural, flores silvestres, bancos y árboles frondosos.
 * Incluye ordenación por profundidad en Y (Y-sorting) para que Amy pase naturalmente por delante y detrás de objetos.
 */
export default class WorldScene extends Phaser.Scene {
  constructor() {
    super('WorldScene');
    this.player = null;
    this.obstacles = null;
    this.cursors = null;
    this.wasd = null;
    this.depthObjects = [];
  }

  create() {
    const mapWidth = 1600;
    const mapHeight = 1200;
    this.depthObjects = [];

    // Límites del mundo físico
    this.physics.world.setBounds(0, 0, mapWidth, mapHeight);

    // 1. Construir capas del escenario
    this.buildGround(mapWidth, mapHeight);
    this.buildArchitectureAndProps(mapWidth, mapHeight);

    // 2. Crear a Amy en el dormitorio (Zona Noroeste)
    this.player = new Player(this, 280, 260);
    this.player.setDepth(260);

    // 3. Colisiones físicas
    this.physics.add.collider(this.player, this.obstacles);

    // 4. Cámara de seguimiento con zoom calibrado
    this.setupCamera(mapWidth, mapHeight);

    // 5. Entradas de teclado (WASD + Flechas)
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wasd = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
    });

    // 6. Iniciar la escena de interfaz (UIScene)
    this.scene.launch('UIScene');

    // 7. Eventos de redimensionado de pantalla
    this.scale.on('resize', this.handleResize, this);

    this.events.on('shutdown', () => {
      this.scale.off('resize', this.handleResize, this);
      if (this.scene.isActive('UIScene')) {
        this.scene.stop('UIScene');
      }
    });
  }

  /**
   * Construye los suelos diferenciando con armonía las zonas interiores y exteriores.
   */
  buildGround(mapWidth, mapHeight) {
    const tileSize = 32;
    const cols = Math.ceil(mapWidth / tileSize);
    const rows = Math.ceil(mapHeight / tileSize);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const posX = x * tileSize + tileSize / 2;
        const posY = y * tileSize + tileSize / 2;

        let textureKey = 'tile_floor_stone'; // Adoquines italianos por defecto

        // Habitación de Amy (madera noble cálida)
        if (x >= 2 && x <= 16 && y >= 2 && y <= 14) {
          textureKey = 'tile_floor_wood';
        }
        // Aula de Física (madera)
        else if (x >= 26 && x <= 46 && y >= 2 && y <= 14) {
          textureKey = 'tile_floor_wood';
        }
        // Parque / Jardín (césped suave con flores silvestres)
        else if (x >= 24 && x <= 47 && y >= 17 && y <= 35) {
          textureKey = 'tile_floor_grass';
        }

        this.add.image(posX, posY, textureKey).setDepth(0);
      }
    }

    // Alfombra bohemia decorativa en el dormitorio de Amy (debajo del jugador, depth 1)
    this.add.image(280, 270, 'prop_rug').setDepth(1);
  }

  /**
   * Construye paredes, muebles y elementos decorativos con colisiones precisas.
   */
  buildArchitectureAndProps(mapWidth, mapHeight) {
    this.obstacles = this.physics.add.staticGroup();

    const tileSize = 32;

    // --- Muros exteriores del mapa ---
    for (let x = 0; x < mapWidth; x += tileSize) {
      this.createWall(x + 16, 16);
      this.createWall(x + 16, mapHeight - 16);
    }
    for (let y = 0; y < mapHeight; y += tileSize) {
      this.createWall(16, y + 16);
      this.createWall(mapWidth - 16, y + 16);
    }

    // --- ZONA 1: DORMITORIO DE AMY (Noroeste) ---
    // Muro norte
    for (let x = 64; x <= 512; x += 32) this.createWall(x + 16, 64 + 16);
    // Muro oeste
    for (let y = 64; y <= 448; y += 32) this.createWall(64 + 16, y + 16);
    // Muro sur con puerta de acceso (hueco entre 256 y 320)
    for (let x = 64; x <= 512; x += 32) {
      if (x < 256 || x > 320) this.createWall(x + 16, 448 + 16);
    }
    // Muro este
    for (let y = 64; y <= 448; y += 32) this.createWall(512 + 16, y + 16);

    // Mobiliario del dormitorio
    this.createProp(130, 135, 'prop_bed', 34, 46, 3, 12);
    this.createProp(235, 115, 'prop_desk', 56, 22, 4, 10);
    this.createProp(410, 110, 'prop_bookshelf', 42, 48, 3, 12);
    this.createProp(475, 125, 'prop_plant', 18, 16, 3, 16);

    // --- ZONA 2: AULA DE FÍSICA (Noreste) ---
    for (let x = 832; x <= 1472; x += 32) this.createWall(x + 16, 64 + 16);
    for (let y = 64; y <= 448; y += 32) this.createWall(832 + 16, y + 16);
    for (let x = 832; x <= 1472; x += 32) {
      if (x < 1120 || x > 1184) this.createWall(x + 16, 448 + 16); // Puerta
    }
    for (let y = 64; y <= 448; y += 32) this.createWall(1472 + 16, y + 16);

    // Pupitres del aula
    this.createProp(960, 160, 'prop_desk', 56, 22, 4, 10);
    this.createProp(1120, 160, 'prop_desk', 56, 22, 4, 10);
    this.createProp(1280, 160, 'prop_desk', 56, 22, 4, 10);
    this.createProp(960, 260, 'prop_desk', 56, 22, 4, 10);
    this.createProp(1120, 260, 'prop_desk', 56, 22, 4, 10);
    this.createProp(1280, 260, 'prop_desk', 56, 22, 4, 10);
    this.createProp(1420, 120, 'prop_bookshelf', 42, 48, 3, 12);

    // --- ZONA 3: PLAZA EXTERIOR DE SALERNO (Suroeste) ---
    // Gran fuente central de piedra
    this.createProp(440, 800, 'prop_fountain', 64, 56, 6, 12);

    // Farolas clásicas en las esquinas de la plaza
    this.createProp(260, 680, 'prop_lamp', 12, 14, 6, 42);
    this.createProp(620, 680, 'prop_lamp', 12, 14, 6, 42);
    this.createProp(260, 920, 'prop_lamp', 12, 14, 6, 42);
    this.createProp(620, 920, 'prop_lamp', 12, 14, 6, 42);

    // Bancos de plaza
    this.createProp(320, 730, 'prop_bench', 46, 18, 3, 6);
    this.createProp(560, 730, 'prop_bench', 46, 18, 3, 6);
    this.createProp(320, 870, 'prop_bench', 46, 18, 3, 6);
    this.createProp(560, 870, 'prop_bench', 46, 18, 3, 6);

    // --- ZONA 4: PARQUE CON JARDÍN (Sureste) ---
    const treePositions = [
      [900, 700], [1050, 660], [1200, 720], [1350, 680],
      [960, 860], [1120, 890], [1280, 840], [1400, 920],
      [880, 1020], [1040, 1050], [1220, 1010], [1380, 1060]
    ];
    treePositions.forEach(([tx, ty]) => {
      // Caja de colisión en el tronco inferior para pasar detrás de las ramas
      this.createProp(tx, ty, 'prop_tree', 22, 18, 25, 54);
    });

    // Bancos de paseo en el parque
    this.createProp(1000, 760, 'prop_bench', 46, 18, 3, 6);
    this.createProp(1200, 950, 'prop_bench', 46, 18, 3, 6);
  }

  createWall(x, y) {
    const wall = this.obstacles.create(x, y, 'tile_wall');
    wall.setDepth(y);
    wall.body.setSize(32, 32);
    wall.refreshBody();
    return wall;
  }

  createProp(x, y, key, bodyW, bodyH, offsetX, offsetY) {
    const prop = this.obstacles.create(x, y, key);
    // Profundidad según Y para ordenación natural (Y-sorting)
    prop.setDepth(y);
    prop.body.setSize(bodyW, bodyH);
    prop.body.setOffset(offsetX, offsetY);
    prop.refreshBody();
    this.depthObjects.push(prop);
    return prop;
  }

  setupCamera(mapWidth, mapHeight) {
    const camera = this.cameras.main;
    camera.setBounds(0, 0, mapWidth, mapHeight);
    camera.startFollow(this.player, true, 0.08, 0.08);
    this.updateCameraZoom();
  }

  updateCameraZoom() {
    const height = this.scale.height;

    // Zoom calibrado para una visibilidad nítida y proporción cómoda
    let zoom = 2.0;
    if (height <= 420) {
      zoom = 1.85; // Móviles en horizontal (e.g. 393px)
    } else if (height <= 720) {
      zoom = 2.2;  // Pantallas medianas y portátiles
    } else {
      zoom = 2.6;  // Monitores 1080p+
    }

    this.cameras.main.setZoom(zoom);
  }

  handleResize() {
    this.updateCameraZoom();
  }

  update() {
    if (!this.player) return;

    // Entradas de teclado
    const keyboardInput = {
      left: this.cursors.left.isDown || this.wasd.left.isDown,
      right: this.cursors.right.isDown || this.wasd.right.isDown,
      up: this.cursors.up.isDown || this.wasd.up.isDown,
      down: this.cursors.down.isDown || this.wasd.down.isDown
    };

    // Entradas del joystick táctil
    const uiScene = this.scene.get('UIScene');
    const joystickInput = uiScene?.getJoystickValue?.() || null;

    // Actualizar movimiento de Amy
    this.player.updateMovement(keyboardInput, joystickInput);

    // Ordenación de profundidad dinámica (Y-sorting)
    this.player.setDepth(this.player.y);
  }
}
