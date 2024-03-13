"use client";
import { useState } from "react";
import Image from "next/image";
import { ChangeEvent } from "react";

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
  const [curtainsInptValue, setCurtainsInptValue] = useState("");
  const [tulleInptValue, setTulleInptValue] = useState("");
  const [corniceInptValue, setCorniceInptValue] = useState("");
  const [rowInptValue, setRowInptValue] = useState("");
  const [widthInptValue, setWidthInptValue] = useState("");
  const [bglineActive, setBglineActive] = useState("0%");
  const [cost, setCost] = useState("0");

  const curtainsInptValueFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setCurtainsInptValue(e.target.value);
    console.log(curtainsInptValue);
  };
  const tulleInptValueFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setTulleInptValue(e.target.value);
    console.log(tulleInptValue);
  };
  const corniceInptValueFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setCorniceInptValue(e.target.value);
    console.log(corniceInptValue);
  };
  const rowInptValueFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setRowInptValue(e.target.value);
    console.log(rowInptValue);
  };
  const widthInptValueFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setWidthInptValue(e.target.value);
    if (e.target.value === "width1") {
      setBglineActive("0%");
    }
    if (e.target.value === "width1-5") {
      setBglineActive("20%");
    }
    if (e.target.value === "width2") {
      setBglineActive("40%");
    }
    if (e.target.value === "width2-5") {
      setBglineActive("60%");
    }
    if (e.target.value === "width3") {
      setBglineActive("80%");
    }
    if (e.target.value === "width3-5") {
      setBglineActive("100%");
    }
    console.log(widthInptValue);
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
                    onChange={(e) => curtainsInptValueFunc(e)}
                  />
                  <label
                    className={
                      curtainsInptValue === "curtainsYes"
                        ? styles.labelActive
                        : styles.label
                    }
                    htmlFor="curtainsYes"
                  >
                    Да
                  </label>
                  <input
                    className={styles.input}
                    id="curtainsNo"
                    type="radio"
                    name="firstline"
                    value={"curtainsNo"}
                    onChange={(e) => curtainsInptValueFunc(e)}
                  />
                  <label
                    className={
                      curtainsInptValue === "curtainsNo"
                        ? styles.labelActive
                        : styles.label
                    }
                    htmlFor="curtainsNo"
                  >
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
                    onChange={(e) => tulleInptValueFunc(e)}
                  />
                  <label
                    className={
                      tulleInptValue === "TulleYes"
                        ? styles.labelActive
                        : styles.label
                    }
                    htmlFor="TulleYes"
                  >
                    Да
                  </label>
                  <input
                    className={styles.input}
                    id="TulleNo"
                    type="radio"
                    name="secondline"
                    value={"TulleNo"}
                    onChange={(e) => tulleInptValueFunc(e)}
                  />
                  <label
                    className={
                      tulleInptValue === "TulleNo"
                        ? styles.labelActive
                        : styles.label
                    }
                    htmlFor="TulleNo"
                  >
                    Нет
                  </label>
                </div>
              </div>
              <div className={styles.itemLine}>
                <div className={styles.innerInput}>
                  <h4>Карниз</h4>
                  <input
                    className={styles.input}
                    id="CorniceProf"
                    type="radio"
                    name="Cornice"
                    value={"CorniceProf"}
                    onChange={(e) => corniceInptValueFunc(e)}
                  />
                  <label
                    className={
                      corniceInptValue === "CorniceProf"
                        ? styles.labelActive
                        : styles.label
                    }
                    htmlFor="CorniceProf"
                  >
                    Профильный
                  </label>
                  <input
                    className={styles.input}
                    id="CorniceCircle"
                    type="radio"
                    name="Cornice"
                    value={"CorniceCircle"}
                    onChange={(e) => corniceInptValueFunc(e)}
                  />
                  <label
                    className={
                      corniceInptValue === "CorniceCircle"
                        ? styles.labelActive
                        : styles.label
                    }
                    htmlFor="CorniceCircle"
                  >
                    Круглый
                  </label>
                </div>
                <div className={styles.innerInputRow}>
                  <input
                    className={styles.input}
                    id="row1"
                    type="radio"
                    name="row"
                    value={"row1"}
                    onChange={(e) => rowInptValueFunc(e)}
                  />
                  <label
                    className={
                      rowInptValue === "row1"
                        ? styles.labelRowActive
                        : styles.labelRow
                    }
                    htmlFor="row1"
                  >
                    1 ряд
                  </label>
                  <input
                    className={styles.input}
                    id="row2"
                    type="radio"
                    name="row"
                    value={"row2"}
                    onChange={(e) => rowInptValueFunc(e)}
                  />
                  <label
                    className={
                      rowInptValue === "row2"
                        ? styles.labelRowActive
                        : styles.labelRow
                    }
                    htmlFor="row2"
                  >
                    2 ряда
                  </label>
                </div>
              </div>
              <h4 className={styles.lineTitle}>Примерная ширина карниза, м</h4>
              <div className={styles.itemLine3}>
                <div className={styles.bgline}></div>
                <div
                  style={{ width: bglineActive }}
                  className={styles.bglineActive}
                ></div>

                <input
                  className={styles.input}
                  id="width1"
                  type="radio"
                  name="width"
                  value={"width1"}
                  onChange={(e) => widthInptValueFunc(e)}
                />
                <label
                  className={
                    widthInptValue === "width1"
                      ? styles.labelWidthActive
                      : styles.labelWidth
                  }
                  htmlFor="width1"
                >
                  1
                </label>
                <input
                  className={styles.input}
                  id="width1-5"
                  type="radio"
                  name="width"
                  value={"width1-5"}
                  onChange={(e) => widthInptValueFunc(e)}
                />
                <label
                  className={
                    widthInptValue === "width1-5"
                      ? styles.labelWidthActive
                      : styles.labelWidth
                  }
                  htmlFor="width1-5"
                >
                  1.5
                </label>
                <input
                  className={styles.input}
                  id="width2"
                  type="radio"
                  name="width"
                  value={"width2"}
                  onChange={(e) => widthInptValueFunc(e)}
                />
                <label
                  className={
                    widthInptValue === "width2"
                      ? styles.labelWidthActive
                      : styles.labelWidth
                  }
                  htmlFor="width2"
                >
                  2
                </label>
                <input
                  className={styles.input}
                  id="width2-5"
                  type="radio"
                  name="width"
                  value={"width2-5"}
                  onChange={(e) => widthInptValueFunc(e)}
                />
                <label
                  className={
                    widthInptValue === "width2-5"
                      ? styles.labelWidthActive
                      : styles.labelWidth
                  }
                  htmlFor="width2-5"
                >
                  2.5
                </label>
                <input
                  className={styles.input}
                  id="width3"
                  type="radio"
                  name="width"
                  value={"width3"}
                  onChange={(e) => widthInptValueFunc(e)}
                />
                <label
                  className={
                    widthInptValue === "width3"
                      ? styles.labelWidthActive
                      : styles.labelWidth
                  }
                  htmlFor="width3"
                >
                  3
                </label>

                <input
                  className={styles.input}
                  id="width3-5"
                  type="radio"
                  name="width"
                  value={"width3-5"}
                  onChange={(e) => widthInptValueFunc(e)}
                />
                <label
                  className={
                    widthInptValue === "width3-5"
                      ? styles.labelWidthActive
                      : styles.labelWidth
                  }
                  htmlFor="width3-5"
                >
                  3.5
                </label>
              </div>
              <div className={styles.cost}>
                <p>Стоимость: {cost} руб.</p>
              </div>
              <form className={styles.formCalc}>
                <input type="text" placeholder="Ваше имя" required />
                <input type="tel" placeholder="Телефон" required />
                <div className={styles.formInner}>
                  <button>Отправить</button>
                  <p className={styles.licenseCalc}>
                    * Нажимая на кнопку вы даёте свое согласие на обработку
                    персональных данных
                  </p>
                </div>
              </form>
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
