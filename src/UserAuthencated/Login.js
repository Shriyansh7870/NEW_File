import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  const navi = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <form className="center1" onSubmit={handleSubmit}>
        <h1 id="heading">Login to Account</h1>
        <label id="font">Set Password: </label>
        <input
          className="text3"
          type="email"
          name="email"
          id="Password"
          onChange={handleChange}
          value={data.email}
        ></input>
        <br />
        <br />
        <label id="font">Set Password: </label>
        <input
          className="text3"
          placeholder="Enter Password"
          type="password"
          name="password"
          id="Password"
          onChange={handleChange}
          value={data.password}
        ></input>
        <br></br>
        <br></br>
        {error && <div className="errormessage">{error}</div>}
        <button className="button1" onClick={handleSubmit}>
          SignIn
        </button>
        <div className="or1">OR</div>
        <NavLink to="/" className="nextpage1">
          Signup
        </NavLink>
      </form>
    </>
  );
}

export default Login;
