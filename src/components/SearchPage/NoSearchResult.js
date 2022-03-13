import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import "./NoSearchResult.css";
import { useStateValue } from "../Reducer/StateProvider";
function NoSearchResult(props) {
  const [{ searchText, searchBtnCount }, dispatch] = useStateValue();
  const [gifImgUrl, setGifImgUrl] = useState("");
  const [cocktail, setCocktail] = useState({
    image: "",
    name: "",
    ingredients: [],
    glass: "",
    Instruction: "",
    category: "",
    drinkId: "",
  });
  //   const searchText = props.searchText;
  const lookingForGif =
    `https://api.giphy.com/v1/gifs/random?` +
    `api_key=kJ68eSnr74nFdRH0lw4cw4VGAzOpajnB&tag` +
    `=looking+for&rating=g`;
  const randomCocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  let randomCocktail = null;

  useEffect(() => {
    async function getGifFromAPI(apiUrl) {
      try {
        const url = apiUrl;
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log("Error happens from Gif API:");
        console.error(err);
      }
    }
    getGifFromAPI(lookingForGif).then((data) => {
      setGifImgUrl(data.data.images.original.url);
    });

    getGifFromAPI(randomCocktailUrl).then((data) => {
      const drink = data.drinks[0];
      let ingredients = [];
      const reslut = {
        image: drink.strDrinkThumb,
        name: drink.strDrink,
        ingredients: (() => {
          for (let j = 1; j <= 15; j++) {
            const ingredientName = "strIngredient" + j.toString();
            const ingredientAmount = "strMeasure" + j.toString();
            if (!drink[ingredientName]) break;
            ingredients.push({
              ingredient: drink[ingredientName],
              amount: drink[ingredientAmount],
            });
          }
          return ingredients;
        })(),
        glass: drink.strGlass,
        instruction: drink.strInstructions,
        category: drink.strCategory,
        drinkId: drink.idDrink,
      };
      setCocktail(reslut);
    });
  }, [searchBtnCount]);
  if (cocktail.name) {
    randomCocktail = (
      <SearchResult
        key={cocktail.drinkId}
        {...cocktail}
        cocktail={cocktail}
        index={0}
      />
    );
  }
  return (
    <div className="no-result-main">
      <div className="no-result-information">
        <img
          className="no-result-gif"
          src={gifImgUrl}
          alt="Looking for cocktail"
        />
        <div className="no-result-information-text">
          <h2>Oops!</h2>
          <p>{`There is no result for "${searchText}".`}</p>
          <p>We can blame on the API together.</p>
        </div>
      </div>
      <div className="no-result-try-random">
        <h3>Or</h3>
        <p>Let's try a random one?</p>
      </div>
      <div className="no-result-random">{randomCocktail}</div>
    </div>
  );
}
export default NoSearchResult;
