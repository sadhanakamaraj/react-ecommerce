import React from "react";
import "../Components/profile.css";
// import sarath from "../projectimg/sarathh.jpg";
const Profile = () => {
  return (
    <>
      <div className="profcont">
        <div id="imgbox">
          {/* <img src={sarath} id="img" /> */}
        </div>
        <div className="namediv ">
          <lable className="lableprofile">Name</lable>
          <span>
            <h5 className="cont">Sadhana Kamaraj</h5>
          </span>
          <lable className="lableprofile">Email</lable>
          <span>
            <h5 className="cont">sadhanakamaraj1810@gmail.com</h5>
          </span>
        </div>
        <div className="addressbar">
          <lable className="lableprofile">Address</lable>
          <p className="cont">
            183/1,TMT,
            <br /> Tirupattur.
          </p>

          <lable className="lableprofile">PinCode</lable>
          <p className="cont">635653</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
