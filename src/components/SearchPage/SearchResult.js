function SearchResult(props) {
  const cocktail = props.cocktail;
  const index = props.index;

  return (
    <div
      className={
        `search-result-region search-result-region-` + (index % 2).toString()
      }
    >
      <div>
        <img
          className="search-result-cocktail-img"
          src={cocktail.image}
          alt=""
        />
      </div>
      <div>
        <h2 className="search-result-cocktail-name">{cocktail.name}</h2>
        <p className="search-result-cocktail-instruction">
          {cocktail.instruction}
        </p>
      </div>
    </div>
  );
}
export default SearchResult;
