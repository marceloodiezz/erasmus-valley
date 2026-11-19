/**
 * Generador de recursos gráficos para Erasmus Valley: Salerno Edition.
 * Crea spritesheets y texturas pixel art en memoria con paleta coherente,
 * acabados limpios, suaves y elegantes (sin patrones bruscos ni ruidos visuales).
 */

export function generateProvisionalTextures(scene) {
  generateAmySpritesheet(scene);
  generateEnvironmentTextures(scene);
  generatePropsTextures(scene);
  generateJoystickTextures(scene);
}

// ============================================================================
// 1. SPRITESHEET DE AMY (AMANDA)
// ============================================================================

function generateAmySpritesheet(scene) {
  if (scene.textures.exists('amy')) return;

  const frameWidth = 32;
  const frameHeight = 32;
  const cols = 4;
  const rows = 4;

  const canvas = document.createElement('canvas');
  canvas.width = frameWidth * cols;
  canvas.height = frameHeight * rows;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const directions = ['down', 'left', 'right', 'up'];

  for (let row = 0; row < rows; row++) {
    const dir = directions[row];
    for (let col = 0; col < cols; col++) {
      const offsetX = col * frameWidth;
      const offsetY = row * frameHeight;
      drawAmyFrame(ctx, offsetX, offsetY, dir, col);
    }
  }

  scene.textures.addSpriteSheet('amy', canvas, {
    frameWidth,
    frameHeight
  });
}

function drawAmyFrame(ctx, x, y, dir, step) {
  const P = {
    hairDark: '#3e2211',
    hairBase: '#5e3419',
    hairMid: '#7a4622',
    hairLight: '#9e5f30',
    skinBase: '#fcd3b6',
    skinShadow: '#eab495',
    skinBlush: '#f99e8b',
    eyeColor: '#2b170c',
    eyeWhite: '#ffffff',
    hoodieDark: '#4a3da8',
    hoodieBase: '#6354d2',
    hoodieLight: '#8174e8',
    hoodieCollar: '#f5f6fa',
    strapColor: '#784421',
    strapBuckle: '#f1c40f',
    jeansDark: '#1e293b',
    jeansBase: '#334155',
    jeansLight: '#475569',
    shoeBase: '#ffffff',
    shoeShadow: '#cbd5e1',
    shoeSole: '#64748b',
    shadow: 'rgba(15, 23, 42, 0.28)'
  };

  const isWalking = (step === 1 || step === 3);
  const bob = isWalking ? 1 : 0;
  const legSwing = (step === 1) ? -1 : (step === 3) ? 1 : 0;

  ctx.save();
  ctx.translate(x, y + bob);

  // Sombra a los pies
  ctx.fillStyle = P.shadow;
  ctx.beginPath();
  ctx.ellipse(16, 29 - bob, 7.5, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Piernas y calzado
  if (dir === 'up') {
    ctx.fillStyle = P.jeansBase;
    ctx.fillRect(11 + legSwing * 2, 21, 4, 6);
    ctx.fillRect(17 - legSwing * 2, 21, 4, 6);
    ctx.fillStyle = P.jeansDark;
    ctx.fillRect(11 + legSwing * 2, 26, 4, 1);
    ctx.fillRect(17 - legSwing * 2, 26, 4, 1);

    ctx.fillStyle = P.shoeBase;
    ctx.fillRect(11 + legSwing * 2, 27, 4, 3);
    ctx.fillRect(17 - legSwing * 2, 27, 4, 3);
    ctx.fillStyle = P.shoeSole;
    ctx.fillRect(11 + legSwing * 2, 29, 4, 1);
    ctx.fillRect(17 - legSwing * 2, 29, 4, 1);
  } else if (dir === 'left') {
    ctx.fillStyle = P.jeansDark;
    ctx.fillRect(13 - legSwing * 3, 21, 4, 6);
    ctx.fillStyle = P.shoeShadow;
    ctx.fillRect(11 - legSwing * 3, 27, 5, 3);

    ctx.fillStyle = P.jeansBase;
    ctx.fillRect(14 + legSwing * 2, 21, 4, 6);
    ctx.fillStyle = P.shoeBase;
    ctx.fillRect(12 + legSwing * 2, 27, 5, 3);
    ctx.fillStyle = P.shoeSole;
    ctx.fillRect(12 + legSwing * 2, 29, 5, 1);
  } else if (dir === 'right') {
    ctx.fillStyle = P.jeansDark;
    ctx.fillRect(15 + legSwing * 3, 21, 4, 6);
    ctx.fillStyle = P.shoeShadow;
    ctx.fillRect(16 + legSwing * 3, 27, 5, 3);

    ctx.fillStyle = P.jeansBase;
    ctx.fillRect(14 - legSwing * 2, 21, 4, 6);
    ctx.fillStyle = P.shoeBase;
    ctx.fillRect(15 - legSwing * 2, 27, 5, 3);
    ctx.fillStyle = P.shoeSole;
    ctx.fillRect(15 - legSwing * 2, 29, 5, 1);
  } else {
    const leftLegX = 11 + (legSwing === -1 ? -1 : 0);
    const rightLegX = 17 + (legSwing === 1 ? 1 : 0);

    ctx.fillStyle = P.jeansBase;
    ctx.fillRect(leftLegX, 21, 4, 6);
    ctx.fillRect(rightLegX, 21, 4, 6);

    ctx.fillStyle = P.jeansDark;
    ctx.fillRect(15, 21, 2, 3);
    ctx.fillRect(leftLegX, 26, 4, 1);
    ctx.fillRect(rightLegX, 26, 4, 1);

    ctx.fillStyle = P.shoeBase;
    ctx.fillRect(leftLegX, 27, 4, 3);
    ctx.fillRect(rightLegX, 27, 4, 3);
    ctx.fillStyle = P.shoeSole;
    ctx.fillRect(leftLegX, 29, 4, 1);
    ctx.fillRect(rightLegX, 29, 4, 1);
  }

  // Torso y sudadera
  if (dir === 'up') {
    ctx.fillStyle = P.hoodieBase;
    ctx.fillRect(10, 13, 12, 9);
    ctx.fillStyle = P.hoodieDark;
    ctx.fillRect(10, 20, 12, 2);
    ctx.fillStyle = P.hoodieDark;
    ctx.fillRect(12, 13, 8, 4);

    ctx.fillStyle = P.hoodieBase;
    ctx.fillRect(8, 14 + legSwing, 3, 6);
    ctx.fillRect(21, 14 - legSwing, 3, 6);
  } else if (dir === 'left') {
    ctx.fillStyle = P.hoodieBase;
    ctx.fillRect(12, 13, 8, 9);
    ctx.fillStyle = P.hoodieDark;
    ctx.fillRect(12, 20, 8, 2);

    ctx.fillStyle = P.strapColor;
    ctx.fillRect(14, 14, 2, 7);

    ctx.fillStyle = P.hoodieLight;
    ctx.fillRect(13, 14 + legSwing * 2, 4, 6);
    ctx.fillStyle = P.skinBase;
    ctx.fillRect(13, 20 + legSwing * 2, 3, 2);
  } else if (dir === 'right') {
    ctx.fillStyle = P.hoodieBase;
    ctx.fillRect(12, 13, 8, 9);
    ctx.fillStyle = P.hoodieDark;
    ctx.fillRect(12, 20, 8, 2);

    ctx.fillStyle = P.strapColor;
    ctx.fillRect(16, 14, 2, 7);

    ctx.fillStyle = P.hoodieLight;
    ctx.fillRect(15, 14 - legSwing * 2, 4, 6);
    ctx.fillStyle = P.skinBase;
    ctx.fillRect(16, 20 - legSwing * 2, 3, 2);
  } else {
    ctx.fillStyle = P.hoodieBase;
    ctx.fillRect(10, 13, 12, 9);
    ctx.fillStyle = P.hoodieDark;
    ctx.fillRect(10, 20, 12, 2);
    ctx.fillStyle = P.hoodieLight;
    ctx.fillRect(11, 14, 10, 2);

    ctx.fillStyle = P.hoodieCollar;
    ctx.fillRect(15, 13, 2, 2);

    ctx.fillStyle = P.strapColor;
    ctx.fillRect(12, 14, 2, 2);
    ctx.fillRect(14, 16, 2, 2);
    ctx.fillRect(16, 18, 2, 2);
    ctx.fillStyle = P.strapBuckle;
    ctx.fillRect(14, 16, 1, 1);

    ctx.fillStyle = P.hoodieBase;
    ctx.fillRect(8, 14 - legSwing, 3, 6);
    ctx.fillRect(21, 14 + legSwing, 3, 6);
    ctx.fillStyle = P.skinBase;
    ctx.fillRect(8, 20 - legSwing, 3, 2);
    ctx.fillRect(21, 20 + legSwing, 3, 2);
  }

  // Cabeza y cabello ondulado
  if (dir === 'up') {
    ctx.fillStyle = P.hairDark;
    ctx.fillRect(9, 4, 14, 12);
    ctx.fillStyle = P.hairBase;
    ctx.fillRect(10, 4, 12, 11);
    ctx.fillStyle = P.hairMid;
    ctx.fillRect(11, 5, 10, 8);
    ctx.fillStyle = P.hairLight;
    ctx.fillRect(12, 6, 8, 3);

    ctx.fillStyle = P.hairBase;
    ctx.fillRect(9, 14, 3, 3);
    ctx.fillRect(20, 14, 3, 3);
  } else if (dir === 'left') {
    ctx.fillStyle = P.skinBase;
    ctx.fillRect(10, 6, 10, 8);
    ctx.fillStyle = P.skinShadow;
    ctx.fillRect(10, 13, 6, 1);

    ctx.fillStyle = P.eyeColor;
    ctx.fillRect(11, 9, 2, 3);
    ctx.fillStyle = P.eyeWhite;
    ctx.fillRect(11, 9, 1, 1);

    ctx.fillStyle = P.skinBlush;
    ctx.fillRect(12, 12, 2, 1);

    ctx.fillStyle = P.hairDark;
    ctx.fillRect(12, 3, 9, 4);
    ctx.fillRect(17, 5, 5, 11);
    ctx.fillRect(10, 4, 5, 3);

    ctx.fillStyle = P.hairBase;
    ctx.fillRect(13, 4, 8, 3);
    ctx.fillRect(18, 6, 4, 9);
    ctx.fillStyle = P.hairLight;
    ctx.fillRect(14, 4, 5, 1);
  } else if (dir === 'right') {
    ctx.fillStyle = P.skinBase;
    ctx.fillRect(12, 6, 10, 8);
    ctx.fillStyle = P.skinShadow;
    ctx.fillRect(16, 13, 6, 1);

    ctx.fillStyle = P.eyeColor;
    ctx.fillRect(19, 9, 2, 3);
    ctx.fillStyle = P.eyeWhite;
    ctx.fillRect(20, 9, 1, 1);

    ctx.fillStyle = P.skinBlush;
    ctx.fillRect(18, 12, 2, 1);

    ctx.fillStyle = P.hairDark;
    ctx.fillRect(11, 3, 9, 4);
    ctx.fillRect(10, 5, 5, 11);
    ctx.fillRect(17, 4, 5, 3);

    ctx.fillStyle = P.hairBase;
    ctx.fillRect(11, 4, 8, 3);
    ctx.fillRect(10, 6, 4, 9);
    ctx.fillStyle = P.hairLight;
    ctx.fillRect(13, 4, 5, 1);
  } else {
    ctx.fillStyle = P.skinBase;
    ctx.fillRect(10, 6, 12, 8);
    ctx.fillStyle = P.skinShadow;
    ctx.fillRect(10, 13, 12, 1);

    ctx.fillStyle = P.eyeColor;
    ctx.fillRect(12, 9, 2, 3);
    ctx.fillRect(18, 9, 2, 3);
    ctx.fillStyle = P.eyeWhite;
    ctx.fillRect(12, 9, 1, 1);
    ctx.fillRect(18, 9, 1, 1);

    ctx.fillStyle = P.skinBlush;
    ctx.fillRect(11, 12, 2, 1);
    ctx.fillRect(19, 12, 2, 1);
    ctx.fillStyle = P.hairDark;
    ctx.fillRect(15, 12, 2, 1);

    ctx.fillStyle = P.hairDark;
    ctx.fillRect(9, 3, 14, 4);
    ctx.fillRect(8, 6, 3, 10);
    ctx.fillRect(21, 6, 3, 10);
    ctx.fillRect(7, 13, 3, 3);
    ctx.fillRect(22, 13, 3, 3);

    ctx.fillStyle = P.hairBase;
    ctx.fillRect(10, 4, 12, 3);
    ctx.fillRect(9, 6, 2, 8);
    ctx.fillRect(21, 6, 2, 8);

    ctx.fillStyle = P.hairBase;
    ctx.fillRect(10, 6, 4, 2);
    ctx.fillRect(17, 6, 5, 2);

    ctx.fillStyle = P.hairLight;
    ctx.fillRect(12, 4, 8, 1);
  }

  ctx.restore();
}

// ============================================================================
// 2. TEXTURAS DEL ENTORNO (SUELOS Y PAREDES LIMPIAS)
// ============================================================================

function generateEnvironmentTextures(scene) {
  // -------------------------------------------------------------
  // 1. Suelo de madera cálida (Parquet de roble suave y uniforme)
  // -------------------------------------------------------------
  if (!scene.textures.exists('tile_floor_wood')) {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Tono cálido homogéneo
    ctx.fillStyle = '#c89d6e';
    ctx.fillRect(0, 0, 32, 32);

    // Tablones con diferencia tonal muy suave (sin líneas negras duras)
    ctx.fillStyle = '#cfa778';
    ctx.fillRect(0, 1, 32, 7);
    ctx.fillRect(0, 9, 32, 7);
    ctx.fillRect(0, 17, 32, 7);
    ctx.fillRect(0, 25, 32, 6);

    // Separaciones sutiles de tablón
    ctx.fillStyle = '#b88b5c';
    ctx.fillRect(0, 0, 32, 1);
    ctx.fillRect(0, 8, 32, 1);
    ctx.fillRect(0, 16, 32, 1);
    ctx.fillRect(0, 24, 32, 1);

    // Juntas verticales alternas finas
    ctx.fillRect(16, 0, 1, 8);
    ctx.fillRect(24, 8, 1, 8);
    ctx.fillRect(10, 16, 1, 8);
    ctx.fillRect(20, 24, 1, 8);

    scene.textures.addCanvas('tile_floor_wood', canvas);
  }

  // -------------------------------------------------------------
  // 2. Suelo de plaza: Piedra travertino suave y limpia (NO brusco)
  // Reemplaza los adoquines rugosos de alto contraste por losas
  // amplias de tono caliza suave mediterránea con juntas muy delicadas
  // -------------------------------------------------------------
  if (!scene.textures.exists('tile_floor_stone')) {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Tono caliza / arenisca suave y homogéneo
    ctx.fillStyle = '#a1abb8';
    ctx.fillRect(0, 0, 32, 32);

    // Losa amplia con bisel suave de luz
    ctx.fillStyle = '#a9b3c0';
    ctx.fillRect(1, 1, 30, 30);

    // Juntas muy suaves y finas (1px, apenas 5% de contraste, eliminando el efecto cuadrícula brusco)
    ctx.fillStyle = '#919ca9';
    ctx.fillRect(0, 0, 32, 1);
    ctx.fillRect(0, 0, 1, 32);

    // Sutil gradiente de luz superior
    ctx.fillStyle = '#b4bdca';
    ctx.fillRect(1, 1, 30, 1);
    ctx.fillRect(1, 1, 1, 30);

    scene.textures.addCanvas('tile_floor_stone', canvas);
  }

  // -------------------------------------------------------------
  // 3. Césped de pradera limpio y agradable
  // -------------------------------------------------------------
  if (!scene.textures.exists('tile_floor_grass')) {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Verde suave relajante
    ctx.fillStyle = '#43974a';
    ctx.fillRect(0, 0, 32, 32);

    // Matiz suave
    ctx.fillStyle = '#4ca654';
    ctx.fillRect(2, 2, 28, 28);

    // Diminutas flores silvestres
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(8, 10, 2, 2);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(22, 16, 2, 2);
    ctx.fillStyle = '#e9d5ff';
    ctx.fillRect(14, 24, 2, 2);

    scene.textures.addCanvas('tile_floor_grass', canvas);
  }

  // -------------------------------------------------------------
  // 4. Paredes limpias, arquitectónicas y sólidas (Clean Walls)
  // Eliminadas las franjas intermedias repetitivas.
  // Diseño limpio: Remate superior sólido en pizarra oscura y frente
  // liso uniforme en tono lino cálido con sombra base sutil.
  // -------------------------------------------------------------
  if (!scene.textures.exists('tile_wall')) {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Frente de pared limpio y pulido (estuco / lino cálido sereno)
    ctx.fillStyle = '#e5ded6';
    ctx.fillRect(0, 0, 32, 32);

    // Remate superior arquitectónico sólido (alero / remate de muro de 5px)
    ctx.fillStyle = '#334155'; // Pizarra oscura limpia
    ctx.fillRect(0, 0, 32, 5);
    ctx.fillStyle = '#475569'; // Bisel de luz superior
    ctx.fillRect(0, 0, 32, 1);

    // Sombra proyectada sutil bajo el remate superior (3px suave)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 5, 32, 3);

    // Contacto limpio con el suelo en la parte inferior (zócalo fino de 3px)
    ctx.fillStyle = '#78685a';
    ctx.fillRect(0, 29, 32, 3);
    ctx.fillStyle = '#4a3d32';
    ctx.fillRect(0, 31, 32, 1);

    // Sutiles líneas laterales de junta vertical limpia (1px)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(31, 5, 1, 24);

    scene.textures.addCanvas('tile_wall', canvas);
  }
}

// ============================================================================
// 3. OBJETOS Y MOBILIARIO CUIDADO (PROPS)
// ============================================================================

function generatePropsTextures(scene) {
  // Cama
  if (!scene.textures.exists('prop_bed')) {
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.22)';
    ctx.fillRect(2, 60, 36, 4);

    ctx.fillStyle = '#54361e';
    ctx.fillRect(3, 4, 34, 12);
    ctx.fillStyle = '#6f4728';
    ctx.fillRect(5, 6, 30, 8);
    ctx.fillStyle = '#422814';
    ctx.fillRect(2, 2, 4, 14);
    ctx.fillRect(34, 2, 4, 14);

    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(5, 14, 30, 46);

    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(5, 26, 30, 34);
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(5, 26, 30, 4);
    ctx.fillStyle = '#60a5fa';
    ctx.fillRect(6, 32, 28, 2);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(5, 22, 30, 5);
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(5, 26, 30, 1);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(8, 9, 24, 12, 3);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(14, 13, 12, 3);

    scene.textures.addCanvas('prop_bed', canvas);
  }

  // Alfombra
  if (!scene.textures.exists('prop_rug')) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.ellipse(32, 20, 28, 16, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.ellipse(32, 20, 14, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.ellipse(32, 20, 6, 3, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(4, 17, 2, 6);
    ctx.fillRect(58, 17, 2, 6);

    scene.textures.addCanvas('prop_rug', canvas);
  }

  // Escritorio
  if (!scene.textures.exists('prop_desk')) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 36;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.22)';
    ctx.fillRect(2, 32, 60, 4);

    ctx.fillStyle = '#784725';
    ctx.fillRect(2, 4, 60, 26);
    ctx.fillStyle = '#96582e';
    ctx.fillRect(3, 5, 58, 22);
    ctx.fillStyle = '#b36d39';
    ctx.fillRect(3, 5, 58, 2);

    ctx.fillStyle = '#4a2b14';
    ctx.fillRect(4, 27, 6, 5);
    ctx.fillRect(54, 27, 6, 5);

    ctx.fillStyle = '#5e3619';
    ctx.fillRect(46, 12, 14, 14);
    ctx.fillStyle = '#f1c40f';
    ctx.fillRect(52, 15, 3, 1);
    ctx.fillRect(52, 21, 3, 1);

    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(20, 9, 20, 14);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(22, 11, 16, 9);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(24, 13, 5, 1);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(19, 22, 22, 2);

    ctx.fillStyle = '#ef4444';
    ctx.fillRect(10, 14, 5, 6);
    ctx.fillStyle = '#451a03';
    ctx.fillRect(11, 15, 3, 2);
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(8, 16, 2, 3);

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(44, 9, 10, 12);
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(44, 9, 2, 12);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(48, 8, 1, 12);

    scene.textures.addCanvas('prop_desk', canvas);
  }

  // Estantería
  if (!scene.textures.exists('prop_bookshelf')) {
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#4a2b14';
    ctx.fillRect(2, 4, 44, 58);
    ctx.fillStyle = '#6e3f1e';
    ctx.fillRect(4, 6, 40, 54);

    ctx.fillStyle = '#3a1f0d';
    ctx.fillRect(4, 22, 40, 3);
    ctx.fillRect(4, 38, 40, 3);
    ctx.fillRect(4, 54, 40, 3);

    const bookColors1 = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
    let bx = 6;
    bookColors1.forEach(c => {
      ctx.fillStyle = c;
      ctx.fillRect(bx, 10, 4, 12);
      bx += 5;
    });

    const bookColors2 = ['#06b6d4', '#6366f1', '#e11d48', '#84cc16'];
    bx = 6;
    bookColors2.forEach(c => {
      ctx.fillStyle = c;
      ctx.fillRect(bx, 26, 6, 12);
      bx += 7;
    });

    ctx.fillStyle = '#b45309';
    ctx.fillRect(32, 45, 8, 9);
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(36, 43, 5, 0, Math.PI * 2);
    ctx.fill();

    scene.textures.addCanvas('prop_bookshelf', canvas);
  }

  // Planta
  if (!scene.textures.exists('prop_plant')) {
    const canvas = document.createElement('canvas');
    canvas.width = 24;
    canvas.height = 36;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#b45309';
    ctx.fillRect(5, 20, 14, 14);
    ctx.fillStyle = '#d97706';
    ctx.fillRect(4, 18, 16, 3);

    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.arc(12, 14, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(10, 11, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.arc(12, 9, 4, 0, Math.PI * 2);
    ctx.fill();

    scene.textures.addCanvas('prop_plant', canvas);
  }

  // Árbol
  if (!scene.textures.exists('prop_tree')) {
    const canvas = document.createElement('canvas');
    canvas.width = 72;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
    ctx.beginPath();
    ctx.ellipse(36, 72, 28, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#45220c';
    ctx.fillRect(31, 46, 10, 26);
    ctx.fillStyle = '#653516';
    ctx.fillRect(33, 46, 6, 26);

    ctx.fillStyle = '#14532d';
    ctx.beginPath();
    ctx.arc(36, 36, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#16a34a';
    ctx.beginPath();
    ctx.arc(33, 33, 26, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(26, 26, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(44, 28, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#86efac';
    ctx.beginPath();
    ctx.arc(28, 22, 8, 0, Math.PI * 2);
    ctx.fill();

    scene.textures.addCanvas('prop_tree', canvas);
  }

  // Fuente
  if (!scene.textures.exists('prop_fountain')) {
    const canvas = document.createElement('canvas');
    canvas.width = 76;
    canvas.height = 76;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
    ctx.beginPath();
    ctx.ellipse(38, 42, 36, 32, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(38, 38, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(38, 38, 34, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.arc(38, 36, 33, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(38, 38, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(38, 37, 25, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.arc(38, 38, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.arc(38, 36, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(38, 36, 3, 0, Math.PI * 2);
    ctx.fill();

    scene.textures.addCanvas('prop_fountain', canvas);
  }

  // Banco
  if (!scene.textures.exists('prop_bench')) {
    const canvas = document.createElement('canvas');
    canvas.width = 52;
    canvas.height = 28;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.22)';
    ctx.fillRect(4, 23, 44, 4);

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(6, 12, 4, 12);
    ctx.fillRect(42, 12, 4, 12);
    ctx.fillRect(4, 10, 44, 2);

    ctx.fillStyle = '#92400e';
    ctx.fillRect(4, 4, 44, 5);
    ctx.fillStyle = '#b45309';
    ctx.fillRect(4, 5, 44, 3);

    ctx.fillStyle = '#92400e';
    ctx.fillRect(4, 12, 44, 6);
    ctx.fillStyle = '#b45309';
    ctx.fillRect(4, 13, 44, 4);

    scene.textures.addCanvas('prop_bench', canvas);
  }

  // Farola
  if (!scene.textures.exists('prop_lamp')) {
    const canvas = document.createElement('canvas');
    canvas.width = 24;
    canvas.height = 60;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.22)';
    ctx.beginPath();
    ctx.ellipse(12, 57, 8, 3, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(10, 16, 4, 42);
    ctx.fillRect(7, 54, 10, 4);

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(6, 6, 12, 11);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(8, 8, 8, 8);
    ctx.fillStyle = '#fef9c3';
    ctx.fillRect(10, 10, 4, 4);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(5, 5, 14, 2);
    ctx.fillRect(11, 2, 2, 3);

    scene.textures.addCanvas('prop_lamp', canvas);
  }
}

// ============================================================================
// 4. JOYSTICK VIRTUAL TÁCTIL
// ============================================================================

function generateJoystickTextures(scene) {
  if (!scene.textures.exists('joystick_base')) {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
    ctx.beginPath();
    ctx.arc(50, 50, 46, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(16, 185, 129, 0.65)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(50, 50, 20, 0, Math.PI * 2);
    ctx.stroke();

    scene.textures.addCanvas('joystick_base', canvas);
  }

  if (!scene.textures.exists('joystick_thumb')) {
    const canvas = document.createElement('canvas');
    canvas.width = 48;
    canvas.height = 48;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(16, 185, 129, 0.85)';
    ctx.beginPath();
    ctx.arc(24, 24, 20, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.beginPath();
    ctx.arc(20, 20, 6, 0, Math.PI * 2);
    ctx.fill();

    scene.textures.addCanvas('joystick_thumb', canvas);
  }
}
