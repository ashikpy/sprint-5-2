/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="bg-white border border-gray-200 p-5 rounded-lg shadow-md/5 lg:w-2/3">
      <h1 className="font-semibold text-xl">Products</h1>
      <div className="mt-5 flex flex-col gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            desc={product.description}
            price={product.price}
            category={product.category}
            rating={product.rating}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}
