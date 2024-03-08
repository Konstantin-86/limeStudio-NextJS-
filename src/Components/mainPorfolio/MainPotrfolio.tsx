import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Cormorant } from "next/font/google";
import styles from "./MainPotrfolio.module.scss";

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
  return (
    <section className={cormorant.className}>
      <div className={styles.mainPotrfolioWrap}>
        <div className={styles.inner}>
          <div className={styles.textInner}>
            <h2>Портфолио</h2>
            <Link href="/portfolio">Смотреть все</Link>
          </div>
        </div>
        <div className={styles.wrapItem}>
          <div className={styles.itemImage}>
            <Image
              /* width={646} height={525} */ src={image1}
              alt="image1"
            ></Image>
          </div>
          <div className={styles.itemImage}>
            <Image
              /* width={378} height={525} */ src={image2}
              alt="image2"
            ></Image>
          </div>
          <div className={styles.itemImage}>
            <Image
              /* width={512} height={525} */ src={image3}
              alt="image3"
            ></Image>
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
