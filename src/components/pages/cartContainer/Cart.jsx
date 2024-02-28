import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  return (
    <div className="desc">
      <h4>En este momento no funciona el carrito</h4>
      <Link to={"/"}>
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};
