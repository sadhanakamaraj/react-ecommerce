import React, { useState } from "react";
import "../Login/login.css";
// import left from "../../projectimg/e-commerce-website-Design.gif";
// import logo from "../../projectimg/black.svg";
import { validemail, validpassword } from "../Login/Reguexfile";
const Loginform = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
  const [errormesg, setrerro] = useState("");
  let hansleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  let handlesubmit = (e) => {
    e.preventDefault();
    if (!validemail(values.email))
      return setrerro("plese enter valid email id");
    if (!validpassword(values.password))
      return setrerro(
        "Check a password between 8 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter."
      );
    if (values.email !== "" && values.password !== "") {
      window.location.assign("/dashbord");
    }
  };
  return (
    <div className="lcontainer">
      <div className="classi">
        <div className="lef">
          {/* <img src={left} id="leftimge" /> */}
        </div>
        <div className="righ">
          <form className="form" onSubmit={handlesubmit}>
            <p className="heading">Sign in</p>
            {/* <img src={logo} className="imgg" /> */}
            {errormesg.length > 0 && (
              <span style={{ color: "red", fontSize: 15 }}>{errormesg}</span>
            )}
            <input
              className="input"
              placeholder="email"
              type="text"
              name="email"
              value={values.email}
              onChange={hansleChange}
            />

            <input
              className="input"
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={hansleChange}
            />

            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Loginform;