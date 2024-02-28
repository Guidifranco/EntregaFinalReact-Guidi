import "./ProductDetail.css";
import { IoCartOutline } from "react-icons/io5";

export const ProductDetail = ({ item, count, increment, decrement, reset }) => {
  return (
    <div className="tarjeta">
      <img className="imagen-columna" src={item.img} alt={item.title} />
      <div className="texto-columna">
        <h4>{item.title}</h4>
        <h3>{item.description}</h3>
        <h3>{item.price}</h3>
      </div>
      <div className="counter-container">
        <h3> Agregar al carrito </h3>
        <div className="counter-buttons">
          <button onClick={decrement}>-</button>
          <button onClick={reset} className="counter-display">{count} <IoCartOutline size={25} /></button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};
