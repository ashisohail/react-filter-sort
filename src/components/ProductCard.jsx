import "./ProductCard.css";

function ProductCard({ name, category, price }) {
  return (
    <div className="product-card">
      <h3>Name: {name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ProductCard;
