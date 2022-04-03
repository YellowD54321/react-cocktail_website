import "./favouritePage.css";
import React, { useState, useEffect } from "react";
import { useStateValue } from "../Reducer/StateProvider";
import { db } from "../../firebase";
import { setDoc, getDoc, collection, doc } from "firebase/firestore";
import CocktailList from "../CocktailList/CocktailList.js";

function FavouritePage() {
  const [{ favouriteList }] = useStateValue();

  console.log("favouriteList");
  console.log(favouriteList);

  const favouriteCocktails = (
    <CocktailList cocktail={favouriteList} class="cocktailList-search-result" />
  );
  return <div>{favouriteCocktails}</div>;
}
export default FavouritePage;
