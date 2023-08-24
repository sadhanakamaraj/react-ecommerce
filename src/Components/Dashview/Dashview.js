import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Datasfile/datafile.css";
import { useNavigate, useParams } from "react-router-dom";
import Bnavbar from "../navbar/Bnavbar";
import { Rating } from "@mui/material";

const Dashview = (props) => {
  const [data, setdata] = useState([]);
  const { product_id } = useParams();
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
    axios
      .get(`http://localhost:3000/Products?product=${product_id}`)
      .then((res) => {
        setdata(res.data);
        //   console.log(res.data);
      });
  }, []);
  let findeprod = props.produrl;
  // console.log("pro", findeprod);
  const filterd = data.filter((prod) => {
    return prod.category === findeprod;
  });
  let siliceprod = filterd.slice(0, 3);
  // console.log("find:", filterd);
  const navigate = useNavigate();

  return (
    <>
      <div className="carddiv ">
        {siliceprod.map((e) => {
          return (
            <>
              <div
                className=" cursor-pointer border-radius-9 card carddi d-flex  align-item-center mb-4 "
                role="button"
                style={{ width: "30%" }}
              >
                <div
                  onClick={() => navigate(`/product/${e.product_id}`)}
                  className="p-4 "
                >
                  <img
                    className="imgview"
                    variant="top"
                    src={e.img_link}
                    width={200}
                  />
                  <h4 className="card-title  text-truncate">
                    {e.product_name}
                  </h4>
                  <div className="d-flex ">
                    <h5 className="mx-4">
                      <del style={{ color: "red" }}>{e.actual_price}</del>
                    </h5>
                    <h5>
                      <b style={{ color: "green" }}>{e.discounted_price}</b>
                    </h5>
                  </div>
                  <div className="disc">
                    <p>
                      {e.discount_percentage}
                      <br />
                      off
                    </p>
                  </div>
                  {/* <div className="rating">
                    <p>{e.rating}&#9733;</p>
                  </div> */}
                </div>
                <Rating
                  className="star"
                  name="read-only"
                  precision={0.5}
                  value={e.rating}
                  readOnly
                />
                <div className="btns  ">
                  <button
                    className="btn btn-info mt-4 mb-4"
                    onClick={() => checkcart(e)}
                  >
                    Add TO Cart
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
    </>
  );
};

export default Dashview;
