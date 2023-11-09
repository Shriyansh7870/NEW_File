import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Laptop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/datafind")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="Welcome">Laptop And Accessories</div>
      <div className="maincontainer">
        <div className="sidediv">
          <Link className="sidebarLink" to="/laptop/hp">
            Hp
          </Link>
          <Link className="sidebarLink" to="/laptop/lenovo">
            Lenovo
          </Link>
          <Link className="sidebarLink" to="/laptop/dell">
            Dell
          </Link>
          <Link className="sidebarLink" to="/">
            Home
          </Link>
          <Link className="sidebarLink" to="/electronic">
            Electronic
          </Link>
          <Link className="sidebarLink" to="/clothes">
            Clothes
          </Link>
        </div>
        <div className="conatiner">
          {data
            .filter((item) => item.category === "laptop")
            .map((item, index) => {
              return (
                <div key={index} className="child_conatiner">
                  <div className="laptop_div">
                    <Link to={`/single/${item.id}`}>
                      <img
                        className="Laptop_image"
                        src={item.image}
                        alt="Not Found"
                      />
                    </Link>
                  </div>
                  <div className="modelName"> {item.model}</div>
                  <div className="Price-of-All">{item.price}</div>
                  <Link to="/cart">
                    <button className="buttonforAll">
                      Add Cart
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Laptop;
