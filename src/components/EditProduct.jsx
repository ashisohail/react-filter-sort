import React, { useState } from "react";
import "./EditProduct.css";

function EditProduct({
  setFilteredProducts,
  setIsProduct,
  name,
  category,
  price,
  index,
}) {
  const [editProduct, setEditProduct] = useState({
    name: name,
    category: category,
    price: price,
  });
  const handleEditChange = (e) => {
    if (e.target.name === "name") {
      setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    }
    if (e.target.name === "category") {
      setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    }
    if (e.target.name === "price") {
      setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredProducts((preProducts) => {
      // make a copy of products
      const productsCopy = [...preProducts];
      // get the product to be updated
      const productToReplace = productsCopy[index];
      // update the product
      productToReplace.name = editProduct.name;
      productToReplace.category = editProduct.category;
      productToReplace.price = editProduct.price;
      // replace the item at specified index
      productsCopy[index] = productToReplace;
      // close product edit form
      setIsProduct(true);
      return productsCopy;
    });
  };

  return (
    <form className="edit-product" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={handleEditChange}
        type="text"
        name="name"
        value={editProduct.name}
        placeholder="Name"
        id="name"
        required
      />

      <label htmlFor="category">Category:</label>
      <input
        onChange={handleEditChange}
        type="text"
        name="category"
        value={editProduct.category}
        placeholder="Category"
        id="category"
        required
      />

      <label htmlFor="price">price:</label>
      <input
        onChange={handleEditChange}
        type="text"
        name="price"
        value={editProduct.price}
        placeholder="Price"
        id="price"
        required
      />
      <div className="btn-container">
        <button className="btn" onClick={() => setIsProduct(true)}>
          Cancel
        </button>
        <button className="save btn">Save</button>
      </div>
    </form>
  );
}

export default EditProduct;
