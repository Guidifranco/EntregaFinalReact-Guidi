import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";


export const ItemList = ({greeting}) => {


  return (
    <div>
      <h1 className="titulo">{greeting}</h1>

      <div className="tarjetas">
        <ProductCardContainer
          producto={"Moneda Griega"}
          img={
            "https://res.cloudinary.com/dkzpfaxxe/image/upload/v1707235917/default-featured-image_st0jr2.png"
          }
          precio={2500}
        />
        <ProductCardContainer
          producto={"Moneda Romana"}
          img={
            "https://res.cloudinary.com/dkzpfaxxe/image/upload/v1707235917/default-featured-image_st0jr2.png"
          }
          precio={2500}
        />
        <ProductCardContainer
          producto={"Moneda Argentina"}
          img={
            "https://res.cloudinary.com/dkzpfaxxe/image/upload/v1707235917/default-featured-image_st0jr2.png"
          }
          precio={2500}
        />
      </div>
    </div>
  );
};
