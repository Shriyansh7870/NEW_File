import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addtoCart } from "../Redux/Slice";
import { useDispatch } from "react-redux";

const OnePlus = () => {
  const [data, setData] = useState([]);
  const [slicedata, setSliceData] = useState(8);
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    setSliceData(slicedata + 4);
  };

  useEffect(() => {
    axios
      .get("https://ecommercebackend-q2uy.onrender.com/api/datafind2")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="Welcome">OnePlus & Accessories</div>

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
            .filter((item) => item.type === "oneplus")
            .slice(0, slicedata)
            .map((item, index) => {
              const {
                id = item.id,
                image = item.image,
                price = parseInt(item.price),
                model = item.model,
                quantity = item.quantity,
              } = item;
              return (
                <div className="child_conatiner">
                  <div className="laptop_div">
                    <Link to={`/single/${item.id}`} key={index}>
                      <img
                        className="Laptop_image"
                        src={item.image}
                        alt="Not Found"
                      />
                    </Link>
                  </div>
                  <div modelName className="LaptopmodelName">
                    {" "}
                    {item.model}
                  </div>
                  <div className="Price-of-All">{item.price}</div>
                  <button
                    className="buttonforAll"
                    onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    }
                  >
                    Add Cart
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  <div></div>
                </div>
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

export default OnePlus;
