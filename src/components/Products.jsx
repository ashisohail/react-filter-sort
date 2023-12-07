import products from "../data/data.json";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <ul>
      {products.map((product) => {
        return (
          <ProductCard
            name={product.name}
            category={product.category}
            price={product.price}
          />
        );
      })}
    </ul>
  );
}

export default Products;
