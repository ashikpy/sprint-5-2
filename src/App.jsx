import "./App.css";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import { products as initialProducts } from "./utils/data";
import { useState } from "react";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-5 mt-7">
        <Filters products={initialProducts} setFiltered={setFilteredProducts} />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
