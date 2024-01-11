import { useState } from "react";
import "./ProductCard.css";
import EditProduct from "./EditProduct";
import axios from "axios";

function ProductCard({
  name,
  category,
  price,
  id,
  index,
  setFilteredProducts,
}) {
  const [isProduct, setIsProduct] = useState(true);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/recipies/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setFilteredProducts((preProducts) => {
            return preProducts.filter((product, ind) => index !== ind);
          });
        } else {
          setFilteredProducts((preProducts) => {
            return [...preProducts];
          });
        }
      })
      .catch(() => {
        alert(
          "There was an error while deleting recepie to the database, Please try again."
        );
      });
  };
  return (
    <div className="product-card">
      {isProduct ? (
        <>
          <h3>Name: {name}</h3>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn edit" onClick={() => setIsProduct(false)}>
            Edit
          </button>
        </>
      ) : (
        <EditProduct
          setFilteredProducts={setFilteredProducts}
          name={name}
          category={category}
          price={price}
          setIsProduct={setIsProduct}
          index={index}
        />
      )}
    </div>
  );
}

export default ProductCard;
