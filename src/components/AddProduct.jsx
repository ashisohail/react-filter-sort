import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import axios from "axios";

function AddProduct({ setFilteredProducts }) {
  const [addProduct, setAddProduct] = useState({
    name: "",
    category: "",
    price: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "name") {
      setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    }
    if (e.target.name === "category") {
      setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    }
    if (e.target.name === "price") {
      setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddProduct({ name: "", category: "", price: "" });

    // Adding product/recepies to the DB
    axios
      .post("http://localhost:3001/recipies", addProduct)
      .then((response) => {
        if (response.status === 201) {
          setFilteredProducts((preProducts) => {
            return [...preProducts, addProduct];
          });
        } else {
          setFilteredProducts((preProducts) => {
            return [...preProducts];
          });
        }
      })
      .catch(() => {
        alert(
          "There was an error while adding recepie to the database, Please try again."
        );
      });
  };

  return (
    <form className="add-product" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="name"
        value={addProduct.name}
        placeholder="Name"
        id="name"
        required
      />

      <label htmlFor="category">Category:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="category"
        value={addProduct.category}
        placeholder="Category"
        id="category"
        required
      />

      <label htmlFor="price">price:</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="price"
        value={addProduct.price}
        placeholder="Price"
        id="price"
        required
      />

      <button>Add</button>
    </form>
  );
}

export default AddProduct;
