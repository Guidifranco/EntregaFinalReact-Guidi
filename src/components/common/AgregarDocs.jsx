import { db } from "../../firebaseConfig";
import { products } from "../../productMock";
import { addDoc, collection } from "firebase/firestore";

export const AgregarDocs = () => {
  const rellenar = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => {
      addDoc(productsCollection, product);
    });
  };

  return <div>
    <button onClick={rellenar}>Agregar Documentos</button>
  </div>;
};
