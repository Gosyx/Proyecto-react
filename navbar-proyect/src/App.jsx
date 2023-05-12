import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavbarComp from "./components/NavBar/NavbarComp";
import Cart from "./components/Cart";
//importamos elemeontos creados
import Contact from "./components/pages/Contacto";
import Emotes from "./components/pages/Emotes";
import Informacion from "./components/pages/Informacion";
import Inicio from "./components/pages/Inicio";
import Paneles from "./components/pages/Paneles";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavbarComp />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
