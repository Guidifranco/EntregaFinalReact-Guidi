import "./ProductDetail.css";
import { IoCartOutline } from "react-icons/io5";

export const ProductDetail = ({
  item,
  count,
  reset,
  onAdd,
  initial,
  addOne,
  subOne,
  stock,
}) => {
  return (
    <div>
      <div className="tarjeta">
        <img className="imagen-columna" src={item.img} alt={item.title} />
        <div className="texto-columna">
          <h4>{item.title}</h4>
          <h3>{item.description}</h3>
          <h3>Precio: {item.price} $</h3>
        </div>
        <div className="counter-container">
          <h3> Agregar al carrito </h3>
          <div className="counter-buttons">
            <button onClick={subOne}>-</button>
            <button onClick={() => onAdd(count)} className="counter-display">
              {count} <IoCartOutline size={25} />
            </button>
            <button onClick={addOne}>+</button>
          </div>
        </div>
      </div>
      {initial && <h3>Ya tienes {initial} en el carrito</h3>}
    </div>
  );
};
