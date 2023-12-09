import "./FilterProduct.css";

function FilterProducts({ setSearchInput }) {
  return (
    <form className="filter">
      <label htmlFor="serachBar" name="searchBar"></label>
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Filter Food"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
}

export default FilterProducts;
