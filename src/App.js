import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/wishlist";
import Store_locations from "./pages/store_locations/store_locations";
import ProductVariety from "./pages/productVariety/productVariety";
import Cart from "./pages/cart/Cart";
import ContactUs from "./pages/contactUs/contactUs";
import Login from "./pages/login/Login";
import Payment from "./pages/payment options/Payment";
import Baby from "./pages/babyNeeds/Baby";
import Grocery from "./pages/grocery/Grocery";
import Electronics from "./pages/electronics/Electronics";
import FruitsAndVegetables from "./pages/fruitsAndVegetables/FruitsAndVegetables";
import Signup from "./pages/signup/Signup";
import Faq from "./pages/faq/Faq";
import Viewproduct from "./components/Viewproduct";
import Notfound from "./pages/notfound/Notfound";
import { Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContexts } from "./contexts/AppContextsProvider";

function App() {
  let [loaded, setload] = useState(false);
  let [login, setLogin] = useState(true);
  let [wishlistitems, setwishlistitems] = useState([
    { id: 1, name: "z", price: 1030, qty: 6, isAddedToCart: false },
    { id: 2, name: "z", price: 2050, qty: 5, isAddedToCart: false },
  ]);

  let [cartitems, setcartitems] = useState([
    { id: 1, name: "z", price: 1030, qty: 6, isAddedToCart: true },
    { id: 2, name: "z", price: 2050, qty: 5, isAddedToCart: true },
  ]);
  const location = useLocation();

  let history = useHistory();

  useEffect(() => {
    const currentPath = location.pathname;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const LoginSet = (type) => {
    setLogin((login = type));
  };

  let [nName, setLoc] = useState();
  let [nLink, setLink] = useState();

  const setLocbar = (name, nlink) => {
    setLoc(name);
    setLink(nlink);
  };

  return (
    <div className="App">
      <AppContexts.Provider
        value={{ wishlistitems, setwishlistitems, cartitems, setcartitems }}
      >
        <Header
          isLogged={login}
          logSet={LoginSet}
          home={"Home"}
          name={nName}
          link={nLink}
        />
        <Switch>
          <Route path={"/login"} exact component={Login} />
          // new router change
          <Route
            exact
            path="/baby"
            render={() => {
              return <Baby />;
            }}
          />
          <Route
            exact
            path="/grocery"
            render={() => {
              return <Grocery />;
            }}
          />
          <Route
            exact
            path="/electronics"
            render={() => {
              return <Electronics />;
            }}
          />
          <Route
            exact
            path="/fruits-and-vegetables"
            render={() => {
              return <FruitsAndVegetables />;
            }}
          />
          <Route
            exact
            path="/wishlist"
            render={() => {
              return <Wishlist />;
            }}
          />
          <Route
            exact
            path="/cart"
            render={() => {
              return <Cart />;
            }}
          />
          <Route
            exact
            path="/store_locations"
            render={() => {
              return <Store_locations />;
            }}
          />
          <Route
            exact
            path="/contact-us"
            render={() => {
              return <ContactUs />;
            }}
          />
          <Route
            exact
            path="/payment"
            render={() => {
              return <Payment />;
            }}
          />
          <Route
            exact
            path="/productVariety"
            render={() => {
              return <ProductVariety />;
            }}
          />
          <Route
            exact
            path="/faq"
            render={() => {
              return <Faq />;
            }}
          />
          <Route exact path="/view/:index/:product" component={Viewproduct} />
          // not found page
          {/* this one should place always bottom */}
          <Route path={"*"} exact component={Home} />
        </Switch>
        <Footer />
      </AppContexts.Provider>
    </div>
  );
}

export default App;
