import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import NavbarComp from "./components/NavBar/NavbarComp";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <ItemListContainer texto="Bienvenidos!" />
    </div>
  );
}

export default App;
