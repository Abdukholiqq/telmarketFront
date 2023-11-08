/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { URL } from "../App";
import UseInput from "../Components/Halpers/Input";
import styled from "styled-components";
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
// FontAwesomeIcon
function Register() {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null);

  let obj ={
    username: "",
    lastname:"",
    password: "",
  }
  const { value, changeValue } = UseInput(obj);
  const handleFileChange = (event) => {
    const files = event.target.files
    setSelectedFile(files); 
  };
  const handleUpload = () => {
    const formData = new FormData();

    formData.append("file", selectedFile[0]); 
    formData.append("username" ,value.username)
    formData.append( "lastname" ,value.lastname)
    formData.append( "password" ,value.password)
    console.log(value);
    console.log(selectedFile[0]);
    axios
      .post( `${URL}api/users/register`, formData,{
        headers: {
          "content-type": "multipart/form-data",
        },
      }).then((data) => { 
        console.log(data, "data"); 
        if (data.data.access_token) { 
          localStorage.setItem("token", data.data.access_token); 
          navigate("/");
        }
      }); 
  };
  return (
    <div className="container card w-25 d-flex flex-column p-2">
      <Input type="text" onChange={changeValue} placeholder="username"  name="username"/>
      <Input type="text" onChange={changeValue} placeholder="lastname"  name="lastname"/>
      <Input type="password" onChange={changeValue} placeholder="password"  name="password"/>
      <Input type="file" name="files" multiple onChange={handleFileChange} />
      <div className="d-flex justify-content-between p-2">

      <button onClick={handleUpload} className="btn ms-2 w-50 text-white bg-primary">Sign Up</button>
      <a href="/users/login" className=" mt-2 me-5 fs-6">Login</a>
      </div>
    </div>
  );
}

export default Register;
