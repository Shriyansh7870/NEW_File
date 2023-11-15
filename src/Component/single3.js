import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single3() {
  const { id } = useParams();
  // const newid = parseInt(id);
  console.log(id);
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommercebackend-q2uy.onrender.com/api/datafind")
      .then((res) => setMobileData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(mobileData);

  return (
    <div>
      {mobileData
        .filter((item) => item.id === id)
        .map((item, index) => {
          return (
            <div className="SingleParentConatiner">
              <div key={index} className="page_single_image">
                <img src={item.image} alt="Not Found" />
              </div>
              <div className="textCotainer">
                <h2 className="modelName">{item.model}</h2>
                <hr></hr>

                <h1>Specifications:</h1>
                <ul>
                  <li>
                    <h2>Material:{item.specs.Material}</h2>
                  </li>
                  <li>
                    <h2>Size:{item.specs.Size}</h2>
                  </li>
                  <li>
                    <h2>Color:{item.specs.Color}</h2>
                  </li>
                  <li>
                    <h2>Style:{item.specs.Style}</h2>
                  </li>
                  <li>
                    <h2>Pattern:{item.specs.Pattern}</h2>
                  </li>
                </ul>
                <h2 className="Price-of-All">{item.price}</h2>
                <button className="buttonforAll">
                  Add Cart
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Single3;
