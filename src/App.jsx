import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
