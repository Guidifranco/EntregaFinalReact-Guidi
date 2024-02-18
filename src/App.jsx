import "./App.css";
import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavbarContainer />

      <ItemListContainer greeting="Bienvenidos A La Tienda" />
    </div>
  );
}

export default App;
