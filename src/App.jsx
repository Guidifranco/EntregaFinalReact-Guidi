import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ProductDetailContainer } from "./components/common/productDetail/ProductDetailContainer";
import { CartContainer } from "./components/pages/cartContainer/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarContainer />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ProductDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
