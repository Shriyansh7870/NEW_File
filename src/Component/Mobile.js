import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { addtoCart } from "../Redux/Slice";
import { useDispatch } from "react-redux";
const Mobile = () => {
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
      <div className="Welcome">Mobile & Accessories</div>
      <div className="maincontainer">
        <div className="sidediv">
          <Link className="sidebarLink" to="/mobile/iphone">
            Iphone
          </Link>
          <Link className="sidebarLink" to="/mobile/oneplus">
            Oneplus
          </Link>
          <Link className="sidebarLink" to="/mobile/samsung">
            Samsung
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
            .filter((item) => item.category === "mobile")
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
                <div key={index} className="child_conatiner">
                  <Link to={`/single/${item.id}`}>
                    <img
                      className="Mobile_image"
                      src={item.image}
                      alt="Not Found"
                    />
                  </Link>
                  <div className="modelName"> {item.model}</div>
                  <div className="Price-of-All">{item.price}</div>
                  <button
                    className="buttonforAll"
                    onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    }
                  >
                    Add Cart
                    <i class="fa-solid fa-cart-shopping"></i>
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

export default Mobile;
