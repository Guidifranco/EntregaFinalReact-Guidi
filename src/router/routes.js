import { ProductDetailContainer } from "../components/common/productDetail/ProductDetailContainer";
import { CartContainer } from "../components/pages/cartContainer/CartContainer";
import { FormFormikContainer } from "../components/pages/formFormik/FormFormikContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

export const routes = [
    {
    id: "home" ,
    path: "/" ,
    Element: ItemListContainer
},
    {
    id: "category" ,
    path: "/category/:category" ,
    Element: ItemListContainer
},
    {
    id: "item" ,
    path: "/item/:id" ,
    Element: ProductDetailContainer
},
    {
    id: "cart" ,
    path: "/cart" ,
    Element: CartContainer
},
    {
    id: "formik" ,
    path: "/formik" ,
    Element: FormFormikContainer 
},

];


