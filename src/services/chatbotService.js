import { GoogleGenerativeAI } from '@google/generative-ai';
import { productosDeliciasYCaprichos, infoTienda, buscarProductos, obtenerPorCategoria } from '../data/productos.js';

// Inicializar Gemini con variable de entorno
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('VITE_GEMINI_API_KEY no está definida en las variables de entorno');
}

const genAI = new GoogleGenerativeAI(apiKey);

class ChatbotService {
  constructor() {
    this.model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 1024,
      }
    });
    
    // Crear el prompt del sistema con información de la tienda
    this.systemPrompt = this.crearPromptSistema();
  }

  crearPromptSistema() {
    const productosTexto = this.formatearProductosParaPrompt();
    
    return `Eres un asistente virtual para "${infoTienda.nombre}", una ${infoTienda.descripcion}.

INFORMACIÓN DE LA TIENDA:
- Horarios: Lunes a Viernes ${infoTienda.horarios.lunesAViernes}, Sábados ${infoTienda.horarios.sabados}, Domingos ${infoTienda.horarios.domingos}
- Ubicación: ${infoTienda.ubicacion}
- Teléfono: ${infoTienda.telefono}
- Servicios: ${infoTienda.servicios.join(', ')}
- Métodos de pago: ${infoTienda.metodasPago.join(', ')}

POLÍTICAS:
- ${infoTienda.politicas.delivery}
- ${infoTienda.politicas.cancelaciones}
- ${infoTienda.politicas.personalizados}

CATÁLOGO DE PRODUCTOS:
${productosTexto}

INSTRUCCIONES:
1. Sé amable, profesional y entusiasta sobre nuestros productos
2. Ayuda a los clientes a encontrar productos que se adapten a sus gustos y presupuesto
3. Proporciona información detallada sobre ingredientes, precios y disponibilidad
4. Sugiere combos o productos complementarios cuando sea apropiado
5. Informa sobre tiempos de preparación y políticas de pedidos especiales
6. Si no tienes información específica, sé honesto y ofrece contactar al personal
7. Mantén un tono conversacional pero informativo
8. Siempre muestra los precios en pesos colombianos (COP)
9. Si te preguntan por productos que no tenemos, sugiere alternativas similares de nuestro catálogo

Responde siempre en español y como si fueras parte del equipo de Delicias y Caprichos. ¡Haz que cada cliente se sienta especial!`;
  }

  formatearProductosParaPrompt() {
    let texto = '';
    
    // Dulces y Postres
    texto += '\n--- DULCES Y POSTRES ---\n';
    productosDeliciasYCaprichos.dulces.forEach(producto => {
      texto += `• ${producto.nombre} - $${producto.precio.toLocaleString()} COP\n`;
      texto += `  ${producto.descripcion}\n`;
      if (producto.tamaños) texto += `  Tamaños: ${producto.tamaños.join(', ')}\n`;
      if (producto.sabores) texto += `  Sabores: ${producto.sabores.join(', ')}\n`;
      if (producto.ingredientes) texto += `  Ingredientes: ${producto.ingredientes.join(', ')}\n`;
      texto += '\n';
    });

    // Bebidas
    texto += '\n--- BEBIDAS ---\n';
    productosDeliciasYCaprichos.bebidas.forEach(producto => {
      texto += `• ${producto.nombre} - $${producto.precio.toLocaleString()} COP\n`;
      texto += `  ${producto.descripcion}\n`;
      if (producto.tamaños) texto += `  Tamaños: ${producto.tamaños.join(', ')}\n`;
      if (producto.opciones) texto += `  Opciones: ${producto.opciones.join(', ')}\n`;
      if (producto.variedades) texto += `  Variedades: ${producto.variedades.join(', ')}\n`;
      if (producto.extras) texto += `  Extras: ${producto.extras.join(', ')}\n`;
      texto += '\n';
    });

    // Panadería y Salados
    texto += '\n--- PANADERÍA Y SALADOS ---\n';
    productosDeliciasYCaprichos.panaderia.forEach(producto => {
      texto += `• ${producto.nombre} - $${producto.precio.toLocaleString()} COP\n`;
      texto += `  ${producto.descripcion}\n`;
      if (producto.variedades) texto += `  Variedades: ${producto.variedades.join(', ')}\n`;
      if (producto.opciones) texto += `  Opciones: ${producto.opciones.join(', ')}\n`;
      if (producto.rellenos) texto += `  Rellenos: ${producto.rellenos.join(', ')}\n`;
      if (producto.tamaños) texto += `  Tamaños: ${producto.tamaños.join(', ')}\n`;
      if (producto.unidad) texto += `  Precio: ${producto.unidad}\n`;
      texto += '\n';
    });

    // Productos Especiales
    texto += '\n--- PRODUCTOS ESPECIALES ---\n';
    productosDeliciasYCaprichos.especiales.forEach(producto => {
      texto += `• ${producto.nombre} - $${producto.precio.toLocaleString()} COP\n`;
      texto += `  ${producto.descripcion}\n`;
      if (producto.cantidades) texto += `  Cantidades: ${producto.cantidades.join(', ')} unidades\n`;
      if (producto.rellenos) texto += `  Rellenos: ${producto.rellenos.join(', ')}\n`;
      if (producto.opciones) texto += `  Ocasiones: ${producto.opciones.join(', ')}\n`;
      if (producto.nota) texto += `  IMPORTANTE: ${producto.nota}\n`;
      texto += '\n';
    });

    return texto;
  }

  async enviarMensaje(mensaje, historialChat = []) {
    try {
      console.log('Enviando mensaje a Gemini:', mensaje);
      
      // Validar la API key
      if (!genAI) {
        throw new Error('API key no configurada');
      }

      // Crear el historial de conversación para mantener contexto
      const historialFormateado = historialChat.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      // Iniciar chat con el historial
      const chat = this.model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: this.systemPrompt }]
          },
          {
            role: 'model',
            parts: [{ text: '¡Hola! Bienvenido a Delicias y Caprichos. Soy tu asistente virtual y estoy aquí para ayudarte a descubrir nuestros deliciosos productos. ¿En qué puedo ayudarte hoy? ¿Te interesa algún postre en particular, una bebida especial, o quizás algo para una ocasión especial?' }]
          },
          ...historialFormateado
        ]
      });

      console.log('Enviando mensaje al modelo...');
      const result = await chat.sendMessage(mensaje);
      const response = await result.response;
      const texto = response.text();
      
      console.log('Respuesta recibida:', texto);
      
      return {
        success: true,
        message: texto,
        timestamp: new Date()
      };
    } catch (error) {
      console.error('Error detallado al comunicarse con Gemini:', error);
      
      // Intentar respuesta local inteligente
      const respuestaLocal = this.generarRespuestaLocal(mensaje);
      if (respuestaLocal) {
        return {
          success: true,
          message: respuestaLocal,
          timestamp: new Date(),
          isLocal: true
        };
      }
      
      // Respuesta de fallback
      return {
        success: false,
        message: `Lo siento, tengo problemas técnicos en este momento. 

Mientras tanto, puedo ayudarte con información básica:

🍰 **Nuestros productos principales:**
- Torta de Chocolate Premium: $45.000
- Cheesecake de Frutos Rojos: $38.000
- Café Especial de la Casa: $8.500
- Macarons Franceses: $3.500 c/u

📞 **Contacto directo:** ${infoTienda.telefono}
📍 **Ubicación:** ${infoTienda.ubicacion}

¿Te interesa algún producto en particular?`,
        timestamp: new Date(),
        error: error.message
      };
    }
  }

  // Función para generar respuestas locales básicas
  generarRespuestaLocal(mensaje) {
    const mensajeLower = mensaje.toLowerCase();
    
    // Preguntas sobre horarios
    if (mensajeLower.includes('horario') || mensajeLower.includes('hora') || mensajeLower.includes('abierto')) {
      return `🕐 **Nuestros horarios son:**

📅 **Lunes a Viernes:** ${infoTienda.horarios.lunesAViernes}
📅 **Sábados:** ${infoTienda.horarios.sabados}  
📅 **Domingos:** ${infoTienda.horarios.domingos}

¡Te esperamos! 😊`;
    }
    
    // Preguntas sobre ubicación
    if (mensajeLower.includes('ubicaci') || mensajeLower.includes('direcci') || mensajeLower.includes('donde')) {
      return `📍 **Nuestra ubicación:**

${infoTienda.ubicacion}
📞 **Teléfono:** ${infoTienda.telefono}

¡Fácil de encontrar y con estacionamiento disponible! 🚗`;
    }
    
    // Preguntas sobre delivery
    if (mensajeLower.includes('delivery') || mensajeLower.includes('domicilio') || mensajeLower.includes('envio')) {
      return `🚚 **Servicio de Delivery:**

✅ ${infoTienda.politicas.delivery}
📞 **Para pedidos:** ${infoTienda.telefono}

**Métodos de pago:** ${infoTienda.metodasPago.join(', ')}

¡Llevamos nuestros deliciosos productos hasta tu puerta! 🏠`;
    }
    
    // Preguntas sobre productos
    if (mensajeLower.includes('producto') || mensajeLower.includes('menu') || mensajeLower.includes('que tienen')) {
      return `🍰 **Nuestros productos destacados:**

**POSTRES:**
• Torta de Chocolate Premium - $45.000
• Cheesecake de Frutos Rojos - $38.000
• Tiramisú Tradicional - $12.000

**BEBIDAS:**
• Café Especial de la Casa - $8.500
• Chocolate Caliente Artesanal - $9.500

**ESPECIALES:**
• Macarons Franceses - $3.500 c/u
• Tortas Personalizadas - desde $85.000

¿Te interesa algo en particular? 😋`;
    }
    
    return null;
  }

  // Método para obtener una respuesta de bienvenida
  obtenerMensajeBienvenida() {
    return {
      success: true,
      message: `¡Hola! 👋 Bienvenido a **${infoTienda.nombre}** ✨

Soy tu asistente virtual y estoy aquí para ayudarte a descubrir nuestros deliciosos productos artesanales. 

🍰 **Especialidades:**
• Postres y tortas premium
• Café de especialidad
• Panadería artesanal
• Productos personalizados

¿En qué puedo ayudarte hoy? Puedes preguntarme sobre:
• Nuestro menú y precios
• Ingredientes y opciones especiales
• Pedidos personalizados
• Horarios y ubicación
• ¡O cualquier cosa que te haga feliz! 😊`,
      timestamp: new Date()
    };
  }

  // Método para buscar productos específicos
  buscarProductoEspecifico(termino) {
    const resultados = buscarProductos(termino);
    if (resultados.length > 0) {
      let respuesta = `Encontré estos productos para "${termino}":\n\n`;
      resultados.forEach(producto => {
        respuesta += `🍴 **${producto.nombre}** - $${producto.precio.toLocaleString()} COP\n`;
        respuesta += `   ${producto.descripcion}\n\n`;
      });
      return respuesta;
    }
    return null;
  }

  // Método para probar la conexión con Gemini
  async probarConexion() {
    try {
      console.log('Probando conexión con Gemini...');
      const result = await this.model.generateContent('Hola, responde solo con "Conexión exitosa"');
      const response = await result.response;
      console.log('Conexión exitosa:', response.text());
      return true;
    } catch (error) {
      console.error('Error de conexión:', error);
      return false;
    }
  }
}

export default new ChatbotService();
