import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/Feature/Slice";
const Laptop = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [slicedata, setSliceData] = useState(8);
  const handleLoadMore = () => {
    setSliceData(slicedata + 4);
  };

  useEffect(() => {
    axios
      .get("https://ecommercebackend-q2uy.onrender.com/api/datafind")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="Welcome">Laptop And Accessories</div>

      <div className="LaptopConatiner">
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
        <div className="LaptopContainer2">
          {/* {data
            .filter((item) => item.category === "laptop")
            .map((item, index) => { */}
          {data
            .filter((item) => item.category === "laptop")
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
                  <div className="laptop_div">
                    <Link to={`/single/${item.id}`}>
                      <img
                        className="Laptop_image"
                        src={item.image}
                        alt="Not Found"
                      />
                    </Link>
                  </div>
                  <div className="LaptopmodelName"> {item.model}</div>
                  <div className=" LaptopPrice-of-All">
                    &#8377;&nbsp;{item.price}
                  </div>

                  <button
                    className="buttonforAll"
                    onClick={() =>
                      dispatch(addtoCart({ id, image, price, quantity, model }))
                    }
                  >
                    Add Cart
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>
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

export default Laptop;
