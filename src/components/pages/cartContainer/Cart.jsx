import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = ({ removeId, cart, clearCart, total }) => {
  return (
    <>
      <div className="desc">
        {cart.map((product) => (
          <div key={product.id}>
            <h2>Nombre: {product.title}</h2>
            <img  src={product.img} alt="" />
            <h2>Cantidad: {product.quantity}</h2>
            <button onClick={() => removeId(product.id)}>Eliminar</button>
          </div>
        ))}
        <h2>El total a pagar es: {total}</h2>

        <button onClick={clearCart}>Limpiar Carrito</button>

        <Link to={"/checkout"}>
          <button> Ir al checkout </button>
        </Link>
      </div>
    </>
  );
};
