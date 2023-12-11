import "./ProductCard.css";

function ProductCard({ name, category, price, index, setFilteredProducts }) {
  return (
    <div className="product-card">
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
    </div>
  );
}

export default ProductCard;
