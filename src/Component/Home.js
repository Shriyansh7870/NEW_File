import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/datafind2")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

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
          >
            <div>
              <img
                className="slide_image"
                src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-simple-business-e-commerce-web-page-image_20833.jpg"
                alt="not found"
              />
            </div>
            <div>
              <img
                className="slide_image"
                src="https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2020/06/Zulu-Longines_-homepage.png"
                alt="not found"
                // width="100%"
              />
            </div>
            <div>
              <img
                className="slide_image"
                src="https://media.designrush.com/articles/205879/conversions/Best-MOVIE-POSTERS-Designs-details.jpg"
                alt="not found"
                // width="100%"
              />
            </div>
            <div>
              <img
                className="slide_image"
                src="https://imgeng.jagran.com/images/2023/sep/Amazon%20Great%20Indian%20Festival%201695372555863.jpg"
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
        <div className="Home_best_seller">Best Seller Product</div>
        <div className="Homeconatiner1">
          {data
            .filter((item) => item.id % 12 === 0)
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
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
                  alt="not found"
                />
              </div>
              <div>
                <img
                  className="slide_image"
                  src="https://www.najmc.com/wp-content/uploads/2020/08/ecommerce-marketing.jpg"
                  alt="not found"
                  // width="100%"
                />
              </div>
              <div>
                <img
                  className="slide_image"
                  src="https://static.tnn.in/thumb/msid-104042456,thumbsize-53308,width-1280,height-720,resizemode-75/104042456.jpg"
                  alt="not found"
                  // width="100%"
                />
              </div>
              <div>
                <img
                  className="slide_image"
                  src="https://unbounce.com/photos/1100X400.png"
                  alt="not found"
                  // width="100%"
                />
              </div>
              <div>
                <img
                  className="slide_image"
                  src="https://www.searchenginejournal.com/wp-content/uploads/2020/04/google-shopping-basket-a-5e9daa789d724-scaled.jpg"
                  alt="not found"
                  // width="100%"
                />
              </div>
            </Carousel>
          </div>
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
