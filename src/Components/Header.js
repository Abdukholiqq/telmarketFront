/* eslint-disable no-unused-vars */ 
import { Link, useNavigate } from "react-router-dom";  
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Header = ({ lang, setLang }) => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("token"); 
  const {search, setSearch} = useContext(AuthContext)
  const changeLanguage = (e) => {
    setLang(e.target.value);
  };
  return (
    <div>
      <div className="container d-flex justify-content-between  align-items-center pt-2">
        <Link to={"/"}> 
          <a
            href="/"
            className="text-success"
            style={{ fontSize: 32, fontWeight: 800 }}
          > 
            Malina
          </a>
        </Link>
        <div
          className=" d-flex bg-primary border rounded-4"
          style={{ width: 500 }}
        >
          <input
            className="bg-white p-2 w-75 border border-primary rounded-4"
            onChange={(e) => {
              setSearch({ search: e.target.value });
            }} 
            type="search"
            name="search"
            id="search"
            placeholder={
              lang === "Uz"
                ? "Qidirish ..."
                : lang === "Ru"
                ? "Поиск ..."
                : lang === "En"
                ? "Search ..."
                : "Qidirish ..."
            }
          />
          <label
            htmlFor="search"
            className=" d-flex justify-content-center gap-2 px-2  pt-2  text-light "
          >
            <img
              width="24"
              height="24"
              className="mx-1"
              src="https://asaxiy.uz/custom-assets/images/search-icon.svg"
              alt="lupa"
            />
            <h5>
              {lang === "Uz"
                ? "Qidirish"
                : lang === "Ru"
                ? "Поиск"
                : lang === "En"
                ? "Search"
                : "Qidirish"}
            </h5>
          </label>
        </div>
        <div className="d-flex justify-content-between  gap-3">
          <div className="d-flex flex-column align-items-center gap-1">
            <img
              width="25"
              height="24"
              src="https://asaxiy.uz/custom-assets/images/icons/header/language.svg"
              alt="language"
            />
            <select
              className="border border-2 rounded-2 text-primary border-primary"
              onChange={changeLanguage}
              name="select"
              id="select"
            >
              <option value="Uz">Uz</option>
              <option value="En">En</option>
              <option value="Ru">Ru</option>
            </select>
          </div>
          <Link to={"/users"}>
            <div className="d-flex flex-column align-items-center gap-1">
              <img
                width="25"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                alt="delivery"
              />
              <span>
                {lang === "Uz"
                  ? "Yetkazish"
                  : lang === "Ru"
                  ? "Доставка"
                  : lang === "En"
                  ? "Delivery"
                  : "Yetkazish"}
              </span>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="d-flex flex-column align-items-center gap-1">
              <img
                width="25"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                alt="Savatcha"
              />
              <span>
                {lang === "Uz"
                  ? "Savatcha"
                  : lang === "Ru"
                  ? "Корзина"
                  : lang === "En"
                  ? "Cart"
                  : "Savatcha"}
              </span>
            </div>
          </Link>

          <Link to={access_token ? "/users" : "/users/login"}>
            <div
              className="d-flex flex-column align-items-center gap-1"
              onClick={() => navigate("users")}
            >
              <img
                width="28"
                height="24"
                src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                alt="Kabinet"
              />
              <span>
                {lang === "Uz"
                  ? "Profil"
                  : lang === "Ru"
                  ? "Профиль"
                  : lang === "En"
                  ? "Profile"
                  : "Profil"}
              </span>
            </div>
          </Link>
          
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Header;
