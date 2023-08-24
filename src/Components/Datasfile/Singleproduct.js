import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Bnavbar from "../navbar/Bnavbar";
import "../Datasfile/singlepage.css";
import { Rating } from "@mui/material";

const Singleproduct = () => {
  const { product_id } = useParams();
  const [dat, setdata] = useState([]);
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
      .get(`http://localhost:3000/Products/?product_id=${product_id}`)
      .then((r) => {
        setdata(r.data[0]);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Bnavbar />
      <div style={{ marginTop: "10%" }}>
        {[dat].map((ele) => {
          let value = 4.5;
          //  ele.rating;

          return (
            <>
              {console.log(ele.product_id)}
              <div className="procontainer ">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={ele.img_link}
                      style={{ width: "85%", height: "80%" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h1>{ele.product_name}</h1>
                    <p>{ele.about_product}</p>
                    <h3>
                      discounted price:
                      <span style={{ color: "green" }}>
                        {ele.discounted_price}
                      </span>
                    </h3>
                    <h3>
                      <del style={{ color: "red" }}>{ele.actual_price}</del>
                    </h3>
                    <h3 id="dicscount"> {ele.discount_percentage}</h3>
                    <Rating
                      name="read-only"
                      precision={0.5}
                      value={value}
                      readOnly
                    />
                    <div className="row">
                      <div className="btnse">
                        <button
                          className="btnsee btn btn-info my-3"
                          onClick={() => checkcart(ele)}
                        >
                          Add to Cart
                        </button>
                        <button
                          className="btnsee btn btn-primary"
                          onClick={() => navigate("/bynow")}
                        >
                          buy now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Singleproduct;
