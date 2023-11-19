import { useState } from "react";
import Newsletter from "./components/Newsletter";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  return (
    <>
      <Newsletter />
      <Header cartCount={cartCount} setSearch={setSearch}/>
      <Products setCartCount={setCartCount} search={search}/>
    </>
  );
}

export default App;
