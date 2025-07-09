/* eslint-disable react/prop-types */
import { category } from "../utils/data";
import { useState } from "react";

export default function Filters({ products, setFiltered }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = () => {
    if (selectedCategory === "") {
      setFiltered(products);
      return;
    }
    setFiltered(
      products.filter((product) => product.category === selectedCategory)
    );
  };

  return (
    <div className="bg-white h-max border border-gray-200 p-5 rounded-lg shadow-md/5 lg:w-1/3">
      <h1 className="text-xl font-semibold">Filters</h1>
      <div className="flex gap-2  mt-5">
        <select
          name=""
          id=""
          className="text-sm w-full p-2 border border-gray-300 rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {category.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button
          className="w-1/2 cursor-pointer hover:bg-black/80 duration-100 rounded text-sm bg-black text-white px-4"
          onClick={handleClick}
        >
          Apply Filters
        </button>
      </div>
      <button
        className="w-full mt-2 py-2 cursor-pointer hover:bg-black/80 duration-100 rounded text-sm bg-black text-white px-4"
        onClick={() =>
          setFiltered(products.filter((product) => product.rating > 4))
        }
      >
        Show Rating More Than 4
      </button>
      <button
        className="w-full mt-2 py-2 cursor-pointer hover:bg-black/80 duration-100 rounded text-sm bg-black text-white px-4"
        onClick={() => setFiltered(products)}
      >
        Reset
      </button>
      <div className="mt-5">
        <h3 className="font-bold">Available Products Per Category</h3>
        <ul className="mt-1">
          {category.map((cat) => {
            const count = products.filter(
              (product) => product.category === cat
            ).length;
            return (
              <li key={cat} className="text-sm">
                <span className="font-semibold">{cat}:</span>{" "}
                <span className="font-mono">{count}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
