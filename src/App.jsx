import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ProductDetailContainer } from "./components/common/productDetail/ProductDetailContainer";
import { CartContainer } from "./components/pages/cartContainer/CartContainer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ProductDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
              <Route path="/checkout" element={<CheckoutContainer />}/>
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
