import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";
import { ItemList } from "./ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {


  return (
    <div>
      <ItemList greeting={greeting}/>
      
    </div>
  );
};
