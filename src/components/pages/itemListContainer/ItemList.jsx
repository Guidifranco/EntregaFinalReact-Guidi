import { ProductCardContainer } from "../../common/productCard/ProductCardContainer";


export const ItemList = ({ items }) => {


  return (
    <div>
      <div className="titulo">
        <h4>Minim Cuadros</h4>
      </div>

      <div className="productCardContainer">
        {items.map(({ id, img, title, description, price }) => (
          <ProductCardContainer
            key={id}
            id={id}
            img={img}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};
