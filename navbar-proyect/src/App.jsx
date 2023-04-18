import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavbarComp from "./components/NavBar/NavbarComp";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
