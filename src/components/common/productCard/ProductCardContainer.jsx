import { ProductCard } from "./ProductCard";

export const ProductCardContainer = ({
  id,
  img,
  title,
  description,
  price,
}) => {
  return (
    <div>
      <ProductCard
        id={id}
        title={title}
        img={img}
        description={description}
        price={price}
      />
    </div>
  );
};
