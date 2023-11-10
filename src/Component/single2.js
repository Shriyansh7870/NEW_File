import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single2() {
  const { id } = useParams();
  const newid = parseInt(id);
  console.log(newid);
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/datafind2")
      .then((res) => setMobileData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  console.log(mobileData);

  return (
    <div>
      {mobileData
        .filter((item) => item.id == newid)
        .map((item, index) => {
          return (
            <div className="SingleParentConatiner">
              <div key={index} className="page_single_image">
                <img src={item.image} alt="Not Found" />
              </div>
              <div className="textCotainer">
                <h2 className="modelName">{item.model}</h2>
                <hr></hr>
                <h2 className="Price-of-All">{item.price}</h2>

                <h2>Specifications:</h2>
                <ul>
                  <li>
                    <h2>Type:{item.specs.Type}</h2>
                  </li>
                  <li>
                    <h2>Weight:{item.specs.Weight}</h2>
                  </li>
                  <li>
                    <h2>Brand:{item.specs.Brand}</h2>
                  </li>
                  <li>
                    <h2>Packaging:{item.specs.Packaging}</h2>
                  </li>
                </ul>
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

export default Single2;
