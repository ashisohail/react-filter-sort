import "./FilterProduct.css";

function FilterProducts({ setSearchInput, searchInput }) {
  return (
    <form className="filter">
      <label htmlFor="serachBar" name="searchBar"></label>
      <input
        type="text"
        value={searchInput}
        name="searchBar"
        id="searchBar"
        placeholder="Filter Food"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
}

export default FilterProducts;
