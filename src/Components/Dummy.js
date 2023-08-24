import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsCheckLg, BsFillTrash3Fill } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";
import "../Components/cart.css";
import Bnavbar from "./navbar/Bnavbar";
import { useNavigate } from "react-router-dom";


const Dummy = () => {
  const [data, setdata] = useState([]);
  const [quntity, setqnty] = useState([]);
  const navigate=useNavigate();
  console.log(quntity);
  var total=0;
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
        setqnty(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const decressqnty = (data) => {
    if (data.quantity > 1) {
      data.quantity = data.quantity - 1;
    }

    axios
      .put(`http://localhost:3000/cart/${data.id}`, data)
      .then((res) => {
        console.log(res);
        setqnty(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkcart = (product) => {
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
  const remove = (id) => {
    const arr = data.filter((e) => e.id !== id);
    axios
      .delete(`http://localhost:3000/cart/${id}`)
      .then((res) => {
        console.log("deleted", res);
        setdata(arr)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/cart`).then((res) => {
      setdata(res.data);
    });
  }, []);

  function checkout(){
    if (total!==0){
      navigate("/buynow");
    }else{
      navigate("/dashbord");
    }
  }
  

  return (
    <>
      <Bnavbar />
      <div style={{ marginTop: "50px", backgroundColor: "#fff" }}>
        <div className="row mt-4">
          <div className="col-md-3 ">
            <h6>Product</h6>
          </div>
          <div className="col-md-3">
            <h6>Product Name</h6>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-4">
                <h6>Actual Price</h6>
              </div>
              <div className="col-md-4">
                <h6>Discounted price</h6>
              </div>
              {/* <div className="col-md-4">
                <h6>Discount percentage</h6>
              </div> */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3 ">
                <h6>Quantity</h6>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <h6>Remove</h6>
              </div>
            </div>
          </div>
        </div>
        {data.map((e) => {
          let sp = e.discounted_price.slice(1);
          let num = Number(sp.split(",").join(""));
          let sum = num * e.quantity;
          total+=sum;
           console.log(total)
          // console.log(sum);
          console.log("qua,", +e.quantity);
          return (
            <>
              <div className="containercart ">
                {/* doooo */}
                <hr></hr>
                <div className="row mt-4">
                  <div className="col-md-3">
                    <img src={e.image} height={120} />
                  </div>
                  <div className="col-md-3 text-truncate">
                    <small>{e.name}</small>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-4">
                        <h5>
                          <del style={{ color: "red" }}>{e.actual_price}</del>
                        </h5>
                      </div>
                      <div className="col-md-4">
                        <h5>
                          <b style={{ color: "green" }}>
                            {`₹${sum}`}
                            {/* {e.discounted_price} */}
                          </b>
                        </h5>
                      </div>
                      {/* <div className="col-md-4">
                        <h5>
                          <b style={{ color: "rgb(224, 80, 123)" }}>
                            {e.discount_percentage}
                          </b>
                        </h5>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-3">
                        <BsFillPlusSquareFill
                          onClick={() => updateqnty(e)}
                          className="logobtn"
                        />
                      </div>
                      <div className="col-md-3 ">
                        <b style={{ color: "green" }}>{e.quantity}</b>
                      </div>
                      <div className="col-md-3">
                        <AiFillMinusSquare
                          onClick={() => decressqnty(e)}
                          className="logobtn"
                        />
                      </div>
                      <div className="col-md-3">
                        <BsFillTrash3Fill
                          onClick={() => remove(e.id)}
                          className="remove"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <h1>Grand Total`{total}`</h1>
        <button className="cbtn" onClick={() => checkout()}>
              checkout
            </button>
      </div>
    </>
  );
};


export default Dummy;
