function SearchResult(props) {
  const cocktail = props.cocktail;
  const chooseCocktailByClick = props.chooseCocktailByClick;

  return (
    <div className="search-result-region">
      <h2 className="search-result-cocktail-name">{cocktail.name}</h2>
      <img
        className="search-result-cocktail-img"
        src={cocktail.image}
        alt=""
        onClick={chooseCocktailByClick}
        name={cocktail.drinkId}
      />
    </div>
  );
}
export default SearchResult;
