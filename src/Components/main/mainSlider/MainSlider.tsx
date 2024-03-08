"use client";
import Link from "next/link";
import { Cormorant } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import "./mainSlider.scss";

import img1 from "@/images/mainSlider/img1.png";
import img2 from "@/images/mainSlider/img2.png";
import img3 from "@/images/mainSlider/img3.png";

const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function MainSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className={cormorant.className}>
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1366: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper mySlider"
      >
        <SwiperSlide className="swiperSlide">
          <Link href="/portfolio/1">
            <Image
              className="slideImage"
              width={512}
              height={713}
              src={img1}
              alt="mainSlider"
            ></Image>
          </Link>
          <span>Дизайнерские шторы на заказ</span>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Link href="/portfolio/2">
            <Image
              className="slideImage"
              width={512}
              height={713}
              src={img2}
              alt="mainSlider"
            ></Image>
          </Link>
          <span>Изготовление декоративных элементов</span>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Link href="/portfolio/3">
            <Image
              className="slideImage"
              width={512}
              height={713}
              src={img3}
              alt="mainSlider"
            ></Image>
          </Link>
          <span>Солнцезащитные системы</span>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Link href="/portfolio/1">
            <Image
              className="slideImage"
              width={512}
              height={713}
              src={img1}
              alt="mainSlider"
            ></Image>
          </Link>
          <span>Дизайнерские шторы на заказ</span>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Link href="/portfolio/2">
            <Image
              className="slideImage"
              width={512}
              height={713}
              src={img2}
              alt="mainSlider"
            ></Image>
          </Link>
          <span>Изготовление декоративных элементов</span>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Link href="/portfolio/3">
            <Image
              className="slideImage"
              width={512}
              height={713}
              src={img3}
              alt="mainSlider"
            ></Image>
          </Link>
          <span>Солнцезащитные системы</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
