import React, { useState } from "react";

import { RemoveItem } from "../Redux/Feature/Slice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  axios
    .get("http://localhost:4000/api/getcartdata")
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.log("found err", err));
  const price = data.map((item) => item.price);

  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = price[i] + sum;
  }

  return (
    <div>
      <h2 className="cartConatiner">Cart</h2>

      <div className="cart-content">
        <div className="headOfcart">
          <h4>Product</h4>
          <h4>Title</h4>
          <h4>Price</h4>
        </div>

        <div>
          {data &&
            data.map((item, index) => {
              const {
                id = item.id,
                image = item.image,
                model = item.model,
              } = item;
              // const { id = item.id } = item;
              return (
                <div className="content-cart" key={index}>
                  <h2>{item.quantity}</h2>

                  <img src={item.image} alt="Loading..." />
                  <div className="cart-subcontent">
                    <h2>{item.heading}</h2>
                    <button
                      className="remove-cart"
                      onClick={() =>
                        dispatch(RemoveItem({ id, image, model, price }))
                      }
                    >
                      Remove Cart
                    </button>
                  </div>
                  <h2 className="cartprice">{"₹ " + item.price}</h2>
                </div>
              );
            })}
        </div>

        <div className="total">
          <h2>Total </h2>
          <h1>{sum}</h1>
        </div>

        <div className="buy">
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
