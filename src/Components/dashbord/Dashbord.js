import React from "react";
// import Dashview from "../Dashview/Dashviews";
import { useNavigate } from "react-router-dom";
import "../dashbord/dashboard.css";
 import banner1 from "../../images/banner1.jpg";
 import banner2 from "../../images/banner2.jpg";
 import banner3 from "../../images/banner3.jpg";
// import cab from "../../projectimg/SArath ban 33.jpg";

import Carousel from "react-bootstrap/Carousel";

import Bnavbar from "../navbar/Bnavbar";
import Dashview from "../Dashview/Dashview";

export const Dashabord = () => {
  const navigate = useNavigate();

  return (
    <>
      <Bnavbar />
      <Carousel fade className="mb-4">
        <Carousel.Item>
           <img src={banner3} className="backimgs " /> 
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner2} className="backimgs " /> 
        </Carousel.Item>
        <Carousel.Item>
           <img src={banner1} className="backimgs " /> 
        </Carousel.Item>
      </Carousel>

      <Dashview
        produrl={
          "Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones"
        }
      />
      <span
        className="spans"
        onClick={() => navigate("/mobiles")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>
      <Dashview
        produrl={
          "Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"
        }
      />
      <span
        className="spans"
        onClick={() => navigate("/usb")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>
      <Dashview
        produrl={
          "Electronics|HomeTheater,TV&Video|Televisions|SmartTelevisions"
        }
      />
      <span
        className="spans"
        onClick={() => navigate("/tv")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>
      <Dashview
        produrl={"Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"}
      />
      <span
        className="spans"
        onClick={() => navigate("/remotes")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>
      <Dashview produrl={"Electronics|WearableTechnology|SmartWatches"} />
      <span
        className="spans"
        onClick={() => navigate("/smartwatches")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>
      <Dashview
        produrl={"Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear"}
      />
      <span
        className="spans"
        onClick={() => navigate("/headphones")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>

      <Dashview
        produrl={
          "Home&Kitchen|Kitchen&HomeAppliances|Vacuum,Cleaning&Ironing|Irons,Steamers&Accessories|Irons|DryIrons"
        }
      />
      <span
        className="spans"
        onClick={() => navigate("/homeappliances")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>
      <Dashview
        produrl={
          "Home&Kitchen|Kitchen&HomeAppliances|SmallKitchenAppliances|MixerGrinders"
        }
      />
      <span
        className="spans"
        onClick={() => navigate("/mixergrinders")}
        style={{
          display: "flex",
          cursor: "pointer",
          justifyContent: "flex-end",
        }}
      >
        see more...
      </span>
    </>
  );
};
