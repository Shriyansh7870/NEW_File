import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Hp = () => {
  const [data, setData] = useState([]);
  const [slicedata, setSliceData] = useState(8);
  const handleLoadMore = () => {
    setSliceData(slicedata + 4);
  };

  useEffect(() => {
    axios
      .get("https://ecommercebackend-q2uy.onrender.com/api/datafind")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="Welcome">Hp Accessories</div>
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
            .filter((item) => item.type === "hp")
            .slice(0, slicedata)
            .map((item, index) => {
              return (
                <Link to={`/single/${item.id}`} key={index}>
                  <div className="child_conatiner">
                    <div className="laptop_div">
                      <img
                        className="Laptop_image"
                        src={item.image}
                        alt="Not Found"
                      />
                    </div>
                    <div modelName className="LaptopmodelName">
                      {" "}
                      {item.model}
                    </div>
                    <div className="Price-of-All">{item.price}</div>
                    <button className="buttonforAll">
                      Add Cart
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <div></div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="LoadMoreButton">
        <button onClick={handleLoadMore} className="laptop-loadmore">
          Load More
        </button>
      </div>
    </>
  );
};

export default Hp;
