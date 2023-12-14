import React, { useState } from "react";
import "./AddProduct.css";

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
    setFilteredProducts((preProducts) => {
      return [...preProducts, addProduct];
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
