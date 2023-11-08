/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { URL } from "../../../App";
import UseInput from "../Input";
import axios from "axios";
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

const AddBrand = () => {
  const access_token = localStorage.getItem("token");
  const newData = {
    username: "",
    lastname: "",
    password: "",
    newPassword: "",
  };
  const { value, changeValue } = UseInput(newData);
  const [selectedFile, setSelectedFile] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.file;
    setSelectedFile(file);
  };
  const submit = (e) => {
    const files = new FormData();
    files.append("file", selectedFile);
    files.append("category_name", value.username);
    axios
      .post(`${URL}api/category`, files, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
        return error;
      });
      alert("Yangi brand qo'shildi");
  };
  return (
    <div className="container text-start">
      <form
        required
        className=" container w-75 p-2 mt-3"
      >
        <h3>Add new Brand</h3>
        <div>
          <Input
            type="text"
            placeholder="category_name"
            name="category_name"
            onChange={changeValue}
          />
          <div className="d-flex flex-column mt-2">
            <label htmlFor="file" className="text-start ps-2">
              Select Brand Image
            </label>
            <Input
              type="file"
              onChange={handleFileChange}
              name="file"
              id="file"
            />
          </div>
        </div>
      </form>
      <div style={{marginLeft: 120}}>
        <button
          onClick={(e) => submit()}
          type="submit"
          className="btn bg-primary text-white p-2 ms-5"
        >
          Add new Brand
        </button>
      </div>
    </div>
  );
};

export default AddBrand;