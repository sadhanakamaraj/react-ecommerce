import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../Components/Datasfile/datafile.css";
import Bnavbar from "./navbar/Bnavbar";
import { Rating } from "@mui/material";

const Searchfild = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  console.log("query", searchQuery);

  const addToCart = (data) => {
    axios
      .post("http://localhost:3000/cart", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateqnty = (data) => {
    data.quantity = data.quantity + 1;
    axios
      .put(`http://localhost:3000/cart/${data.id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkcart = (product) => {
    let data = {
      id: product.product_id,
      name: product.product_name,
      image: product.img_link,
      actual_price: product.actual_price,
      discounted_price: product.discounted_price,
      discount_percentage: product.discount_percentage,

      quantity: 1,
    };
    axios
      .get(`http://localhost:3000/cart/${product.product_id}`)
      .then((res) => {
        updateqnty(res.data);
      })
      .catch((err) => {
        console.log(err);
        addToCart(data);
      });
  };
  useEffect(() => {
    // Function to fetch data from the API based on the searchQuery
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/Products?q=${searchQuery}`
        );

        const data = await response.json();
        setSearchResults(data);
        //   console.log("mairiu", response);
        //   console.log("ol:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Only fetch data if there's a valid searchQuery
    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);
  console.log("rr", searchResults);
  const { product_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Products?product=${product_id}`)
      .then((res) => {
        console.log(res);
        //   console.log(res.data);
      });
  }, []);

  return (
    <div>
      <Bnavbar />
      <h2>Search Results for: {searchQuery}</h2>
      <div className="carddiv">
        {searchResults.map((e) => {
          console.log("ser", e.rating);
          return (
            <>
              <div
                className=" cursor-pointer border-radius-9 carddi card d-flex m-4 align-item-center "
                role="button"
                // style={{ width: "30%" }}
              >
                <div
                  onClick={() => navigate(`/product/${e.product_id}`)}
                  className="p-4 "
                >
                  <img className="imgview" variant="top" src={e.img_link} />
                  <h4 className="card-title  text-truncate  ">
                    {e.product_name}
                  </h4>
                  <div className="d-flex ">
                    <h5 className="mx-4">
                      <del style={{ color: "red" }}>{e.actual_price}</del>
                    </h5>
                    <h3>
                      <b style={{ color: "green" }}>{e.discounted_price}</b>
                    </h3>
                  </div>
                  <div className="disc">
                    <p>
                      {e.discount_percentage}
                      <br />
                      off
                    </p>
                  </div>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={e.rating}
                    readOnly
                  />
                </div>
                <div className="btns  ">
                  <button
                    className="btn btn-info  mt-4 mb-4"
                    onClick={() => checkcart(e)}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-primary mx-4 mt-4 mb-4"
                    onClick={() => navigate("/bynow")}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Searchfild;
