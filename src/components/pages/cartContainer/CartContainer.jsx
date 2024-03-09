import { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import { Cart } from "./Cart"

export const CartContainer = () => {

  const { cart, clearCart, removeId, getTotalPrice} = useContext(CartContext);

  let total = getTotalPrice()

  return (
    <div><Cart cart={cart} clearCart={clearCart} removeId={removeId} total={total}/></div>
  )
}
