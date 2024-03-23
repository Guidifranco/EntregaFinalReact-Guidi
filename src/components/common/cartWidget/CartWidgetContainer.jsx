import "./CartWidget.css";
import { CartWidget } from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidgetContainer = () => {
  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems();

  return (
    <div className="carrito">
      <CartWidget total={total} />
    </div>
  );
};
