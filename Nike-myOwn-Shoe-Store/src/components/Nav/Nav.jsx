import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import NikeImage from "../../images/nike.svg";
import cartImage2 from "../../images/cart7.svg";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import "./nav.css";

function Nav() {
  const variableSelect = useSelector((store) => store.variableState);
  const [homeState, setHomeState] = useState(
    "hvr-underline-from-center active"
  );
  const [aboutState, setAboutState] = useState("hvr-underline-from-center");
  const [productState, setProductState] = useState("hvr-underline-from-center");
  const [cartState, setCartState] = useState("hvr-underline-from-center");

  //Home
  const setHome = () => {
    setHomeState("hvr-underline-from-center active");
    setAboutState("hvr-underline-from-center");
    setProductState("hvr-underline-from-center");
    setCartState("hvr-underline-from-center");
  };

  //About
  const setAbout = () => {
    setAboutState("hvr-underline-from-center active");
    setHomeState("hvr-underline-from-center");
    setProductState("hvr-underline-from-center");
    setCartState("hvr-underline-from-center");
  };

  //Product
  const setProduct = () => {
    setProductState("hvr-underline-from-center active");
    setHomeState("hvr-underline-from-center");
    setAboutState("hvr-underline-from-center");
    setCartState("hvr-underline-from-center");
  };

  //Cart
  const setCart = () => {
    setCartState("hvr-underline-from-center active");
    setProductState("hvr-underline-from-center");
    setHomeState("hvr-underline-from-center");
    setAboutState("hvr-underline-from-center");
  };

  //Total
  let totalItems = variableSelect.totalAmount;
  console.log("totalItems is ", totalItems);
  return (
    <>
      <h1 className="nike-shoes">Nike Shoes</h1>
      <div className="nav-container">
        <nav>
          <h2>
            <img
              className="logo"
              src={NikeImage}
              title="Nike logo"
              alt="Nike Logo"
            />

            <BrowserRouter>
              <Link className={homeState} to="/" onClick={setHome}>
                Home
              </Link>
              <Link className={aboutState} to="/about" onClick={setAbout}>
                About
              </Link>
              <Link className={productState} to="/product" onClick={setProduct}>
                Products
              </Link>
              {/* Badged */}
              <Badge badgeContent={totalItems} color="primary">
                <Link className={cartState} to="/cart" onClick={setCart}>
                  <img
                    alt="cart"
                    title="cart"
                    className="nav-cart"
                    src={cartImage2}
                  />
                </Link>
              </Badge>
            </BrowserRouter>
          </h2>
        </nav>
      </div>
    </>
  );
}

export default Nav;
