import Image from "next/image";

import { Cormorant } from "next/font/google";

import styles from "./AboutContent.module.scss";

import bg from "@/images/mainDiscount/imageBg.png";
import image1 from "@/images/mainDiscount/image1.png";
import image2 from "@/images/mainDiscount/image2.png";
import image3 from "@/images/mainDiscount/image3.png";
import image4 from "@/images/mainDiscount/image4.png";

const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

import React from "react";
import MainDiscount from "../main/mainDiscount/MainDiscount";

const AboutContent = () => {
  return (
    <div>
      <section className={cormorant.className}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <h2 className={styles.title}>О нас</h2>
            <div className={styles.titleText}>
              <p>Cалон по пошиву текстиля для дома в Москве.</p>
              <p>
                Мы предоставляем полный комплекс услуг по преображению и
                созданию стильного уюта Вашего дома: от замеров и разработки
                дизайна до установки готовых изделий и тщательного отслеживания
                качества проводимых работ.
              </p>
            </div>
            <div className={styles.titleTextBg}>
              <Image src={bg} alt="image1"></Image>
            </div>
            <div className={styles.item}>
              <div className={styles.text}>
                Мы работаем с лучшими поставщиками и европейскими фабриками
                тканей. Также мы можем создать свой авторский дизайн ткани, что
                обеспечит рождение полностью эксклюзивной вещи.
              </div>
              <Image src={image1} alt="image1"></Image>
            </div>
            <div className={styles.item}>
              <Image src={image2} alt="image1"></Image>
              <Image src={image3} alt="image1"></Image>
            </div>
            <div className={styles.item}>
              <Image src={image4} alt="image1"></Image>
              <div className={styles.text}>
                Доверив нам оформление окна, Вы получаете возможность
                реализовать дизайнерскую задумку любой сложности и получить
                первоклассное и индивидуальное решение для Вашего помещения.
              </div>
            </div>
          </div>
          <MainDiscount />
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
