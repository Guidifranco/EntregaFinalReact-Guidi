import { useParams } from "react-router-dom";
import { ProductDetail } from "./ProductDetail";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../../productMock";
import { useCount } from "../../../hooks/useCount";
import { CartContext } from "../../../context/CartContext";
import { FadeLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";

export const ProductDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);

  useEffect(() => {
    setIsLoading(true);
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const { count, reset, addOne, subOne } = useCount({
    stock: item ? item.stock : 0,
  });

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <div>
      {isLoading ? (
        <h2>
          <FadeLoader color="#6e847c" height={20} width={4} />
        </h2>
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
