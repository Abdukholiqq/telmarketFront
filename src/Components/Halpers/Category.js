/* eslint-disable eqeqeq */
import React, { useContext, useEffect, useState } from "react";
import { languageContext } from "../../App";
import Swiperr from "./Swiper";
import { URL } from "../../App"; 

const Category = ({ setCard }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(URL + "api/category")
      .then((res) => res.json())
      .then((json) => setCategories(json.data));
  }, []); 
  const categoryHandler = (category) => {
   
    fetch(category === "all" ? URL + "api/products" : URL + "api/category/name/" + category)
      .then((res) => res.json())
      .then((json) => category === "all" ? setCard(json.data) : setCard(json.data[0].ProductModels));
  };
  const lang = useContext(languageContext);
  return (
    <div>
      <ul className="d-flex justify-content-evenly   pt-2 mt-2 gap-5">
        <li onClick={() => categoryHandler("all")} className="text-primary li">
          {lang === "Uz"
            ? "Barcha Mahsulotlar"
            : lang === "Ru"
            ? "Bce продукты"
            : lang === "En"
            ? "Products"
            : "Barcha Mahsulotlar"}
        </li>
        {categories.map((category, i) => (
          <li
            onClick={() => categoryHandler(category.category_name)}
            className="text-primary li"
            key={i}
          >
            {category.category_name}
          </li>
        ))}
      </ul>
      <Swiperr></Swiperr>
    </div>
  );
};
export default Category;
