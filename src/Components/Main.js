/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useEffect, useContext } from "react";
import {  useNavigate} from "react-router-dom"; 
import { AuthContext } from "../Context/AuthContext";
import { URL } from "../App";
import Category from "./Halpers/Category";
import EventsLoader from "./Halpers/Loaderr";
import Pagination from "./Pagination";
import cart from "../assets/images/cart.png"; 
 

const Main = () => {
  const {search} = useContext(AuthContext) 
  const [card, setCard] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 8;
  // // pagination
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return card.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, card]); 
  //  pagination 
  useEffect(() => {
    setLoading(true);
    fetch(URL + "api/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCard(data.data); 
      });
      // search data
      fetch(URL+ `api/products/search?name=${search.search}`)
      .then((res)=>res.json()).then((data)=>{
        setLoading(false);
        setCard(data.data);
      })
      
  }, []);
  if (loading) {
    return (
      <div className="d-flex container flex-wrap">
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
      </div>
    );
  }
  <Pagination
    className="pagination-bar"
    currentPage={currentPage}
    totalCount={card.length}
    pageSize={PageSize}
    onPageChange={(page) => setCurrentPage(page)}
  />;
  return (
    <div className="container">
      <Category setCard={setCard} />
      <div className="d-flex justify-content-around container flex-wrap gap-2 ">

        {currentTableData.map((item) => { 
          return (
            <div
              key={item.id}
              style={{ width: 310 }}
              className="card p-2 mb-2 d-flex justify-content-between flex-column position-relative"
            >
              <img 
                src={URL + item.MainImage}
                alt="image"
                height={360}
                width={300}
                className="  rounded-2 p-2"
              />
              <div className="position-absolute top-0 end-0 p-2">
                <img src={cart} alt="favourites" width={25} height={30} />
              </div> 
              <h5 className="mt-2">{item.productName}</h5>

              <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
                <del className="text-danger ms-3">{10 + item.price} so'm</del>
              </div>

              <h6 className="text-primary">{item.price} so'm</h6>
              <button
                className="btn form-control bg-primary text-white"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                Read More
              </button>
            </div>
          );
        })}
        <div></div>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={card.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
export default Main;
