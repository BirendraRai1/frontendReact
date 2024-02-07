import React, { useEffect } from "react";
import SummaryCard from "../SummaryCard";
import clearCartImage from "../../images/empty-cart.svg";
import crossImage from "../../images/cross3.svg";
import { useSelector, useDispatch } from "react-redux";
import productSlice from "../../redux/slices/productSlice";
import variableSlice from "../../redux/slices/variableSlice";
const action = productSlice.actions;
const action1 = variableSlice.actions;
import "./cart.css";

function Cart() {
  const selectProduct = useSelector((store) => store.productState);
  const { totalItems, totalAmount } = useSelector(
    (store) => store.variableState
  );
  const dispatch = useDispatch();
  const cartProducts = selectProduct.filter((product) => product.added);
  //set Total items
  dispatch(action1.setTotalItems(cartProducts.length));

  //calculate Total Amount
  let sum = cartProducts
    .map((product) => {
      let price = product.price;
      let quantity = product.quantity;
      let total = price * quantity;
      return total;
    })
    .reduce((acc, elem) => acc + elem, 0);

  //useEffect
  useEffect(() => {
    dispatch(action1.setTotalAmount(Number(sum).toFixed(2)));
  }, [sum]);
  return (
    <>
      <SummaryCard items={totalItems} amount={totalAmount} />
      {/* Empty Cart button */}
      {cartProducts.length > 0 && (
        <div>
          {" "}
          <button
            className="clear-cart-button"
            onClick={() => dispatch(action.emptyCart(selectProduct))}
          >
            <img
              className="clear-cart-image"
              src={clearCartImage}
              alt="Empty Cart"
              title="Empty Cart"
            />{" "}
          </button>
          <h3 className="your-products">Your Products</h3>
        </div>
      )}
      {/* Get Products */}
      <div className="cart-container">
        {selectProduct
          .filter((product) => product.added)
          .map((product) => {
            let { id, title, imageUrl, price, quantity } = product;

            //if quantity>0
            if (quantity > 0) {
              return (
                <div key={id} className="cart-products">
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <h3 className="cart-shoe-name">{title}</h3>
                    <button
                      className="cart-product"
                      onClick={() => dispatch(action.remove(product))}
                    >
                      <img
                        src={crossImage}
                        height={30}
                        alt="Remove"
                        title="Remove"
                      />
                    </button>
                  </div>
                  <br />
                  <h2 className="shoe-price-cart">{price}</h2>
                  <label htmlFor="quantity">Items</label>
                  <button
                    className="item-button"
                    onClick={() => dispatch(action.decrementProduct(product))}
                  >
                    -
                  </button>
                  <input
                    readOnly
                    className="quantity"
                    maxLength="3"
                    type="text"
                    id="quantity"
                    value={quantity}
                  />
                  <button
                    className="item-button"
                    onClick={() => dispatch(action.incrementProduct(product))}
                  >
                    +
                  </button>
                  <br />
                  <img className="cart-shoe-image" alt={title} src={imageUrl} />
                  <br />
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default Cart;
