import Image from "next/image";
import { Cormorant } from "next/font/google";
import ButtonModal from "../buttonModal/ButtonModal";
import styles from "./MainDesign.module.scss";

import image from "@/images/mainDesingImage.png";

const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function MainDesing() {
  return (
    <section className={cormorant.className}>
      <div className={styles.mainDesingWrap}>
        <div
          className={`${styles.mainDesingItem} ${styles.mainDesingItemText}`}
        >
          <h2 className={styles.mainDesingTitle}>
            Дизайн и пошив штор <br /> <span>по индивидуальному заказу</span>
          </h2>
          <ul className={styles.mainDesingList}>
            <li className={styles.mainDesingListItem}>
              Идеальные шторы и идеальный текстиль
            </li>
            <li className={styles.mainDesingListItem}>
              Комплексное оформление окон частных и бизнес проектов
            </li>
            <li className={styles.mainDesingListItem}>
              Выезд дизайнера бесплатно
            </li>
            <li className={styles.mainDesingListItem}>Свой швейный цех</li>
            <li className={styles.mainDesingListItem}>
              Богатая библиотека тканей
            </li>
            <li className={styles.mainDesingListItem}>
              Онлайн подбор вариантов
            </li>
          </ul>
          <ButtonModal text="БЕсплатная консультация дизайнера" />
        </div>
        <div className={styles.mainDesingItem}>
          <Image src={image} alt="image"></Image>
        </div>
      </div>
    </section>
  );
}
