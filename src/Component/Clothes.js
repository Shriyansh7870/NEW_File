import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Clothes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/datafind")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="Welcome">Laptop And Accessories</div>
      <div className="maincontainer">
        <div className="sidediv"></div>
        <div className="conatiner">
          {data
            .filter((item) => item.category === "clothes")
            .map((item, index) => {
              return (
                <Link to={`/single3/${item.id}`} key={index}>
                  <div className="child_conatiner">
                    <img
                      className="Clothes_image"
                      src={item.image}
                      alt="Not Found"
                    />
                    <div className="modelName"> {item.model}</div>
                    <div className="Price-of-All">{item.price}</div>
                    <button className="buttonforAll">
                      Buy-Now
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                    <div></div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Clothes;
