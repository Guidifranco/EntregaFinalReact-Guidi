import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = ({ removeId, cart, clearCart, total }) => {
  return (
    <>
      <div className="cart">
        {cart.length === 0 ? ( // Condición para carrito vacío
          <div className="vacio">
            <h2>Tu carrito está vacío</h2>
            <p>Agrega productos para comenzar tu compra.</p>
            <Link to={"/"}>
              <button>Ir a comprar</button>
            </Link>
          </div>
        ) : (
          <div className="lleno">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <h2>{product.title}</h2>
                <img src={product.img} alt={product.title} />
                <h2>Cantidad: {product.quantity}</h2>
                <button onClick={() => removeId(product.id)}>Eliminar</button>
              </div>
            ))}
            <div className="total-section">
              <h2>El total a pagar es: {total}</h2>
              <button onClick={clearCart}>Limpiar Carrito</button>
              <Link to="/formik">
                <button>Finalizar Compra</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
