import { useNavigate, useParams } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { useEffect, useState } from "react";
import { getProduct } from "../../../productMock";
import { useCount } from "../../../hooks/useCount";

export const ProductDetailContainer = () => {
  const { id } = useParams();
  const { count, increment, decrement, reset } = useCount(1);

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("ID:", id);
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, [id]);

  const navigate = useNavigate()

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    console.log(infoProducto)
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
        />
      )}
    </div>
  );
};
