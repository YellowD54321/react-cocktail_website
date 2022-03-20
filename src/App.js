import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./firebase";
import { getAuth } from "firebase/auth";
import { useStateValue } from "./components/Reducer/StateProvider";
import Header from "./components/Header/Header.js";
import TesterScroll from "./components/MainPage/TesterScroll.js";
// import MainPage from "./components/MainPage.js";
import SearchPage from "./components/SearchPage/SearchPage.js";
// import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage.js";
import SignUpPage from "./components/LoginPage/SignUpPage.js";

function App() {
  const HomePage = () => {
    return (
      <div>
        <Header />
        <TesterScroll />
      </div>
    );
  };
  const SearchResultPage = () => {
    return (
      <div>
        <Header />
        <SearchPage />
      </div>
    );
  };
  const auth = getAuth();
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USE iS >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/searchPage" element={<SearchResultPage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/signUpPage" element={<SignUpPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
