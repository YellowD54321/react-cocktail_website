import React, { useRef } from "react";
import { useStateValue } from "../Reducer/StateProvider";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const searchBarRef = useRef("");
  const [{ searchBtnCount, user }, dispatch] = useStateValue();
  // const userEmailAddress = user?.email;
  const userEmailName = user?.email?.match(/[^@]*/i)[0];
  const navigate = useNavigate();

  const startSearching = () => {
    const searchInput = searchBarRef?.current?.value;
    const btnCounter = searchBtnCount >= 0 ? searchBtnCount + 1 : 0;

    navigate("/searchPage");
    dispatch({
      type: "SEARCH_TEXT",
      item: {
        text: searchInput,
        btnCounter: btnCounter,
      },
    });
  };

  function searchBarOnKeyUp(event) {
    if (event.key === "Enter") {
      startSearching();
    }
  }

  function startRandomDice() {
    const btnCounter = searchBtnCount >= 0 ? searchBtnCount + 1 : 0;
    navigate("/searchPage");
    dispatch({
      type: "SEARCH_TEXT",
      item: {
        text: "random",
        btnCounter: btnCounter,
      },
    });
  }

  function handleLogClick() {
    const auth = getAuth();

    if (user) {
      handleLogOut(auth);
    } else {
      handleLogIn();
    }
  }

  function handleLogOut(auth) {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("LOGOUT SUCCESSFUL!");
      })
      .catch((error) => {
        // An error happened.
        const errorMessage = error.message;
        console.log("log out fail information = " + errorMessage);
      });
  }

  function handleLogIn() {
    navigate("/loginPage");
  }

  function handleLogoClick() {
    navigate("/");
  }

  return (
    <header>
      <div className="header-left">
        <img
          className="header-logo"
          src="../images/Logo/Logo.png"
          alt="Cocktail is Everywhere"
          onClick={handleLogoClick}
        />
      </div>
      <div className="header-middle">
        <input
          className="header-search-bar"
          type="text"
          placeholder="search by name"
          ref={searchBarRef}
          onKeyUp={searchBarOnKeyUp}
        />
        <img
          className="header-search-bar-img"
          src="../images/icons/search-icon.png"
          alt=""
          onClick={startSearching}
        />
        <img
          className="header-random-cocktail-img"
          src="../images/icons/dice-icon.png"
          alt="Try a random cocktail!"
          title="Try a random cocktail!"
          onClick={startRandomDice}
        />
      </div>
      <div className="header-right">
        <section className="header-myfavourite">
          <a href="#">
            <img
              className="header-myfavourite-img"
              src="../images/icons/myfavourite-icon.png"
              alt="My Favourite Cocktail"
              title="My Favourite Cocktail"
            />
          </a>
        </section>
        <section className="header-shipping-cart">
          <a href="#">
            <img
              className="header-shipping-cart-img"
              src="../images/icons/shipping-cart-icon.png"
              alt="My Shipping Cart"
              title="My Shipping Cart"
            />
          </a>
        </section>
        <section className="header-account">
          <p>Hello {user ? userEmailName : `guest!`}</p>
          <button
            className="header-signIn-signOut-btn"
            onClick={handleLogClick}
          >
            {user ? `Log out` : `Log in`}
          </button>
        </section>
      </div>
    </header>
  );
}
export default Header;
