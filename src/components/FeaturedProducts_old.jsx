import { productosDeliciasYCaprichos } from '../data/productos'
import './FeaturedProducts.css'

const FeaturedProducts = ({ onNavigate }) => {
  // Seleccionar productos destacados del negocio peruano
  const allProducts = [
    ...productosDeliciasYCaprichos.dulces,
    ...productosDeliciasYCaprichos.especiales
  ];
  
  const products = [
    {
      ...allProducts.find(p => p.id === 1),
      image: "🧁",
      badge: "Más Pedido"
    },
    {
      ...allProducts.find(p => p.id === 2),
      image: "🎂",
      badge: "Personalizado"
    },
    {
      ...allProducts.find(p => p.id === 4),
      image: "�",
      badge: "Pack Especial"
    },
    {
      ...allProducts.find(p => p.id === 14),
      image: "✨",
      badge: "Premium"
    }
  ].filter(Boolean);

  const formatPrice = (price) => {
    return `S/ ${price.toFixed(2)}`;
  }

  return (
    <section className="featured-products">
      <div className="featured-container">
        <div className="featured-header">
          <h2 className="featured-title">
            Nuestros Productos Más Populares
          </h2>
          <p className="featured-subtitle">
            Descubre los sabores auténticos de nuestra repostería artesanal peruana.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id} className={`product-card product-card-${index + 1}`}>
              <div className="product-badge">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="product-image">
                <span className="product-emoji">{product.image}</span>
                <div className="product-overlay">
                  <button 
                    className="product-btn"
                    onClick={() => onNavigate && onNavigate('products')}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>

              <div className="product-content">
                <div className="product-tag">{product.badge}</div>
                <h3 className="product-name">{product.nombre}</h3>
                <p className="product-description">{product.descripcion}</p>
                <div className="product-footer">
                  <span className="product-price">{formatPrice(product.precio)}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => onNavigate && onNavigate('chat')}
                  >
                    Consultar �
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="featured-actions">
          <button 
            className="btn btn-outline"
            onClick={() => onNavigate && onNavigate('products')}
          >
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
