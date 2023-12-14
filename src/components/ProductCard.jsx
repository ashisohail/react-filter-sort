import { useState } from "react";
import "./ProductCard.css";
import EditProduct from "./EditProduct";

function ProductCard({ name, category, price, index, setFilteredProducts }) {
  const [isProduct, setIsProduct] = useState(true);
  return (
    <div className="product-card">
      {isProduct ? (
        <>
          <h3>Name: {name}</h3>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <button
            className="btn"
            onClick={() =>
              setFilteredProducts((preProducts) => {
                return preProducts.filter((product, ind) => index !== ind);
              })
            }
          >
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
