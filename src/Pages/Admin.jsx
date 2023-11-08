/* eslint-disable import/first */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useContext } from "react";
import Category from "../Components/Halpers/Category";
import Stars from "../Components/Halpers/Stars";
import EventsLoader from "../Components/Halpers/Loaderr";
import Login from "./Register";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
const URL = "http://localhost:4000/";
import AddBrand from "../Components/Halpers/Forms/addCategory";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const [cards, setCard] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const unHidden = true;

  const navigate = useNavigate();
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    setLoading(true);
    fetch(URL + "api/category")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCard(data.data);
      });
      
  }, []); 
  

  if (loading) {
    return (
      <div className="container d-flex flex-wrap">
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
        <EventsLoader />
      </div>
    );
  }
  return (
    <div> 
      {user?.isLogin ? (
        <div className="container">
           <div className="d-flex justify-content-around mb-2">
            <button onClick={toggleModal} className="btn bg-success text-white" >All products</button>
            <button className="btn bg-success text-white" onClick={()=> navigate('/admin/products')}>Add new Product</button>
            <button onClick={toggleModal} className="btn bg-success text-white">Add new Brand</button>
            <button onClick={()=> navigate('/admin/settings')}  className="btn bg-primary text-white">⚙️ Settings</button>
            </div> 
          <div>
            <div isOpen={isOpen} className={isOpen ? "upduser" : "show"}>
              <AddBrand/>
            </div>
            <div  isOpen={isOpen} className={isOpen ? "show" : "upduser"}>
            {cards.map((i) => {
              return (
                <div
                  className="d-flex flex-column container flex-wrap mt-3"
                  key={i.id}
                >
                  <h3 className="text-start ps-2" >{i.category_name}</h3>
                  <div className="d-flex  gap-2 flex-wrap p-2">
                  {i.ProductModels.map((item) => {
                    return (
                        <div
                          key={item.id}
                          style={{ width: 240 }}
                          className="card p-2 d-flex"
                        >
                          <img
                            src={URL + item.MainImage}
                            alt="image"
                            height={200}
                            width={220}
                          />
                          <h5 className="mt-2">{item.productName}</h5> 
                          <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
                            <Stars></Stars>
                            <h6 className="text-danger ms-3">
                              <del> {Math.ceil(item.price + 6)}.9 so'm </del>
                            </h6>
                          </div>

                          <h6 className="text-primary">{item.price}  so'm</h6>
                          <div className="btns ">
                            <button
                              onClick={() => {
                                const getCard = async () => {
                                  const datta = await axios.delete(
                                    URL + `api/products/${item.id}`
                                  );
                                  setCard(datta.data.data);
                                  window.location.reload();
                                };
                                getCard();
                              }}
                              className="btn bg-danger text-white"
                            >
                             🗑 Delete
                            </button>
                            <button className="btn bg-info ms-2 text-white"
                              onClick={() => navigate(`/admin/products/${item.id}`)
                              }
                            >
                             🖋 Update
                            </button>
                          </div>
                          <button
                className="btn form-control bg-success text-white mt-2"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                Read More
              </button>
                        </div>
                    );
                  }
                  )}
                  </div>
                </div>
              ); 
            })}
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Admin;
