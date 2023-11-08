/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { URL } from "../../../App";
import UseInput from "../Input";
import axios from "axios";
import styled from "styled-components";
import {  useNavigate, useParams } from "react-router-dom";
 
const Input = styled.input`
  height: 78px;
  width: 400px;
  background: #ffffff;
  border: 1px solid transparent;
  border-bottom-color: #c9cfd8;
  outline: none;
  @media screen and (max-width: 430px) {
    width: 330px;
  }
  @media screen and (max-width: 361px) {
    width: 300px;
  }
`;

const Order = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem('token')
  if (!access_token) {
    navigate(`/users/login`)
  }
  const id = useParams() 
  const newData = {
    sold_count: 1, 
    username: "",
    phone_number: "",
    viloyat: "",
    tuman: "", 
    aholi_punkti: "",
    manzil: "",
    moljal: "",
    description: ""
  };
  const { value, changeValue } = UseInput(newData); 
  const submit = (e) => {
    axios
      .post(`${URL}api/orders/${id.id}`, value,{
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
      alert("buyurtmangiz qa'bul qilindi");
  };
  return (
    <div className="container">
      <form
        required
        className=" container d-flex flex-wrap w-75 justify-content-between p-2"
      >
        <h3>You can updated your data</h3>
        <div className="d-flex flex-wrap justify-content-between p-2">
          <Input
            type="text"
            placeholder="username"
            name="username"
            onChange={changeValue}
          />
          <Input
            type="number"
            placeholder="phone_number"
            name="phone_number"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="viloyat"
            name="viloyat"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="tuman"
            name="tuman"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="aholi_punkti"
            name="aholi_punkti"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="manzil"
            name="manzil"
            onChange={changeValue}
          />
          <Input
            type="text"
            placeholder="moljal"
            name="moljal"
            onChange={changeValue}
          /> 
          <Input
            type="text"
            placeholder="description"
            name="description"
            onChange={changeValue}
          />
        </div>
      </form>
      <button
        onClick={(e) => submit()}
        type="submit"
        className="btn bg-primary text-white p-2 w-50"
      >
        Update Data
      </button>
    </div>
  );
};

export default Order;
