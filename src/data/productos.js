export const productosDeliciasYCaprichos = {
  // DULCES Y POSTRES
  dulces: [
    {
      id: 1,
      nombre: "Torta de Chocolate Premium",
      descripcion: "Deliciosa torta de chocolate con relleno de ganache y cobertura de chocolate belga",
      precio: 45000,
      categoria: "Postres",
      disponible: true,
      tamaños: ["Personal", "Mediana", "Grande"],
      ingredientes: ["chocolate belga", "huevos frescos", "mantequilla", "azúcar", "harina"]
    },
    {
      id: 2,
      nombre: "Cheesecake de Frutos Rojos",
      descripcion: "Cremoso cheesecake con base de galleta y topping de frutos rojos frescos",
      precio: 38000,
      categoria: "Postres",
      disponible: true,
      tamaños: ["Personal", "Mediana"],
      ingredientes: ["queso crema", "frutos rojos", "galletas", "azúcar"]
    },
    {
      id: 3,
      nombre: "Macarons Franceses",
      descripcion: "Delicados macarons en variedad de sabores: vainilla, chocolate, fresa, pistacho",
      precio: 3500,
      categoria: "Dulces",
      disponible: true,
      unidad: "por unidad",
      sabores: ["vainilla", "chocolate", "fresa", "pistacho", "lavanda"]
    },
    {
      id: 4,
      nombre: "Tiramisú Tradicional",
      descripcion: "Auténtico tiramisú italiano con café espresso y mascarpone",
      precio: 12000,
      categoria: "Postres",
      disponible: true,
      unidad: "porción individual"
    }
  ],

  // BEBIDAS
  bebidas: [
    {
      id: 5,
      nombre: "Café Especial de la Casa",
      descripcion: "Mezcla especial de granos colombianos tostados artesanalmente",
      precio: 8500,
      categoria: "Bebidas Calientes",
      disponible: true,
      tamaños: ["Regular", "Grande"],
      opciones: ["espresso", "americano", "cappuccino", "latte"]
    },
    {
      id: 6,
      nombre: "Chocolate Caliente Artesanal",
      descripcion: "Chocolate caliente preparado con cacao premium y leche fresca",
      precio: 9500,
      categoria: "Bebidas Calientes",
      disponible: true,
      tamaños: ["Regular", "Grande"],
      extras: ["marshmallows", "crema batida", "canela"]
    },
    {
      id: 7,
      nombre: "Smoothie de Frutas Tropicales",
      descripcion: "Refrescante smoothie con mango, piña, maracuyá y yogurt natural",
      precio: 11000,
      categoria: "Bebidas Frías",
      disponible: true,
      tamaños: ["Regular", "Grande"]
    },
    {
      id: 8,
      nombre: "Té Premium Selection",
      descripcion: "Variedad de tés premium: Earl Grey, Jasmine, Chamomile, Green Tea",
      precio: 7000,
      categoria: "Bebidas Calientes",
      disponible: true,
      variedades: ["Earl Grey", "Jasmine", "Chamomile", "Green Tea", "Oolong"]
    }
  ],

  // PANADERÍA Y SALADOS
  panaderia: [
    {
      id: 9,
      nombre: "Croissant Artesanal",
      descripcion: "Croissant de mantequilla horneado fresco diariamente",
      precio: 4500,
      categoria: "Panadería",
      disponible: true,
      variedades: ["simple", "almendras", "chocolate", "jamón y queso"]
    },
    {
      id: 10,
      nombre: "Sandwich Gourmet",
      descripcion: "Sandwich en pan artesanal con ingredientes premium",
      precio: 15000,
      categoria: "Salados",
      disponible: true,
      opciones: ["pollo y aguacate", "salmón ahumado", "vegetariano", "roast beef"]
    },
    {
      id: 11,
      nombre: "Empanadas Caseras",
      descripcion: "Empanadas horneadas con masa casera y rellenos tradicionales",
      precio: 3200,
      categoria: "Salados",
      disponible: true,
      unidad: "por unidad",
      rellenos: ["carne", "pollo", "queso", "vegetariana", "atún"]
    },
    {
      id: 12,
      nombre: "Quiche Lorraine",
      descripcion: "Tradicional quiche francesa con tocino, queso y cebolla",
      precio: 18000,
      categoria: "Salados",
      disponible: true,
      tamaños: ["Individual", "Familiar"]
    }
  ],

  // PRODUCTOS ESPECIALES
  especiales: [
    {
      id: 13,
      nombre: "Caja de Bombones Artesanales",
      descripcion: "Selección de 12 bombones premium con diferentes rellenos",
      precio: 32000,
      categoria: "Especiales",
      disponible: true,
      cantidades: [6, 12, 24],
      rellenos: ["licor", "frutas", "nuts", "caramelo", "ganache"]
    },
    {
      id: 14,
      nombre: "Torta Personalizada",
      descripcion: "Torta diseñada especialmente para ocasiones especiales",
      precio: 85000,
      categoria: "Especiales",
      disponible: true,
      nota: "Requiere pedido con 48 horas de anticipación",
      opciones: ["cumpleaños", "bodas", "graduaciones", "corporativos"]
    }
  ]
};

// Información adicional de la tienda
export const infoTienda = {
  nombre: "Delicias y Caprichos",
  descripcion: "Boutique gastronómica especializada en postres artesanales, café de especialidad y productos gourmet",
  horarios: {
    lunesAViernes: "8:00 AM - 8:00 PM",
    sabados: "9:00 AM - 9:00 PM",
    domingos: "10:00 AM - 6:00 PM"
  },
  ubicacion: "Centro Comercial Plaza Mayor, Local 125",
  telefono: "+57 123 456 7890",
  servicios: [
    "Pedidos para llevar",
    "Servicio en mesa",
    "Pedidos personalizados",
    "Delivery en zona metropolitana",
    "Catering para eventos"
  ],
  metodasPago: ["Efectivo", "Tarjeta de crédito", "Tarjeta débito", "Transferencia", "Nequi", "Daviplata"],
  politicas: {
    delivery: "Delivery gratuito en compras superiores a $50.000",
    cancelaciones: "Cancelaciones hasta 2 horas antes del pedido",
    personalizados: "Productos personalizados requieren 48 horas de anticipación"
  }
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
