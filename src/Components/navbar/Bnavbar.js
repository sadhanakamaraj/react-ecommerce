import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../images/logo.jpg";
import "./navebar.css";
import { RxAvatar } from "react-icons/rx";
import { MdShoppingCart } from "react-icons/md";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";
import Profile from "../Profile";

function Bnavbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [_, setSearchParams] = useSearchParams();

  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchParams({ q: searchQuery });

    try {
      const response = await axios.get(
        `http://localhost:3000/Products?q=${searchQuery}`
      );
      // Handle the response and update the search results in the UI
      console.log("jbj:", response.data); // Assuming the API returns data in the expected format
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error fetching search results:", error);
    }
    navigate(`/search?q=${searchQuery}`);
  };
  //   console.log("q", searchQuery);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="sticky-top back mb-3 p-3">
         <img
          src={logo}
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashbord")}
        /> 
        <form className="navform" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search…"
            className="navinput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <AiOutlineSearch className="searchicon" />
        </form>
        <div className="  toglediv">
          {/* new */}
          <RxAvatar variant="primary" onClick={handleShow} className=" togle" />

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header id="cnvshead" closeButton>
              <Offcanvas.Title>Profile</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="cnvs">
              <Profile />
            </Offcanvas.Body>
          </Offcanvas>

          {/* new */}
          {/* <RxAvatar className="togle" /> */}
          <MdShoppingCart onClick={() => navigate("/cart")} className="togle" />
          <Dropdown className="seti">
            <Dropdown.Toggle variant="#346667" className="set">
              <AiTwotoneSetting className="togle " />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate("/login")}>
                Logout
              </Dropdown.Item>
              <Dropdown.Item onClick={() => navigate("/dashbord")}>
                Dashboard
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
}

export default Bnavbar;
