import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single() {
  const { id } = useParams();
  // const newid = parseInt(id);
  console.log(id);
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/datafind")
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
                <h2 className="Price-of-All">{item.price}</h2>

                <h2>Specifications:</h2>
                <ul>
                  <li>
                    <h2>RAM:{item.specs.RAM}</h2>
                  </li>
                  <li>
                    <h2>ROM: {item.specs.ROM}</h2>
                  </li>
                  <li>
                    <h2>Expandable Memory: {item.specs.expandableMemory}</h2>
                  </li>
                  <li>
                    <h2>Display: {item.specs.display}</h2>
                  </li>
                  <li>
                    <h2>Processor: {item.specs.processor}</h2>
                  </li>
                  <li>
                    <h2>Graphics: {item.specs.graphics}</h2>
                  </li>
                  <li>
                    <h2>Operating System: {item.specs.operatingSystem}</h2>
                  </li>
                  <li>
                    <h2>Battery: {item.specs.battery}</h2>
                  </li>
                </ul>
                <button className="singlebuttonForAll">
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

export default Single;
