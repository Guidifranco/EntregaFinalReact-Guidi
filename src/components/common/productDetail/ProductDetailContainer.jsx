import { useNavigate, useParams } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../../productMock";
import { useCount } from "../../../hooks/useCount";
import { CartContext } from "../../../context/cartContext";

export const ProductDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);
  console.log(initial);

  useEffect(() => {
    getProduct(+id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const navigate = useNavigate();

  const { count, reset, addOne, subOne } = useCount({
    stock: item ? item.stock : 0,
  });

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
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
          reset={reset}
          initial={initial}
          onAdd={onAdd}
          stock={item.stock}
          subOne={subOne}
          addOne={addOne}
        />
      )}
    </div>
  );
};
