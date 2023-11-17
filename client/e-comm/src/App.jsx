import { useState } from "react";
import Newsletter from "./components/Newsletter";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Newsletter/>
      <Header/>
      <Products/>
    </>
  );
}

export default App;
