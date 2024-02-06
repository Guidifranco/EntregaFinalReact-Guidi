import { ProductCard } from "../common/ProductCard"
import "./ItemListContainer.css"


export const ItemListContainer = ({greeting})=> {

    return <div>

    <h1 className="titulo">{greeting}</h1>

    <div className="tarjetas">
    <ProductCard  producto={"Moneda Griega"} img={"https://res.cloudinary.com/dkzpfaxxe/image/upload/v1707235917/default-featured-image_st0jr2.png"} precio={2500} />
    <ProductCard  producto={"Moneda Romana"} img={"https://res.cloudinary.com/dkzpfaxxe/image/upload/v1707235917/default-featured-image_st0jr2.png"} precio={2500} />
    <ProductCard  producto={"Moneda Argentina"} img={"https://res.cloudinary.com/dkzpfaxxe/image/upload/v1707235917/default-featured-image_st0jr2.png"} precio={2500} />
    </div>


    </div>
}