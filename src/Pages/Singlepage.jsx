/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import EventsLoader from "../Components/Halpers/Loaderr";
import Stars from "../Components/Halpers/Stars";
import { URL } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import delivery from "../assets/images/delivery.jpg";
import cart from "../assets/images/cart.png";

import { Autoplay, Pagination } from "swiper";
export default function Singlepage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [json, setSingle] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fn = async () => {
      const data = await axios.get(URL + "api/products/" + id);
      const res = await axios.get(URL + `api/products`);
      setSingle(data.data.data[0]);
      setLoading(false);
      setProducts(res.data.data);
    };
    fn();
  }, [id]);
  if (loading) {
    return (
      <div className="d-flex container justify-content-center">
        <EventsLoader />
      </div>
    );
  }

  return (
    <div className="container text-start">
      <div className="container text-start pb-5">
        <div
          key={json.id}
          className="shadow border rounded-5 mt-5 d-flex justify-content-around gap-2 p-3 "
        >
          <div style={{ width: 350, height: 470 }}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination]}
              className="myswip"
            >
              <SwiperSlide>
                <img
                  src={URL + json.BackImage}
                  alt="image"
                  className="shadow border rounded-4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={URL + json.MainImage}
                  alt="image"
                  className="shadow border rounded-4"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            style={{ width: 500 }}
            className=" px-5 d-flex flex-column justify-content-around w-50"
          >
            <h2>{json.model + " " + json.productName}</h2>
            <h5 className="text-primary">
              Rang: {json.color} {json.operativ_xotira}/{json.doimiy_xotira}
            </h5>
            <del className="text-danger">
              <h5>{Math.ceil(json.price + 1000)} so'm</h5>
            </del>
            <h3> {json.price} so'm </h3>
            <h5 className="text-secondary">
              {Math.ceil(json.price / 12)} so'm / 12 Mounth
            </h5>
            <div className="d-flex gap-3 text-primary ">
              <h4>Status :</h4>
              <h6 className="mt-2 text-success">
                ● Sotuvda {json.count} ta mahsulot mavjud
              </h6>
              <div className="links"></div>
            </div>
            <h4 className="d-flex gap-3">
              <Stars />
              <p>
                {json.count + 7} / {json.count + 9}
              </p>
            </h4>
            <div className="btns d-flex gap-3 ">
              <button className="btn bg-primary text-white">
                Muddatli to'lov
              </button>
              <button
                className="btn bg-primary text-white"
                onClick={() => navigate(`/orders/${json.id}`)}
              >
                Sotib olish
              </button>
            </div>
          </div>
          <div className="card w-50 shadow p-3">
            <h5>Yetkazib berish xizmati 🚀</h5>
            <img src={delivery} alt="delivery at home" />
            <br />
            <h4> 🚚 Standart Yetkazib berish</h4>
            <p>Yetkazib berish manzili asosida 4 soatdan 3 kungacha</p>
            <button
              type="submit"
              className=" btn bg-primary text-white"
              onClick={() => navigate(`/orders/${json.id}`)}
            >
              Buyurtma berish
            </button>
          </div>
        </div>
        <div className="w-75 mt-5">
          <h2 className="text-start text-primary">
            Mahsulot xarakteristikasi{" "}
          </h2>
          <h5 className="text-start my-3">
            <span className="text-primary">Tavsifi :</span> {json.description}
          </h5>
          <h2 className="text-primary">Umumiy xususiyatlari</h2>
          <h5>
            Brend
            ................................................................{" "}
            {" " + json.model}
          </h5>
          <h5>
            Model
            ...............................................................{" "}
            {" " + json.productName}
          </h5>
          <h5>
            Rangi
            ................................................................
            {" " + json.color}
          </h5>
          <h5>
            Protsessor ........................................................{" "}
            {" " + json.protsessor}
          </h5>
          <h5>
            Doimiy xotira ..................................................{" "}
            {" " + json.doimiy_xotira} GB
          </h5>
          <h5>
            Operativ xotira ................................................{" "}
            {" " + json.operativ_xotira} GB
          </h5>
          <h5>
            Batareya quvvati ............................................{" "}
            {" " + json.batary_power}
          </h5>
          <h5>
            Ekran chastotasi .............................................{" "}
            {" " + json.ekran_chastotasi}
          </h5>
          <h5>
            Asosiy (old) kamera .......................................
            {" " + json.old_kamera}
          </h5>
          <h5>
            Asosiy (orqa) kamera .....................................
            {" " + json.orqa_kamera}
          </h5>
          <h5>
            SIM-KARTA lar soni ........................................
            {" " + json.sim_kartalar_soni}
          </h5>
          <h5>
            SIM-KARTA formati .......................................
            {" " + json.sim_karta_formati}
          </h5>
          <h5>
            Operatsion sistemasi ....................................
            {" " + json.operatsion_system_version}
          </h5>
        </div>
      </div>
      {/* tavsiya qilinadigan mahsulotlar */}
      <div>
        <h2>Shunga o'xshash mahsulotlar</h2>
        <div className="d-flex justify-content-around flex-wrap mb-3">
          <Swiper
        slidesPerView={3}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="myswiper"
          >
              {products.map((like) => {
                return (
                  <SwiperSlide>
                  <div
                    key={like.id}
                    style={{ width: 310, height:500}}
                    className="card p-2 mb-2 d-flex justify-content-between flex-column position-relative text-center"
                  >
                    <img
                      src={URL + like.MainImage}
                      alt="image"
                      height={360}
                      width={300}
                      className="  rounded-2 p-2"
                    /> 
                    <h5 className="mt-2">{like.productName}</h5>

                    <div className="stars d-flex justify-content-center mt-2 mb-2 gap-1 ">
                      <del className="text-danger ">{10 + like.price} so'm</del>
                    </div>

                    <h6 className="text-primary">{like.price} so'm</h6>
                    <button
                      className="btn form-control bg-primary text-white"
                      onClick={() => navigate(`/products/${like.id}`)}
                    >
                      Read More
                    </button>
                  </div>
              </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
