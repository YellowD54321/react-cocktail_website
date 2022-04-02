import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { useStateValue } from "../Reducer/StateProvider";
import NoSearchResult from "./NoSearchResult";
import { useNavigate } from "react-router-dom";
function SearchPage() {
  let searchResultClassName = "";
  const [{ searchText, searchBtnCount }, dispatch] = useStateValue();
  const [cocktail, setCocktail] = useState([
    {
      image: "",
      name: "",
      ingredients: [],
      glass: "",
      description: "",
      category: "",
      drinkId: "",
    },
  ]);
  const cocktailBasicApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
  const cocktailRandomApiUrl = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const searchTextForAPI = searchText
    ? "search.php?s=" + searchText
    : "search.php?s=";
  let cocktailApiUrl = "";
  const navigate = useNavigate();

  if (!searchText || searchText?.toLowerCase() === "random") {
    cocktailApiUrl = cocktailRandomApiUrl;
  } else {
    cocktailApiUrl = cocktailBasicApiUrl + searchTextForAPI;
  }
  let searchResult = "";
  useEffect(() => {
    getDataFromAPI(cocktailApiUrl).then((data) => {
      const drinks = data?.drinks;
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
    let reslut = [];
    for (let i = 0; i < drinks.length; i++) {
      let ingredients = [];
      reslut[i] = {
        image: drinks[i].strDrinkThumb,
        name: drinks[i].strDrink,
        ingredients: (() => {
          for (let j = 1; j <= 15; j++) {
            const ingredientName = "strIngredient" + j.toString();
            const ingredientAmount = "strMeasure" + j.toString();
            if (!drinks[i][ingredientName]) break;
            ingredients.push({
              name: drinks[i][ingredientName],
              amount: drinks[i][ingredientAmount],
            });
          }
          return ingredients;
        })(),
        glass: drinks[i].strGlass,
        description: drinks[i].strInstructions,
        category: drinks[i].strCategory,
        drinkId: drinks[i].idDrink,
      };
    }
    return reslut;
  };

  const chooseCocktailByClick = (e) => {
    console.log("chooseCocktailByClick is running.");
    const cocktailId = e.target.name;
    const cocktailInfo = cocktail.find((drink) => drink.drinkId === cocktailId);

    console.log("cocktailInfo");
    console.log(cocktailInfo);

    dispatch({
      type: "COCKTAIL_INFO",
      item: {
        cocktailInfo: cocktailInfo,
      },
    });
    navigate("/productPage");
  };

  if (!cocktail) {
    searchResultClassName = "search-result-notFound-all";
    searchResult = (
      <NoSearchResult
        getDataFromAPI={getDataFromAPI}
        getCocktailInfo={getCocktailInfo}
      />
    );
  } else {
    searchResultClassName = "search-result-all";
    searchResult = cocktail.map((item, index) => {
      return (
        <SearchResult
          key={item.drinkId}
          {...item}
          cocktail={item}
          index={index}
          chooseCocktailByClick={chooseCocktailByClick}
        />
      );
    });
  }

  return (
    <div>
      <div className={searchResultClassName}>{searchResult}</div>;
    </div>
  );
}
export default SearchPage;
