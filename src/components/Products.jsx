import { useEffect, useState } from "react";
import FilterProducts from "./FilterProducts";
import ProductCard from "./ProductCard";
import DropdownMenu from "./DropdownMenu";
import "./Products.css";
import AddProduct from "./AddProduct";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchInput, setSearchInput] = useState("");
  const [sortTitle, setSortTitle] = useState("Sort");

  useEffect(() => {
    // Make a GET request to a URL
    axios
      .get("http://localhost:3001/recipies")
      .then((response) => {
        // handle success
        setProducts(response.data);
      })
      .catch((error) => {
        // handle error
        alert(error.message);
      });

    //async await method

    // const fetchRecepies = async () => {
    //   try {
    //     const resp = await fetch("http://localhost:3001/recipies");
    //     // if (!resp.ok) return;
    //     setProducts(await resp.json());
    //   } catch (err) {
    //     const errorElement = document.getElementById("error");
    //     errorElement.innerText = "there was an error";
    //   }
    // };
    // fetchRecepies();

    //fetch method

    // function fetchData() {
    //   fetch("http://localhost:3001/recipies")
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       return setProducts(data);
    //     })
    //     .catch((err) => console.log("error", err));
    // }
    // fetchData();
  }, []);

  useEffect(() => {
    if (searchInput === "") {
      setFilteredProducts(products);
      // filteredProdzucts;
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
  }, [products, searchInput]);

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
      <div id="error"></div>
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
              id={product.id}
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
