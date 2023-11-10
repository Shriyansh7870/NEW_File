import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RemoveItem } from "../Redux/Feature/Slice";

export default function Cart() {
  const selector = useSelector((state) => state.Cart.cart);
  console.log(selector);
  const dispatch = useDispatch();
  const price = selector.map((item) => parseInt(item.price));
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    sum = price[i] + sum;
  }

  return (
    <div>
      {selector.map((item, index) => {
        return (
          <div className="furnitureChild" key={index}>
            <div>
              <img className="furniture_Img" src={item.image} alt="Not Found" />
            </div>
            <div className="titel">{item.title}</div>
            <div className="price">&#8377;&nbsp;{item.price}</div>
            <button onClick={() => dispatch(RemoveItem({ id: item.id }))}>
              REMOVE
            </button>
          </div>
        );
      })}
      <div>
        <span>{sum}</span>
      </div>
    </div>
  );
}
