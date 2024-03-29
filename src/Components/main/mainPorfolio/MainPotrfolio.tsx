"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Cormorant } from "next/font/google";
import styles from "./MainPotrfolio.module.scss";
import "./styles.scss";

import image1 from "@/images/mainPortfolio/image1.png";
import image2 from "@/images/mainPortfolio/image2.png";
import image3 from "@/images/mainPortfolio/image3.png";
import image4 from "@/images/mainPortfolio/image4.png";
import image5 from "@/images/mainPortfolio/image5.png";
import image6 from "@/images/mainPortfolio/image6.png";

const cormorant = Cormorant({
  weight: ["600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const MainPotrfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section className={cormorant.className}>
      <div className={styles.mainPotrfolioWrap}>
        <div className={styles.inner}>
          <div className={`${styles.textInner} proba`}>
            <h2>Портфолио</h2>
            <Link href="/portfolio">Смотреть все</Link>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={pagination}
          slidesPerView={1}
          autoHeight={true}
          className="mySwiper mySlider2"
        >
          <SwiperSlide className="myslide">
            <Image src={image1} alt="image1"></Image>
          </SwiperSlide>
          <SwiperSlide className="myslide">
            <Image src={image2} alt="image1"></Image>
          </SwiperSlide>
          <SwiperSlide className="myslide">
            <Image src={image3} alt="image1"></Image>
          </SwiperSlide>
          <SwiperSlide className="myslide">
            <Image src={image4} alt="image1"></Image>
          </SwiperSlide>
          <SwiperSlide className="myslide">
            <Image src={image5} alt="image1"></Image>
          </SwiperSlide>
          <SwiperSlide className="myslide">
            <Image src={image6} alt="image1"></Image>
          </SwiperSlide>
        </Swiper>
        <div className={styles.wrapItem}>
          <div className={styles.itemImage}>
            <Image src={image1} alt="image1"></Image>
          </div>
          <div className={styles.itemImage}>
            <Image src={image2} alt="image2"></Image>
          </div>
          <div className={styles.itemImage}>
            <Image src={image3} alt="image3"></Image>
          </div>
        </div>
        <div className={styles.wrapItem}>
          <div className={styles.itemImage}>
            <Image src={image4} alt="image1"></Image>
          </div>
          <div className={styles.itemImage}>
            <Image src={image5} alt="image2"></Image>
          </div>
          <div className={styles.itemImage}>
            <Image src={image6} alt="image3"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPotrfolio;
