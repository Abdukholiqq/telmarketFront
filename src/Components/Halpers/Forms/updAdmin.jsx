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

const UpdateAdmin = () => {
  const access_token = localStorage.getItem("token");
  const newData = {
    username: "",
    lastname: "",
    password: "",
    newPassword: "",
  };
  const { value, changeValue } = UseInput(newData);
  const [selectedFiles, setSelectedFiles] = useState("");
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };
  const submit = (e) => {
    const files = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      files.append("files", selectedFiles[0]);
    }
    files.append("username", value.username);
    files.append("lastname", value.lastname);
    files.append("password", value.password);
    files.append("newPassword", value.newPassword);
    axios
      .put(`${URL}api/admin/update`, files, {
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
      alert("ma'lumotingiz yangilandi");
  };
  return (
    <div className="container text-start">
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
            type="text"
            placeholder="lastname"
            name="lastname"
            onChange={changeValue}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={changeValue}
          />
          <Input
            type="password"
            placeholder="newPassword"
            name="newPassword"
            onChange={changeValue}
          />
          <div className="d-flex flex-column">
            <label htmlFor="file" className="text-start ps-2">
              Select Your Image
            </label>
            <Input
              type="file"
              onChange={handleFileChange}
              name="files"
              id="file"
            />
          </div>
        </div>
      </form>
      <div className="ms-5 ps-5">
        <button
          onClick={(e) => submit()}
          type="submit"
          className="btn bg-primary text-white p-2"
          style={{ marginLeft: 80 }}
        >
          Update Data
        </button>
      </div>
    </div>
  );
};

export default UpdateAdmin;
