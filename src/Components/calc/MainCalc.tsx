"use client";
import { useState } from "react";
import Image from "next/image";

import image1 from "../../images/calc/image1.png";
import styles from "./MainCalc.module.scss";

import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const MainCalc = () => {
  const [subTitle, setSubTitle] = useState("Комплексное оформление окна");
  const [valueInpt, setValueInpt] = useState("");

  const valInptFunc = (e) => {
    setValueInpt(e.target.value);
    console.log(valueInpt);
  };
  return (
    <div className={cormorant.className}>
      <h2 className={styles.title}>Калькулятор штор на заказ</h2>
      <div className={styles.container}>
        <div className={styles.innerCalc}>
          <div
            className={
              subTitle !== "Комплексное оформление окна"
                ? styles.innerTitleActive
                : styles.innerTitle
            }
          >
            <h3
              onClick={() => setSubTitle("Комплексное оформление окна")}
              className={styles.subTitle}
            >
              Комплексное оформление окна
            </h3>
            <h3
              onClick={() => setSubTitle("Римская штора")}
              className={styles.subTitle}
            >
              Римская штора
            </h3>
          </div>
          <div className={styles.innerContent}>
            <div className={styles.item}>
              <div className={styles.itemLine}>
                <div className={styles.innerInput}>
                  <h4>Портьеры</h4>
                  <input
                    className={styles.input}
                    id="curtainsYes"
                    type="radio"
                    name="firstline"
                    value={"curtainsYes"}
                    onChange={(e) => valInptFunc(e)}
                  />
                  <label className={styles.label} htmlFor="curtainsYes">
                    Да
                  </label>
                  <input
                    className={styles.input}
                    id="curtainsNo"
                    type="radio"
                    name="firstline"
                    value={"curtainsNo"}
                  />
                  <label className={styles.label} htmlFor="curtainsNo">
                    Нет
                  </label>
                </div>
                <div className={styles.innerInput}>
                  <h4>Тюль</h4>
                  <input
                    className={styles.input}
                    id="TulleYes"
                    type="radio"
                    name="secondline"
                    value={"TulleYes"}
                  />
                  <label className={styles.label} htmlFor="TulleYes">
                    Да
                  </label>
                  <input
                    className={styles.input}
                    id="TulleNo"
                    type="radio"
                    name="secondline"
                    value={"TulleNo"}
                  />
                  <label className={styles.label} htmlFor="TulleNo">
                    Нет
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={image1} alt="image1" width={370} height={482}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCalc;
