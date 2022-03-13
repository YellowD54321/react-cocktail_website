import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { useStateValue } from "../Reducer/StateProvider";
import NoSearchResult from "./NoSearchResult";
function SearchPage() {
  const [{ searchText, searchBtnCount }, dispatch] = useStateValue();
  const [cocktail, setCocktail] = useState([
    {
      image: "",
      name: "",
      ingredients: [],
      glass: "",
      Instruction: "",
      category: "",
      drinkId: "",
    },
  ]);
  let searchResult = "";
  console.log("searchBtnCount");
  console.log(searchBtnCount);
  async function getCocktailFromAPI(content) {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/" + content;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("Error happens from cocktail API:");
      console.error(err);
    }
  }
  useEffect(() => {
    const searchTextForAPI = searchText
      ? "search.php?s=" + searchText
      : "search.php?s=";

    getCocktailFromAPI(searchTextForAPI).then((data) => {
      let ingredients = [];
      let reslut = [];
      const drinks = data.drinks;
      if (!drinks) {
        console.log("There is no result from cocktail API.");
        setCocktail(null);
        return false;
      }
      for (let i = 0; i < drinks.length; i++) {
        reslut[i] = {
          image: drinks[i].strDrinkThumb,
          name: drinks[i].strDrink,
          ingredients: (() => {
            for (let j = 1; j <= 15; j++) {
              const ingredientName = "strIngredient" + j.toString();
              const ingredientAmount = "strMeasure" + j.toString();
              if (!drinks[i][ingredientName]) break;
              ingredients.push({
                ingredient: drinks[i][ingredientName],
                amount: drinks[i][ingredientAmount],
              });
            }
            return ingredients;
          })(),
          glass: drinks[i].strGlass,
          instruction: drinks[i].strInstructions,
          category: drinks[i].strCategory,
          drinkId: drinks[i].idDrink,
        };
      }
      setCocktail(reslut);
    });
  }, [searchBtnCount]);

  console.log("cocktail");
  console.log(cocktail);

  if (!cocktail) {
    searchResult = <NoSearchResult searchText={searchText} />;
  } else {
    searchResult = cocktail.map((item, index) => {
      return (
        <SearchResult
          key={item.drinkId}
          {...item}
          cocktail={item}
          index={index}
        />
      );
    });
  }

  return <main>{searchResult}</main>;
}
export default SearchPage;
