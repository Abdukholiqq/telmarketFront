/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwiperStyles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Swiperr() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="sliderr container">
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
        // navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper">
        <SwiperSlide>
          <img
          src="https://olcha.uz/image/original/sliders/ru/kTgfCoZMO9Q8MtNWqMgm4y4Z08UY21NQynUjxvXg9lAh8o7T0Fj042tJ8ki2.png"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cfb4jool08k0o9qimhbg/main_page_banner.jpg"
            alt="banner"
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
          src="https://olcha.uz/image/original/sliders/ru/HIzHqvj0r6Nto67NidiQ4k3PVoct4UwTBbnXusNRSaf6mrX1PB7V4SQ3doUs.png"
              alt="banner"
            height={350}
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
export default Swiperr;

//   second swipper
export const SwiperSlider = () => {
  return (
    <div className="companys container my-5 border-0 rounded-4 shadow px-2">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <div className="p-5">
            <img
              src="https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp"
              alt="image"
              height={40}
              width={40}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="	https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={20}
              width={40}
              src="	https://assets.asaxiy.uz/brand/webp//6064cdf0ce901.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="	https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="	https://assets.asaxiy.uz/brand/webp//6103c3977d54d.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand/webp//6014fbfea491a.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="	https://assets.asaxiy.uz/brand/webp//603481675b122.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand/webp//605036814c07e.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand/webp//6067393b94990.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand//630b0f0ed1e2b.png"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand//6309b524cec23.png"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" p-5">
            <img
              height={40}
              width={40}
              src="https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="	https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              height={40}
              width={40}
              src="	https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp"
              alt="image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              width={150}
              src="https://assets.asaxiy.uz/brand//63b65df2b0896.png"
              alt="image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
