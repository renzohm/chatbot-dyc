# 🍰 Chatbot Delicias y Caprichos

Un chatbot inteligente para la boutique gastronómica "Delicias y Caprichos", creado con React y Google Gemini Flash 2.5.

## ✨ Características

- **Asistente Virtual Inteligente**: Powered by Google Gemini Flash 2.5
- **Catálogo Completo**: Postres artesanales, café de especialidad, panadería y productos especiales
- **Interfaz Moderna**: Diseño responsive y amigable para móviles
- **Chat en Tiempo Real**: Conversaciones naturales sobre productos, precios y servicios
- **Preguntas Rápidas**: Accesos directos a consultas frecuentes

## 🚀 Demo en Vivo

Visita la demo: [https://renzomac.github.io/chatbot-dyc](https://renzomac.github.io/chatbot-dyc)

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19 + Vite
- **IA**: Google Gemini Flash 2.5 API
- **Estilos**: CSS3 con variables personalizadas
- **Deploy**: GitHub Pages
- **Herramientas**: ESLint, gh-pages

## 📋 Productos Disponibles

### 🧁 Dulces y Postres
- Torta de Chocolate Premium
- Cheesecake de Frutos Rojos
- Macarons Franceses
- Tiramisú Tradicional

### ☕ Bebidas
- Café Especial de la Casa
- Chocolate Caliente Artesanal
- Smoothie de Frutas Tropicales
- Té Premium Selection

### 🥐 Panadería y Salados
- Croissant Artesanal
- Sandwich Gourmet
- Empanadas Caseras
- Quiche Lorraine

### 🎂 Productos Especiales
- Caja de Bombones Artesanales
- Tortas Personalizadas (48h anticipación)

## 🏪 Información de la Tienda

- **Horarios**: Lun-Vie 8:00-20:00, Sáb 9:00-21:00, Dom 10:00-18:00
- **Ubicación**: Centro Comercial Plaza Mayor, Local 125
- **Servicios**: Delivery, Catering, Pedidos personalizados
- **Delivery gratuito**: En compras superiores a $50.000

## 🔧 Instalación y Desarrollo

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/renzomac/chatbot-dyc.git
cd chatbot-dyc

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build para producción
npm run preview    # Preview del build
npm run deploy     # Deploy a GitHub Pages
npm run lint       # Linter ESLint
```

## 🚀 Deploy a GitHub Pages

### Método Automático
```bash
npm run deploy
```

### Método Manual
1. Hacer build del proyecto:
   ```bash
   npm run build
   ```

2. Configurar GitHub Pages:
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages`

## 🔑 Configuración de API

El proyecto utiliza la API de Google Gemini. La clave API está incluida en el código para este MVP de demostración.

**Para producción**, debes:
1. Obtener tu propia API key de [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Reemplazar la clave en `src/services/chatbotService.js`
3. Considerar usar variables de entorno para mayor seguridad

## 💬 Funcionalidades del Chatbot

### Capacidades
- ✅ Consultas sobre productos y precios
- ✅ Información de horarios y ubicación
- ✅ Detalles sobre ingredientes y opciones
- ✅ Preguntas sobre servicios (delivery, catering)
- ✅ Sugerencias personalizadas
- ✅ Información sobre pedidos especiales

### Ejemplos de Preguntas
- "¿Qué postres tienen disponibles?"
- "¿Cuánto cuesta la torta de chocolate?"
- "¿Hacen delivery?"
- "¿Tienen opciones sin gluten?"
- "¿Cuáles son sus horarios?"
- "Quiero una torta personalizada para cumpleaños"

## 📱 Responsive Design

El chatbot está optimizado para:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (320px - 767px)

## 🎨 Personalización

### Colores Principales
```css
--primary-color: #ff6b6b;    /* Naranja-rojizo */
--primary-dark: #ee5a24;     /* Naranja oscuro */
--text-primary: #2c3e50;     /* Gris oscuro */
--background: #f8f9fa;       /* Gris claro */
```

### Estructura de Archivos
```
src/
├── components/
│   ├── ChatBot.jsx         # Componente principal del chat
│   ├── ChatMessage.jsx     # Componente de mensajes
│   ├── ChatInput.jsx       # Componente de entrada
│   └── *.css              # Estilos de componentes
├── data/
│   └── productos.js        # Catálogo de productos
├── services/
│   └── chatbotService.js   # Servicio de integración con Gemini
└── App.jsx                 # Componente raíz
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Proyecto**: Chatbot Delicias y Caprichos
- **Tecnología**: React + Google Gemini
- **Tipo**: MVP para demostración

---

⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
