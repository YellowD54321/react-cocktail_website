import "./productPage.css";
import { useStateValue } from "../Reducer/StateProvider";

function ProductPage() {
  const [{ cocktailInfo }] = useStateValue();
  const imgBackgroundStyle = {
    backgroundImage: `url(${cocktailInfo.image}), url(${cocktailInfo.image})`,
    backgroundSize: "cover",
    backgroundBlendMode: "difference",
    backgroundPosition:
      "calc(50% - 1px) calc(50% - 1px), calc(50% + 1px) calc(50% + 1px)",
    filter: "brightness(2) invert(1) grayscale(1)",
    boxShadow: "inset 0 0 0 1px black",
  };
  console.log("cocktailInfo");
  console.log(cocktailInfo);

  const allIngredients = () => {
    let ingredients = cocktailInfo.ingredients;
    const ingredientList = ingredients.map((ingredient, index) => {
      return (
        <p className="product-ingredient">
          {ingredient.name}: {ingredient.amount}
        </p>
      );
    });
    return (
      <div className="product-ingredients">
        <p className="product-ingredients-title">ingredients</p>
        {ingredientList}
      </div>
    );
  };

  return (
    <div className="product-body">
      <h2 className="product-name">{cocktailInfo.name}</h2>
      <div className="product-main">
        <div className="product-font-region">
          <p className="product-description">{cocktailInfo.description}</p>
          {allIngredients()}
        </div>
        <div className="product-image-region">
          <div
            className="product-image-pencil-background"
            style={imgBackgroundStyle}
          >
            <img
              className="product-image-pencil"
              src={cocktailInfo.image}
              alt="Cocktail"
            />
          </div>
          <img
            className="product-image-color"
            src={cocktailInfo.image}
            alt="Cocktail"
          />
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
