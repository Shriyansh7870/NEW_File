import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
function Register() {
  const navi = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
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
      const url = "http://localhost:4000/api/users";
      const { data: res } = await axios.post(url, data);
      navi("/");
      console.log(res.message);
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
        <h1 id="heading">Register</h1>
        <label id="font" htmlFor="name">
          Name:
        </label>
        <input
          className="text2"
          placeholder="First Name"
          type="email"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          value={data.firstName}
        />
        <br />
        <br />
        <label id="font">Email: </label>
        <input
          className="text2"
          placeholder="Last Name"
          type="email"
          name="lastName"
          id="lastName"
          onChange={handleChange}
          value={data.lastName}
        />
        <br />
        <br />
        <label id="font">Set Password: </label>
        <input
          className="text3"
          type="email"
          name="email"
          id="email"
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
          Submit
        </button>
        <div className="or1">OR</div>
        <NavLink to="/login" className="nextpage1">
          Go To Login Page
        </NavLink>
      </form>
    </>
  );
}

export default Register;
