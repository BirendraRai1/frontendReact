import React from "react";
import Shoes from "../../shoes.json";
import "./home.css";

function Home() {
  return (
    <>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">JUST DO IT</span>
        <div className="tagline-para">
          Nike has been your companion in happiness, both big and small, for
          over 50 years. Our roots are firmly grounded in India and with its
          people.
        </div>
        <br />
        <br />
        <br />
        <div className="latest-container"></div>
        <hr className="line" />
        &nbsp;&nbsp;
        <span className="latest-designs">Latest Designs</span>&nbsp;&nbsp;
        <hr className="line" />
        <div className="product-container">
          {Object.keys(Shoes).map((keyName) => {
            const shoe = Shoes[keyName];
            return (
              <div className="home-products" key={keyName}>
                <img
                  className="products-shoe-image"
                  alt={shoe.name}
                  src={shoe.img}
                />
                <h3 className="shoe-name">{shoe.name}</h3>
                <h3 className="shoe-price">{shoe.price}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;

// The <br> tag inserts a single line break
//nbsp stands for non breaking space
