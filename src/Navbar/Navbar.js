import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Electronic from "../Component/All";
import Home from "../Component/Home";
import Grocerry from "../Component/Grocerry";
import Laptop from "../Component/Laptop";
import Clothes from "../Component/Clothes";
import Mobile from "../Component/Mobile";
import Error from "../Dynamic/Error";
import Cart from "../Dynamic/Cart";
import Single from "../Dynamic/Single";
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
import Single2 from "../Component/single2";
import Single3 from "../Component/single3";
import Single1 from "../Component/single1";
const Navbar = () => {
  const [ismobiledata, setIsMobileData] = useState(false);
  const [islaptopdata, setIsLaptopData] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileData(!ismobiledata);
  };
  const toggleMobileMenu2 = () => {
    setIsLaptopData(!islaptopdata);
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logo">
          <p>Awesome Website</p>
        </div>
        <ul className="Designul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clothes">Clothes</Link>
          </li>
          <li>
            <Link to="/grocerry">Grocerry</Link>
          </li>
          <li>
            <li>
              <div onClick={toggleMobileMenu2} className="mobile-link">
                <Link to="/laptop">Laptop</Link>
              </div>
              {islaptopdata && (
                <ul className="mobile_sub">
                  <li>
                    <Link to="/laptop/hp">Hp</Link>
                  </li>
                  <li>
                    <Link to="/laptop/lenovo">Lenovo</Link>
                  </li>
                  <li>
                    <Link to="/laptop/dell">Asus</Link>
                  </li>
                </ul>
              )}
            </li>
          </li>
          <li>
            <Link to="/electronic">Shoes</Link>
          </li>
          <li>
            <div onCli={toggleMobileMenu} className="mobile-link">
              <Link to="/mobile">Mobile</Link>
            </div>
            {ismobiledata && (
              <ul className="mobile_sub">
                <li>
                  <Link to="/mobile/iphone">Iphone</Link>
                </li>
                <li>
                  <Link to="/mobile/oneplus">Oneplus</Link>
                </li>
                <li>
                  <Link to="/mobile/samsung">Samsung</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="searchbar">
          <ul>
            <li>
              <input
                className="searchinput"
                type="text"
                placeholder="Search..."
              />
              <button className="button-search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
            </li>
            <li>
              <Link to="/register">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronic" element={<Electronic />} />
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
            <h2>Company Name</h2>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
          <div className="footer-section">
            <h2>Products</h2>

            <li>
              <Link to="/electronic">Electronic</Link>
            </li>
            <li>
              <Link to="/clothes">Clothes</Link>
            </li>
            <li>
              <Link to="/grocerry">Grocerry</Link>
            </li>
          </div>
          <div className="footer-section">
            <li>
              <Link to="/support">Support</Link>
            </li>

            <p>FAQ</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <h2 className="companyName">&copy; 2023 TRY THE BEST </h2>
      </footer>
    </BrowserRouter>
  );
};

export default Navbar;
