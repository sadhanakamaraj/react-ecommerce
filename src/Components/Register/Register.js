import React, { useState } from "react";
import logo from "../../images/logo.jpg";
import { Inputs } from "../Register/Input";
import "../Register/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    errormessage: "",
    confirmpassword: "",
  });
  let input = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errormessage:
        " Name should be 3-16 character and shuldn't include any special character",
      label: "Name",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      require: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errormessage: "its shouldn't be a valid Email ",
      label: "email",
      require: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errormessage:
        "Check a password between 8 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter.",
      label: "password",
      pattern: `^(?=(.*[A-Z]){1})(?=(.*[a-z]){1})(?=(.*[0-9]){1})(?=(.*[@#$%^!&+=.\-_*]){2})([a-zA-Z0-9@#$%^!&+=*.\-_]){8,16}$`,
      require: true,
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm password",
      errormessage: "password don't match",
      label: "confirm password",
      pattern: values.password,
      require: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChage = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  console.log.apply(values);
  const registerbtn = () => {
    console.log(values.password);
    if (
      values.name !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.confirmpassword !== ""
    ) {
      if (values.password === values.confirmpassword) {
        window.location.assign("/login");
      }
    }
  };

  return (
    <>
      <div className="bacground">
        <div className="regbox">
          {/* <img src={logo} alt="nothing" id="logo" /> */}

          <div className="container">
            <form className="regform" onSubmit={handleSubmit}>
              <div className="head">
                <span>Sign up</span>
                <p>Create a free account with your email.</p>
              </div>
              {input.map((inputs) => {
                return (
                  <Inputs
                    key={inputs.id}
                    {...inputs}
                    value={values[inputs.name]}
                    onChage={onChage}
                  />
                );
              })}

              <button onClick={registerbtn}>Register</button>
              <div className="form-footer">
                <p>
                  Have an account?{" "}
                  <Link id="link" to="/login">
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;