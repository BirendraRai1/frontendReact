import React from "react";
import "./product.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import cartImage from "../../images/cart1.svg";
import productSlice from "../../redux/slices/productSlice";
const action = productSlice.actions;
function Product() {
  const selectProduct = useSelector((store) => store.productState);
  const dispatch = useDispatch();
  return (
    <>
      <div className="product-container">
        {selectProduct.map((product) => {
          let { id, imageUrl, title, price } = product;
          return (
            <div key={id} className="home-products">
              <h3 className="shoe-name">{title}</h3>
              <h2 className="shoe-price">{price}</h2>
              <img
                className="products-shoe-image"
                title={title}
                alt={title}
                src={imageUrl}
              />
              {/* <Link key={id} to={`/product/${id}`}>
               
              </Link> */}
              <br />
              <Tooltip title="Add to cart" aria-label="add to cart">
                <button
                  onClick={() => {
                    dispatch(action.add(product));
                  }}
                  className="cart-button"
                >
                  <img
                    className="cart-image"
                    src={cartImage}
                    alt="add to cart"
                  />
                </button>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
