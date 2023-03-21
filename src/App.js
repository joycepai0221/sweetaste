import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import ProductPage from "./pages/Products";
import Checkout from "./pages/Checkout";
import ShoppingCart from "./pages/ShoppingCart";
import Success from "./pages/Success";
import { CartItemData } from "./components/CartList/CartItemsData";
import { Login } from "./pages/Signin/data";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signin" element={<Signin {...Login} />} exact />
        <Route
          path="/checkout"
          element={<Checkout {...CartItemData} />}
          exact
        />
        <Route path="/checkout-success" element={<Success />} exact />
        <Route path="/shoppingcart" element={<ShoppingCart />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
