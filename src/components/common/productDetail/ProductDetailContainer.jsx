import { useNavigate, useParams } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../../productMock";
import { useCount } from "../../../hooks/useCount";
import { CartContext } from "../../../context/cartContext";

export const ProductDetailContainer = () => {
  const { id } = useParams();
  const { count, increment, decrement, reset } = useCount(1);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id)
  console.log(initial)

  useEffect(() => {
    console.log("ID:", id);
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const navigate = useNavigate();

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    console.log(infoProducto);
    navigate("/cart");
  };

  return (
    <div>
      {isLoading ? (
        <h2>Cargando Productos</h2>
      ) : (
        <ProductDetail
          item={item}
          count={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
          onAdd={onAdd}
          initial={initial}
        />
      )}
    </div>
  );
};
