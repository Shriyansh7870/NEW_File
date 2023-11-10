import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../Redux/Feature/Slice";
const Laptop = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/datafind2")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  return (
    <>
      <div className="Welcome">Laptop And Accessories</div>
      <div className="Product_View">
        <Carousel
          infiniteLoop={true}
          useKeyboardArrows
          autoPlay
          interval={3000}
          stopOnHover={false}
          stopOnInteraction={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <img
              className="slide_image"
              src="https://img.freepik.com/free-vector/flat-design-fast-food-facebook-template_23-2149135961.jpg"
              alt="not found"
            />
          </div>
          <div>
            <img
              className="slide_image"
              src="https://img.lovepik.com/desgin_photo/45004/2500_list.jpg!/fw/431"
              alt="not found"
              // width="100%"
            />
          </div>
          <div>
            <img
              className="slide_image"
              src="https://c4.wallpaperflare.com/wallpaper/261/907/766/kfc-fast-food-design-wallpaper-preview.jpg"
              alt="not found"
              // width="100%"
            />
          </div>
          <div>
            <img
              className="slide_image"
              src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-world-vegetarian-day-celebration_23-2150746551.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais"
              alt="not found"
              // width="100%"
            />
          </div>
          <div>
            <img
              className="slide_image"
              src="https://static.vitra.com/media-resized/d7RMUrJgu8F7qCr0T9gCW3RLJpF85dcYwJQfbEzPmM4/fill/1024/676/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0Lzc3MjUwMTcvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC83ODMzMzcxOS5qcGc.jpg"
              alt="not found"
              // width="100%"
            />
          </div>
        </Carousel>
      </div>
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
          {data
            .filter((item) => item.category === "laptop")
            .map((item, index) => {
              const {
                id = item.id,
                image = item.image,
                price = parseInt(item.price),
                model = item.model,
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
                      dispatch(addtoCart({ id, image, model, price }))
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
    </>
  );
};

export default Laptop;
