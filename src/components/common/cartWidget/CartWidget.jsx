import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css"

export const CartWidget = () => {

    const ProductsInCart = 3

  return (
    <div className="carrito">
        <IoCartOutline size={25}/>
        <h4>{ProductsInCart}</h4>
    </div>
  )
}