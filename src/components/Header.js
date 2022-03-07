function Header() {
  return (
    <header>
      <div className="header-left">
        <img
          className="header-logo"
          src="../images/Logo/Logo.png"
          alt="Cocktail is Everywhere"
        />
      </div>
      <div className="header-middle">
        <input className="header-search-bar" type="text" placeholder="search" />
        <img
          className="header-search-bar-img"
          src="../images/icons/search-icon.png"
          alt=""
        />
        <a className="header-random-cocktail" href="#">
          <img
            className="header-random-cocktail-img"
            src="../images/icons/dice-icon.png"
            alt="Try a random cocktail!"
            title="Try a random cocktail!"
          />
        </a>
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
          <p>Hello guest!</p>
          <p>Log in</p>
        </section>
      </div>
    </header>
  );
}
export default Header;
