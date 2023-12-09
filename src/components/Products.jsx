import { useEffect, useState } from "react";
import products from "../data/data.json";
import FilterProducts from "./FilterProducts";
import ProductCard from "./ProductCard";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        filteredProducts.filter((product) =>
          product.name.toLocaleLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput]);
  return (
    <div>
      <FilterProducts setSearchInput={setSearchInput} />
      <ul>
        {filteredProducts.map((product) => {
          return (
            <ProductCard
              key={product.name}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
