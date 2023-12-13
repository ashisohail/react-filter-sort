import { useEffect, useState } from "react";
import products from "../data/data.json";
import FilterProducts from "./FilterProducts";
import ProductCard from "./ProductCard";
import DropdownMenu from "./DropdownMenu";
import "./Products.css";
import AddProduct from "./AddProduct";

function Products() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  const [sortTitle, setSortTitle] = useState("Sort");

  useEffect(() => {
    if (searchInput === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        filteredProducts.filter(
          (product) =>
            product.name
              .toLocaleLowerCase()
              .includes(searchInput.toLowerCase()) ||
            product.category
              .toLocaleLowerCase()
              .includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput]);

  const handleDropDownChange = (e) => {
    if (e.target.value === "Price Low to High") {
      setFilteredProducts(filteredProducts.sort((a, b) => a.price - b.price));
      setSortTitle(e.target.value);
    }
    if (e.target.value === "Price High to Low") {
      setFilteredProducts(filteredProducts.sort((a, b) => b.price - a.price));
      setSortTitle(e.target.value);
    }
  };

  return (
    <>
      <div className="sortfilter-container">
        <FilterProducts
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        <DropdownMenu
          label="Sort Items: "
          name="Sort"
          optionOne="Price Low to High"
          optionTwo="Price High to Low"
          dropDownValue={sortTitle}
          handleDropDownChange={handleDropDownChange}
        />
      </div>
      <ul className="productcard-container">
        {filteredProducts.map((product, index) => {
          return (
            <ProductCard
              key={product.name}
              name={product.name}
              category={product.category}
              price={product.price}
              index={index}
              setFilteredProducts={setFilteredProducts}
            />
          );
        })}
      </ul>
      <AddProduct setFilteredProducts={setFilteredProducts} />
    </>
  );
}

export default Products;
