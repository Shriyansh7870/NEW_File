import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
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
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Navbar() {
  const countItem = useSelector((state) => state.Cart.cart);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hamburgur, sethamburgur] = useState(false);

  const handleSearch = async () => {
    try {
      await axios.get("http://localhost:4000/api/search").then((res) => {
        console.log(res.data);
        setResults(res.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <div className="navbar">
          <div className="title">
            <h1>TREAT</h1>
          </div>

          {/* navlinks............... */}
          <ul className={hamburgur ? "navlink navlinkterminate" : "navlink"}>
            {/* home.................. */}
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

              <ul class="submenu">
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
            {/* acessories............ */}

            {/* electronics........... */}

            <li>
              <NavLink
                className="navlink-names"
                to="/mobile"
                onClick={() => sethamburgur(!hamburgur)}
              >
                Mobile
              </NavLink>
              <ul class="submenu">
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
            {/* grocery........... */}
            <li>
              <NavLink
                className="navlink-names"
                to="/grocerry"
                onClick={() => sethamburgur(!hamburgur)}
              >
                Grocery
              </NavLink>
            </li>

            {/* Footwear........... */}
            <li>
              <NavLink
                className="navlink-names"
                to="/footwear"
                onClick={() => sethamburgur(!hamburgur)}
              >
                FootWear
              </NavLink>
            </li>

            {/* electronics........... */}
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
                onChange={(e) => setQuery(e.target.value)}
              />{" "}
              <button className="logosearchbar" onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <ul>
              {results.map((result) => (
                <li key={result._id}>
                  {result.name} - {result.description}
                </li>
              ))}
            </ul>
            <div className="logo">
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping logoCart"></i>{" "}
                <span>{countItem.length}</span>
              </NavLink>
              <NavLink to="/register">
                <i className="fa-solid fa-user  userid"></i>{" "}
              </NavLink>
              <i className="fa-regular fa-heart"></i>
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
      </BrowserRouter>
    </div>
  );
}
