import "./App.css"
import { Navbar } from "./components/layout/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"


function App() {

  return (

    <div>
      <Navbar />


      <ItemListContainer greeting="Bienvenidos A La Tienda"/>


    </div>
  )
}

export default App

