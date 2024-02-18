import "./CartWidget.css";
import { CartWidget } from "./CartWidget";

export const CartWidgetContainer = () => {

  const ProductsInCart = 3;

  return (
    <div className="carrito">
      <CartWidget />
    </div>
  );
};
