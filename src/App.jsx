import "./App.css"
import { Navbar } from "./Navbar"
import {Footer} from "./Footer"

function App() {
  /* puedo hacer cosas de js hasta el return */

  let x = 1
  let y = 2
  let total = x + y


  /* el return sería el html, que ahora mismo seria el jsx */
  return (
    /* <div>Hola Franco el total es {total} </div> */
    <div>
      {/* USAR EL NAVBAR  */}
      <Navbar />


      <h1 className="title">Este es el titulo</h1>
      <h2>Subtitulo</h2>
      <h2>Otro mas</h2>


      {/* USAR EL FOOTER */}
      <Footer />

    </div>
  )
}

export default App

