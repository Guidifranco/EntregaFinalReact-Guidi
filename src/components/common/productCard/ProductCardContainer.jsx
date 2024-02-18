import { ProductCard } from "./ProductCard";

export const ProductCardContainer = ({ producto, img, precio }) => {

    
  return (
    <div>
      <ProductCard producto={producto} img={img} precio={precio} />
    </div>
  );
};
