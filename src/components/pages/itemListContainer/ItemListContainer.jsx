import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { SkeletonCard } from "../../common/skeleton/SkeletonCard";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let productsCollection = collection(db, "products");
    let consulta = productsCollection;

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayCompleto = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });
        setItems(arrayCompleto);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <div>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};
