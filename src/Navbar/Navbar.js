import { NavLink, Routes, Route, Link } from "react-router-dom";
import SearchResults from "../Component/SearchResult";
import Home from "../Component/Home";
import Electronic from "../Component/All";
import Grocerry from "../Component/Grocerry";
import Laptop from "../Component/Laptop";
import Clothes from "../Component/Clothes";
import Mobile from "../Component/Mobile";
import Error from "../Dynamic/Error";
import Cart from "../Dynamic/Cart";
import Iphone from "../Component/Iphone";
import Oneplus from "../Component/Oneplus";
import Samsung from "../Component/Samsung";
import Hp from "../Component/Hp";
import Asus from "../Component/Dell";
import Lenovo from "../Component/Lenovo";
import LogIn from "../UserAuthencated/Login";
import Register from "../UserAuthencated/Signup";
import Contact from "../Details/Contact";
import Support from "../Details/support";
import About from "../Details/About";
import Single3 from "../Component/single3";
import Single2 from "../Component/single2";
import Single from "../Dynamic/Single";
import Single1 from "../Component/single1";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlaceOrder from "../Component/PlaceOrder";
import FinalMessage from "../Component/FinalMessage";

export default function Navbar() {
  const countItem = useSelector((state) => state.Cart.cart);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hamburgur, sethamburgur] = useState(false);
  const [value, setValue] = useState({ value: "", button: "" });
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("name");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios
        .get("https://ecommercebackend-q2uy.onrender.com/", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setValue({
            value: userName,
            button: "Logout",
          });
        })
        .catch((error) => {
          console.log("Error is ocuured:", error);
        });
    } else {
      setValue({
        value: "Profile",
        button: "Login",
      });
    }
  }, [token, navigate]);

  const HandleChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    try {
      const response = await axios.get(
        `https://ecommercebackend-q2uy.onrender.com/api/serachProduct?name=${inputValue}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  };
  return (
    <div>
      <div className="navbar">
        <div className="title">
          <h1>TREAT</h1>
        </div>
        <ul className={hamburgur ? "navlink navlinkterminate" : "navlink"}>
          <li>
            {" "}
            <NavLink
              className="navlink-names"
              to="/"
              onClick={() => sethamburgur(!hamburgur)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink-names"
              to="/laptop"
              onClick={() => sethamburgur(!hamburgur)}
            >
              Laptop
            </NavLink>

            <ul className="submenu">
              <li>
                <NavLink className="navlink-names" to="/laptop/hp">
                  Hp
                </NavLink>
              </li>

              <li>
                <NavLink className="navlink-names" to="/laptop/dell">
                  Dell
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink-names" to="/laptop/lenovo">
                  Lenovo
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="navlink-names"
              to="/mobile"
              onClick={() => sethamburgur(!hamburgur)}
            >
              Mobile
            </NavLink>
            <ul className="submenu">
              <li>
                <NavLink className="navlink-names" to="mobile/iphone">
                  Iphone
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink-names" to="/mobile/oneplus">
                  OnePlus
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink-names" to="/mobile/samsung">
                  Samsung
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              className="navlink-names"
              to="/grocerry"
              onClick={() => sethamburgur(!hamburgur)}
            >
              Grocery
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink-names"
              to="/footwear"
              onClick={() => sethamburgur(!hamburgur)}
            >
              FootWear
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink-names"
              to="/clothes"
              onClick={() => sethamburgur(!hamburgur)}
            >
              Clothes
            </NavLink>
          </li>
        </ul>

        <div className="searchbar-logo">
          <div className="whole-searchbar">
            <input
              type="text"
              placeholder="Search here..."
              className="searchbar"
              id="searchInput"
              value={query}
              onChange={HandleChange}
            />{" "}
            <Link to="/searchresult" state={results}>
              <button className="logosearchbar">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </Link>
          </div>
          <div className="logodiv">
            <div className="logo">
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping logoCart"></i>{" "}
                <span>{countItem.length}</span>
              </NavLink>

              <div className="AccountLoginMainContainer">
                <i className="fa-solid fa-user  userid"></i>
                <div className="AccountLoginMainContainer2">
                  <span>{value.value}</span>
                  {value.button === "Logout" ? (
                    <span onClick={handleLogout}>{value.button}</span>
                  ) : (
                    <span>
                      <NavLink to="/login">{value.button}</NavLink>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="Hamburgur" onClick={() => sethamburgur(!hamburgur)}>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footwear" element={<Electronic />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/grocerry" element={<Grocerry />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/laptop/hp" element={<Hp />} />
        <Route path="/laptop/dell" element={<Asus />} />
        <Route path="/laptop/lenovo" element={<Lenovo />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/mobile/iphone" element={<Iphone />} />
        <Route path="/mobile/oneplus" element={<Oneplus />} />
        <Route path="/mobile/samsung" element={<Samsung />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/single2/:id" element={<Single2 />}></Route>
        <Route path="/single1/:id" element={<Single1 />}></Route>
        <Route path="/single3/:id" element={<Single3 />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/searchresult" element={<SearchResults />}></Route>
        <Route path="/Placeorder" element={<PlaceOrder />}></Route>
        <Route path="/finalMessage" element={<FinalMessage />}></Route>
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>TREAT WOO... </h2>
            <p>
              To learn more about TreatWoo, I recommend visiting the website
              directly or searching for recent Product, Clothes, or user
            </p>
          </div>
          <div className="footer-section">
            <li>
              <NavLink to="/about" className="footertext">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footertext">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" className="footertext">
                Support
              </NavLink>
            </li>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="footer-section">
            <li>
              <NavLink to="/footwear" className="footertext">
                FootWear
              </NavLink>
            </li>
            <li>
              <NavLink to="/clothes" className="footertext">
                Clothes
              </NavLink>
            </li>
            <li>
              <NavLink to="/laptop/hp" className="footertext">
                Hp
              </NavLink>
            </li>
            <li>
              <NavLink to="/grocerry" className="footertext">
                Grocerry
              </NavLink>
            </li>
          </div>
          <div className="footer-section">
            <li>
              <NavLink to="/laptop" className="footertext">
                Laptop
              </NavLink>
            </li>
            <li>
              <NavLink to="/mobile/samsung" className="footertext">
                Samsung
              </NavLink>
            </li>
            <li>
              <NavLink to="/mobile/Oneplus" className="footertext">
                Oneplus
              </NavLink>
            </li>
            <li>
              <NavLink to="/mobile/Iphone" className="footertext">
                Iphone
              </NavLink>
            </li>
          </div>
          <div className="footer-section">
            <li>
              <NavLink
                to="https://www.linkedin.com/in/shri7870/"
                className="footertext"
              >
                <i class="fa-brands fa-linkedin"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://github.com/Shriyansh7870"
                className="footertext"
              >
                <i class="fa-brands fa-square-github"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://mail.google.com/mail/u/0/#inbox"
                className="footertext"
              >
                <i class="fa-solid fa-envelope"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://www.instagram.com/shriyansh7870/"
                className="footertext"
              >
                <i class="fa-brands fa-instagram"></i>
              </NavLink>
            </li>
          </div>
        </div>
        <h2 className="companyName">&copy; 2023 TRY THE BEST </h2>
      </footer>
    </div>
  );
}
