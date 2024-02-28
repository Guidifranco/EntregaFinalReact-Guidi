import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../../productMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setItems(productsFilter);
      } else {
        setItems(resp);
      }

      setIsLoading(false);
    });
  }, [category]);

  return (
    <div>
      {isLoading ? <h3>Cargando los cuadros..</h3> : <ItemList items={items} />}
    </div>
  );
};
