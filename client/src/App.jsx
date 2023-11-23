import { useState } from "react";
import Newsletter from "./components/Newsletter";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [animateHeart, setAnimateHeart] = useState(false);

  return (
    <>
      <Newsletter />
      <Header cartCount={cartCount} setSearch={setSearch} animateHeart={animateHeart}/>
      <Products setCartCount={setCartCount} search={search} setAnimateHeart={setAnimateHeart}/>
    </>
  );
}

export default App;
