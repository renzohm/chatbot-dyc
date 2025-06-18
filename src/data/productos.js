export const productosDeliciasYCaprichos = {
  // DULCES Y POSTRES
  dulces: [
    {
      id: 1,
      nombre: "Cupcakes Clásicos de Vainilla",
      descripcion: "Deliciosos cupcakes artesanales elaborados con ingredientes frescos y naturales. Perfectos para cumpleaños, celebraciones o simplemente para disfrutar en cualquier momento. Decorados con crema de mantequilla y detalles únicos.",
      precio: 5.50,
      categoria: "Dulces",
      disponible: true,
      unidad: "por unidad",
      minimoCompra: 4,
      anticipacion: "24 horas",
      impuestos: "18% IGV incluido",
      delivery: {
        precio: 8,
        zona: "Lima Metropolitana",
        gratis: "compras mayores a S/ 60.00"
      },
      ingredientes: ["harina de trigo", "azúcar rubia", "huevos frescos", "mantequilla", "esencia de vainilla", "polvo de hornear"],
      sabores: ["vainilla", "chocolate", "fresa", "limón"]
    },
    {
      id: 2,
      nombre: "Torta Tres Leches Peruana",
      descripcion: "Auténtica torta tres leches al estilo peruano, suave y húmeda, bañada en una mezcla de leche evaporada, leche condensada y crema de leche. Coronada con merengue y canela molida. Un clásico de la repostería peruana.",
      precio: 85.00,
      categoria: "Postres",
      disponible: true,
      porciones: "10 porciones (base)",
      tamaños: ["10 porciones", "15 porciones", "20 porciones"],
      anticipacion: "48 horas",
      personalizacion: "incluida (decoración especial)",
      impuestos: "18% IGV incluido",
      delivery: {
        precio: 10,
        zona: "Lima Metropolitana"
      },
      ingredientes: ["bizcocho de vainilla", "leche evaporada", "leche condensada", "crema de leche", "merengue", "canela"]
    },
    {
      id: 3,
      nombre: "Mini Tartas de Lúcuma",
      descripcion: "Exquisitas mini tartas elaboradas con lúcuma fresca, la fruta nacional del Perú. Base de masa quebrada artesanal y relleno cremoso de lúcuma. Perfectas como postre individual o para compartir.",
      precio: 12.00,
      categoria: "Postres",
      disponible: true,
      unidad: "por unidad",
      minimoCompra: 3,
      sabores: ["lúcuma", "chirimoya", "maracuyá"],
      impuestos: "18% IGV incluido",
      delivery: {
        precio: 8,
        zona: "Lima Metropolitana"
      },
      ingredientes: ["masa quebrada", "pulpa de lúcuma", "crema pastelera", "azúcar", "mantequilla"]
    },
    {
      id: 4,
      nombre: "Brownies de Chocolate con Pecanas (Pack x6)",
      descripcion: "Brownies artesanales con chocolate peruano y pecanas crujientes. Textura húmeda y sabor intenso. Pack de 6 unidades presentado en caja ecológica, perfecto para regalar o compartir en familia.",
      precio: 24.00,
      categoria: "Dulces",
      disponible: true,
      unidad: "pack de 6 unidades",
      minimoCompra: 1,
      variedades: ["clásico", "con pecanas", "con coco"],
      empaque: "caja ecológica con lazo (ideal para regalo)",
      impuestos: "18% IGV incluido",
      delivery: {
        precio: 8,
        zona: "Lima Metropolitana"
      },
      ingredientes: ["chocolate peruano", "harina de trigo", "huevos frescos", "mantequilla", "azúcar rubia", "pecanas"]
    },
    {
      id: 5,
      nombre: "Alfajores Limeños",
      descripcion: "Tradicionales alfajores limeños con masa suave, relleno de manjar blanco casero y coco rallado. Elaborados siguiendo la receta tradicional peruana, son perfectos para acompañar el té o café.",
      precio: 6.00,
      categoria: "Dulces",
      disponible: true,
      unidad: "por unidad",
      minimoCompra: 6,
      variedades: ["clásico con coco", "chocolate", "maracuyá"],
      empaque: "envueltos individualmente",
      impuestos: "18% IGV incluido",
      delivery: {
        precio: 8,
        zona: "Lima Metropolitana"
      },
      ingredientes: ["harina de trigo", "manteca", "manjar blanco", "coco rallado", "azúcar impalpable"]
    }
  ],

  // BEBIDAS
  bebidas: [
    {
      id: 6,
      nombre: "Café Peruano de Especialidad",
      descripcion: "Café 100% peruano de granos selectos de las mejores zonas cafetaleras del país. Tostado artesanalmente para resaltar sus notas frutales y chocolateadas. Disponible en diferentes preparaciones.",
      precio: 8.50,
      categoria: "Bebidas Calientes",
      disponible: true,
      tamaños: ["Regular (240ml)", "Grande (350ml)"],
      opciones: ["americano", "espresso", "cappuccino", "latte"],
      origen: "Chanchamayo, Junín",
      impuestos: "18% IGV incluido"
    },
    {
      id: 7,
      nombre: "Chocolate Caliente con Canela",
      descripcion: "Cremoso chocolate caliente preparado con cacao peruano premium y un toque de canela. Servido con crema batida y una pizca de canela molida. Una delicia tradicional peruana.",
      precio: 12.00,
      categoria: "Bebidas Calientes",
      disponible: true,
      tamaños: ["Regular (240ml)", "Grande (350ml)"],
      extras: ["marshmallows", "crema batida extra", "canela adicional", "miel de abeja"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 8,
      nombre: "Refresco de Chicha Morada",
      descripcion: "Refrescante bebida tradicional peruana elaborada con maíz morado, piña, manzana, canela y clavo. Endulzada naturalmente y servida bien fría. Un sabor auténtico del Perú.",
      precio: 7.50,
      categoria: "Bebidas Frías",
      disponible: true,
      tamaños: ["Regular (300ml)", "Grande (500ml)"],
      ingredientes: ["maíz morado", "piña", "manzana", "canela", "clavo de olor"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 9,
      nombre: "Emoliente Tradicional",
      descripcion: "Bebida caliente tradicional peruana elaborada con hierbas medicinales: linaza, cola de caballo, boldo y otras hierbas. Perfecta para las noches frías limeñas. Endulzada con miel de abeja.",
      precio: 6.00,
      categoria: "Bebidas Calientes",
      disponible: true,
      tamaños: ["Regular (240ml)"],
      beneficios: ["digestivo", "relajante", "natural"],
      ingredientes: ["linaza", "cola de caballo", "boldo", "miel de abeja"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 10,
      nombre: "Jugo de Lúcuma Natural",
      descripcion: "Jugo natural preparado con pulpa de lúcuma fresca, la fruta dorada del Perú. Rico en vitaminas y con un sabor único y cremoso. Servido bien frío y sin preservantes.",
      precio: 9.00,
      categoria: "Bebidas Frías",
      disponible: true,
      tamaños: ["Regular (300ml)", "Grande (500ml)"],
      beneficios: ["rico en vitaminas", "antioxidante", "energético natural"],
      impuestos: "18% IGV incluido"
    }
  ],

  // PANADERÍA Y SALADOS
  panaderia: [
    {
      id: 11,
      nombre: "Pan de Yema Artesanal",
      descripcion: "Tradicional pan de yema peruano, suave y ligeramente dulce. Elaborado con mantequilla, huevos frescos y un toque de ajonjolí. Perfecto para el desayuno o merienda.",
      precio: 3.50,
      categoria: "Panadería",
      disponible: true,
      unidad: "por unidad",
      variedades: ["clásico", "con ajonjolí", "integral"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 12,
      nombre: "Empanadas de Ají de Gallina",
      descripcion: "Deliciosas empanadas horneadas rellenas de ají de gallina casero. Masa crujiente y relleno cremoso con pollo deshilachado, ají amarillo y especias peruanas. Un clásico de la gastronomía peruana.",
      precio: 8.50,
      categoria: "Salados",
      disponible: true,
      unidad: "por unidad",
      minimoCompra: 2,
      rellenos: ["ají de gallina", "lomo saltado", "queso y espinaca", "pollo a la brasa"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 13,
      nombre: "Sandwich de Chicharrón",
      descripcion: "Jugoso sandwich de chicharrón de cerdo con camote frito, salsa criolla y ají en pan francés artesanal. Un sabor tradicional limeño que no puedes perderte.",
      precio: 15.00,
      categoria: "Salados",
      disponible: true,
      opciones: ["chicharrón clásico", "chicharrón con queso", "vegetariano de quinoa"],
      acompañamientos: ["camote frito", "salsa criolla", "ají casero"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 14,
      nombre: "Tequeños Peruanos",
      descripcion: "Crujientes tequeños rellenos de queso fresco peruano, envueltos en masa wantán y fritos hasta dorar. Perfectos como aperitivo o para compartir. Servidos con salsas artesanales.",
      precio: 12.00,
      categoria: "Salados",
      disponible: true,
      unidad: "pack de 8 unidades",
      rellenos: ["queso fresco", "queso y ají", "queso y aceituna"],
      salsas: ["ají amarillo", "huancaína", "golf"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 15,
      nombre: "Causa Rellena Individual",
      descripcion: "Tradicional causa limeña en porción individual. Papa amarilla sazonada con ají amarillo, limón y aceite, rellena de pollo, atún o palta. Un clásico de la cocina peruana.",
      precio: 10.00,
      categoria: "Salados",
      disponible: true,
      unidad: "por unidad",
      rellenos: ["pollo", "atún", "palta", "camarones"],
      decoración: "con huevo duro, aceituna y perejil",
      impuestos: "18% IGV incluido"
    }
  ],

  // PRODUCTOS ESPECIALES
  especiales: [
    {
      id: 16,
      nombre: "Caja de Chocolates Peruanos Premium",
      descripcion: "Selección exclusiva de 12 chocolates artesanales elaborados con cacao peruano fino de aroma. Incluye variedades con rellenos de frutas nativas como lúcuma, maracuyá y aguaymanto.",
      precio: 95.00,
      categoria: "Especiales",
      disponible: true,
      cantidades: [6, 12, 24],
      rellenos: ["lúcuma", "maracuyá", "aguaymanto", "cacao puro", "quinoa pop", "café"],
      presentacion: "caja elegante con lazo dorado",
      impuestos: "18% IGV incluido"
    },
    {
      id: 17,
      nombre: "Torta Temática Personalizada",
      descripcion: "Torta completamente personalizada para ocasiones especiales. Diseños únicos con decoraciones en fondant, cremas especiales y sabores a elección. Ideal para bodas, quinceañeros, cumpleaños temáticos.",
      precio: 180.00,
      categoria: "Especiales",
      disponible: true,
      nota: "Requiere pedido con 72 horas de anticipación",
      opciones: ["cumpleaños temáticos", "bodas", "quinceañeros", "bautizos", "graduaciones"],
      sabores: ["vainilla", "chocolate", "tres leches", "lúcuma", "maracuyá"],
      decoraciones: ["fondant", "cremas especiales", "flores comestibles", "figuras personalizadas"],
      impuestos: "18% IGV incluido"
    },
    {
      id: 18,
      nombre: "Box Dulce Peruano",
      descripcion: "Caja regalo con lo mejor de la repostería peruana: alfajores, suspiro limeño, mazamorra morada, turrón de Doña Pepa y otros dulces tradicionales. Perfecto para regalar o conocer los sabores del Perú.",
      precio: 65.00,
      categoria: "Especiales",
      disponible: true,
      contenido: ["4 alfajores", "suspiro limeño", "mazamorra morada", "turrón de Doña Pepa", "picarones mini", "dulce de leche"],
      presentacion: "caja decorativa con información de cada dulce",
      duración: "5 días refrigerado",
      impuestos: "18% IGV incluido"
    },
    {
      id: 19,
      nombre: "Mesa Dulce para Eventos",
      descripcion: "Servicio completo de mesa dulce para eventos especiales. Incluye variedad de postres, decoración temática y montaje. Ideal para bodas, cumpleaños, baby showers y celebraciones corporativas.",
      precio: 25.00,
      categoria: "Especiales",
      disponible: true,
      unidad: "por persona (mínimo 20 personas)",
      incluye: ["variedad de postres", "decoración temática", "montaje", "utensilios", "personal de servicio"],
      anticipacion: "1 semana",
      personalizacion: "colores, temática y menú a medida",
      impuestos: "18% IGV incluido"
    }
  ]
};

// Información adicional de la tienda
export const infoTienda = {
  nombre: "Delicias y Caprichos",
  descripcion: "Repostería artesanal peruana especializada en dulces tradicionales, postres gourmet y productos de alta calidad con sabores auténticos del Perú",
  horarios: {
    lunesAViernes: "8:00 AM - 9:00 PM",
    sabados: "9:00 AM - 10:00 PM",
    domingos: "10:00 AM - 8:00 PM",
    feriados: "10:00 AM - 6:00 PM"
  },
  ubicacion: {
    direccion: "Av. Larco 1234, Miraflores, Lima",
    referencias: "A 2 cuadras del Parque Kennedy",
    distrito: "Miraflores"
  },
  contacto: {
    telefono: "+51 1 234 5678",
    whatsapp: "+51 934 567 890",
    email: "pedidos@deliciasycaprichos.pe",
    instagram: "@deliciasycaprichos_peru",
    facebook: "Delicias y Caprichos Perú"
  },
  servicios: [
    "Pedidos para llevar",
    "Servicio en mesa",
    "Pedidos personalizados",
    "Delivery en Lima Metropolitana",
    "Catering para eventos",
    "Mesa dulce para celebraciones",
    "Talleres de repostería",
    "Servicio corporativo"
  ],
  metodasPago: [
    "Efectivo", 
    "Tarjeta de crédito/débito", 
    "Transferencia bancaria", 
    "Yape", 
    "Plin", 
    "PagoEfectivo"
  ],
  politicas: {
    delivery: "Delivery desde S/ 8.00 en Lima Metropolitana. Delivery GRATUITO en compras superiores a S/ 60.00",
    cancelaciones: "Cancelaciones hasta 4 horas antes del pedido para productos simples, 24 horas para productos personalizados",
    personalizados: "Productos personalizados requieren 24-72 horas de anticipación según complejidad",
    minimoCompra: "Algunos productos tienen mínimo de compra para garantizar frescura",
    horarioDelivery: "Delivery de 9:00 AM a 8:00 PM de lunes a domingo",
    zonaDelivery: "Cobertura: Miraflores, San Isidro, Barranco, Surco, La Molina, San Borja"
  },
  especialidades: [
    "Torta tres leches peruana",
    "Alfajores limeños tradicionales",
    "Chocolates con cacao peruano",
    "Postres con frutas nativas",
    "Dulces tradicionales peruanos",
    "Repostería para eventos especiales"
  ]
};

// Función helper para buscar productos
export const buscarProductos = (termino) => {
  const todosLosProductos = [
    ...productosDeliciasYCaprichos.dulces,
    ...productosDeliciasYCaprichos.bebidas,
    ...productosDeliciasYCaprichos.panaderia,
    ...productosDeliciasYCaprichos.especiales
  ];
  
  return todosLosProductos.filter(producto => 
    producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(termino.toLowerCase())
  );
};

// Función para obtener productos por categoría
export const obtenerPorCategoria = (categoria) => {
  switch(categoria.toLowerCase()) {
    case 'dulces':
    case 'postres':
      return productosDeliciasYCaprichos.dulces;
    case 'bebidas':
      return productosDeliciasYCaprichos.bebidas;
    case 'panaderia':
    case 'salados':
      return productosDeliciasYCaprichos.panaderia;
    case 'especiales':
      return productosDeliciasYCaprichos.especiales;
    default:
      return [];
  }
};

// Función para obtener un producto por ID
export const obtenerProductoPorId = (id) => {
  const allProducts = [
    ...productosDeliciasYCaprichos.dulces,
    ...productosDeliciasYCaprichos.bebidas,
    ...productosDeliciasYCaprichos.panaderia,
    ...productosDeliciasYCaprichos.especiales
  ];
  return allProducts.find(product => product.id === parseInt(id));
};
