/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
function UserLogin() {
  let obj = {
    username: "",
    password: "",
  };
  const { value, changeValue } = UseInput(obj);
  console.log(value, "value");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL + "api/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token, "token");
        if (data.access_token) {
          localStorage.setItem("token", data.access_token);
          navigate("/");
        }
      });
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <form required className="w-25 p-2 border">
        <Input
          type="text"
          onChange={changeValue}
          placeholder="username"
          name="username"
        />
        <Input
          type="password"
          onChange={changeValue}
          placeholder="password"
          name="password"
        />
        <div className="row mb-4 mt-2">
          <div className="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <label className="form-check-label me-2" htmlFor="form2Example31">
              Remember me
            </label>
            <div className="form-check ms-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
            </div>
          </div>

          <div className="col">
            {/* <!-- Simple link --> */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <div className="d-flex justify-content-around">
          <button
            onClick={(e) => handleSubmit(e)}
            type="button"
            className="btn w-25 btn-primary btn-block mb-4"
          >
            Sign in
          </button>
          <a href="/users/register">Sugn Up</a>
        </div>
      </form>

      {/* <!-- Register buttons --> */}
    </div>
  );
}

export default UserLogin;
