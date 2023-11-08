/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateUser from "./Forms/updUser.form";
import moment from "moment";

import { URL } from "../../App";
import UserLogin from "../../Pages/User.login";
const Accaunt = () => {
  const { logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [datas, setData] = useState([]);
  const [product, setProduct]= useState({})
  const unHidden = true;
  //   const navigate = useNavigate();
  const access_token = localStorage.getItem("token");
  const getData = async () => {
    const res = await axios.get(`${URL}api/orders`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    console.log(res);
    setData(res.data.data);
    setProduct(res.data.data[0].ProductModels)
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    getData();
  }, []); 
  return (
    <div>
    {access_token?(
    <div className="container d-flex">
      <div className="w-25 mt-5 p-5 text-start">
        <h5 onClick={toggleModal} className="btn bg-primary text-white">
          {" "}
          🚛 Buyurtmalarim{" "}
        </h5>
        <br />
        <br />
        <button onClick={toggleModal} className="btn bg-success text-white">
          ⚙️ Settings
        </button>
        <br /> 
        <br />
        <button
          className="btn mt-2 text-white bg-danger opacity-75"
          onClick={logOut}
        >
          ⬅️ LogOut
        </button>
      </div>
      <div>
        <div isOpen={isOpen} className={isOpen ? "upduser" : "show"}>
          <UpdateUser />
        </div>
        <div isOpen={isOpen} className={isOpen ? "show" : "upduser"}>
          <h5>Buyurtmalarim</h5>
          {datas.map((item) => {
            return (
              <div key={item.id} className="card shadow mt-2 p-3" style={{minWidth:700}}>
                <div >
                  <div className="d-flex justify-content-between">

                  <h4 className="text-start ps-3">{item.id}-son buyurtma</h4>
                  <button className="btn bg-success text-white">Yetkazilmoqda</button>
                  </div>
                  <hr />
                  <div className="d-flex text-start gap-3">
                    <h6 style={{width:250}}>Buyurtma sanasi</h6>
                    <h5>
                      {moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </h5>
                  </div>
                   
                  <div className="d-flex text-start">
                  <h6 style={{width:250}}>Viloyat</h6>
                  <h5 className="ps-3">
                    {item.viloyat} viloyati {item.tuman} tumani {item.manzil}
                  </h5>
                  </div>
                  <div className="d-flex text-start">
                  <h6 style={{width:250}}>Tuman</h6>
                  <h5 className="ps-3"> {item.tuman} tumani 
                  </h5>
                  </div>
                  <div className="d-flex text-start">
                  <h6 style={{width:250}}>Manzilingiz</h6>
                  <h5 className="ps-3">  {item.manzil}
                  </h5>
                  </div>
                  <div className="d-flex text-start"> 
                  <h6 style={{width:250, marginRight: 20}}>Mahsulot nomi</h6>
                  {product.map((prod)=>{
                    return (
                      <div>
                        <div>
                          <h5>{prod.productName}</h5>
                          </div>
                      </div>
                    )
                  })}
                  </div>
                  <div className="d-flex text-start">
                  <h6 style={{width:250}}>Mahsulot soni</h6>
                  <h5 className="ps-3">
                    {item.sold_count}  
                  </h5>
                  </div>                 
                </div> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
    ): <UserLogin/>}
    </div>
  );
};

export default Accaunt;
