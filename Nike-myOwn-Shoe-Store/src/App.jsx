import Home from "./components/Home";
import About from "./components/About/About";
import Product from "./components/Product";
import SummaryCard from "./components/SummaryCard";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Nav />
      </div>
    </Provider>
  );
}

export default App;
