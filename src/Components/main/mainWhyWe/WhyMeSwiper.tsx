"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import { register } from "swiper/element";
register();

import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

import img1 from "@/images/mainWhyMe/image1.png";
import img2 from "@/images/mainWhyMe/image2.png";
import img3 from "@/images/mainWhyMe/image3.jpeg";
import img4 from "@/images/mainWhyMe/image4.jpg";

const WhyMeSwiper = () => {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{ el: ".mypagination" }}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="whyMeSlider"
      >
        <SwiperSlide className="whyMeSlider-slide">
          <div className="whyMeSlider__item">
            <Image
              className="whyMeSlider__item-img"
              src={img1}
              alt="mainSlider"
            ></Image>
            <span>Премиальное качество</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="whyMeSlider-slide">
          <div className="whyMeSlider__item">
            <Image
              className="whyMeSlider__item-img"
              src={img3}
              alt="mainSlider"
            ></Image>
            <span>Высококлассные материалы</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="whyMeSlider-slide">
          <div className="whyMeSlider__item">
            <Image
              className="whyMeSlider__item-img"
              src={img4}
              alt="mainSlider"
            ></Image>
            <span>Премиальное качество</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="whyMeSlider-slide">
          <div className="whyMeSlider__item">
            <Image
              className="whyMeSlider__item-img"
              src={img2}
              alt="mainSlider"
            ></Image>
            <span>Высококлассные материалы</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="mypagination"></div>
    </>
  );
};

export default WhyMeSwiper;
