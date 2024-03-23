import { Link } from "react-router-dom";
import { ProductDetailContainer } from "../productDetail/ProductDetailContainer";
import "./ProductCard.css";

export const ProductCard = ({ id, title, img, description, price }) => {
  return (
    <div className="product-card">
      <div>
        <h3>{title}</h3>
        <img src={img} alt={title} />
        <Link to={`/item/${id}`}>
          <button>Detalles</button>
        </Link>
      </div>
    </div>
  );
};


