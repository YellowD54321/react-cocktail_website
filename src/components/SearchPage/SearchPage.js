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
  const cocktailBasicApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
  const searchTextForAPI = searchText
    ? "search.php?s=" + searchText
    : "search.php?s=";
  const cocktailApiUrl = cocktailBasicApiUrl + searchTextForAPI;
  let searchResult = "";
  useEffect(() => {
    getDataFromAPI(cocktailApiUrl).then((data) => {
      const drinks = data.drinks;
      if (!drinks) {
        console.log("There is no result from cocktail API.");
        setCocktail(null);
        return false;
      }
      const cocktailInfo = getCocktailInfo(drinks);
      setCocktail(cocktailInfo);
    });
  }, [searchBtnCount]);

  const getDataFromAPI = async (ApiUrl) => {
    try {
      const url = ApiUrl;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log("Error happens from cocktail API:");
      console.error(err);
    }
  };

  const getCocktailInfo = (drinks) => {
    let ingredients = [];
    let reslut = [];
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
    return reslut;
  };

  if (!cocktail) {
    searchResult = (
      <NoSearchResult
        getDataFromAPI={getDataFromAPI}
        getCocktailInfo={getCocktailInfo}
      />
    );
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
