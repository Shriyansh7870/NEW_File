import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://cdn.pixabay.com/photo/2016/03/03/10/17/social-media-1233873_1280.jpg",
    "https://www.themediaant.com/blog/wp-content/uploads/2023/01/How-to-Write-a-Newspaper-Advertisement-2.jpg",
    "https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?cs=srgb&dl=pexels-pixabay-210126.jpg&fm=jpg",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/datafind")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/imageGet")
      .then((res) => {
        setImage(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);
  function CustomArrow({ onClick, direction }) {
    return (
      <div
        className={`custom-arrow custom-arrow-${direction}`}
        onClick={onClick}
      >
        {direction === "left" ? "<" : ">"}
      </div>
    );
  }

  return (
    <>
      <div className="homeConatiner">
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
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <CustomArrow onClick={onClickHandler} direction="left" />
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <CustomArrow onClick={onClickHandler} direction="right" />
              )
            }
          >
            {image.map((img) => (
              <div key={img._id}>
                <img className="slide_image" src={img.url} alt={img.alt} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="Home_best_seller">Best Selling Product</div>
        <div className="Homeconatiner1">
          {data
            .filter((item) => item.id % 16 === 0)
            .map((item, index) => {
              return (
                <Link to={`/single/${item.id}`} key={index}>
                  <div className="HomeChild">
                    <div key={index}>
                      <img
                        className="Home_image"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="HomemodelName"> {item.model}</div>
                      <div className="LaptopPrice-of-All">{item.price}</div>
                      <button className="buttonforAll">
                        Add Cart
                        <i class="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        <div className="AdvertismentforHome">
          {/* <div className="Product_View">
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
              {image.map((img) => (
                <div key={img._id}>
                  <img className="slide_image" src={img.url} alt={img.alt} />
                </div>
              ))}
            </Carousel> */}
          <img
            src={images[currentImage]}
            alt={`not found${currentImage + 1}`}
          />
          {/* </div> */}
        </div>

        <div className="sipping">
          <div className="firstsipping">
            <div>
              <i className="fa-solid imageOne  fa-truck-fast"></i>
            </div>
            <h3> Free Shipping </h3>
            <p>
              Welcome to our online store, where shopping just got even more
              rewarding! We're excited to introduce our exclusive Free Shipping
              offer.
            </p>
          </div>
          <div className="secondsipping">
            <div>
              <i className="fa-solid imageOne  fa-arrows-rotate"></i>
            </div>
            <h3>100% REFUND</h3>
            <p>
              Our 100% Refund Guarantee: Your Peace of Mind, Our Promise.At [Woo
              Treat], your satisfaction is our top priority.
            </p>
          </div>
          <div className="thirdsipping">
            <div>
              <i className="fa-solid imageOne  fa-headset"></i>
            </div>
            <h3>SUPPORT 24/7</h3>
            <p>
              At [Woo Treat], your satisfaction is our priority, and that's why
              we're thrilled to offer 24/7 support. We understand that your
              needs don't follow a schedule, and neither do we.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
