import Image from "next/image";
import { Cormorant } from "next/font/google";

import styles from "./MainWhyWe.module.scss";

import logo from "@/images/logo.png";
import ButtonModal from "@/Components/buttonModal/ButtonModal";
import WhyMeSwiper from "./WhyMeSwiper";

const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const MainWhyWe = () => {
  return (
    <section className={cormorant.className}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Почему мы лучшие</h2>
        <div className={styles.inner}>
          <div className={`${styles.item} ${styles.itemContent}`}>
            <h3 className={styles.logoText}>LIME STUDIO</h3>
            <p>Cалон по пошиву текстиля для дома в Москве.</p>
            <p>
              Мы предоставляем полный комплекс услуг по преображению и созданию
              стильного уюта Вашего дома: от замеров и разработки дизайна до
              установки готовых изделий и тщательного отслеживания качества
              проводимых работ.
            </p>
            <p>
              Доверив нам оформление окна, Вы получаете возможность реализовать
              дизайнерскую задумку любой сложности и получить первоклассное и
              индивидуальное решение для Вашего помещения.
            </p>
            <p>
              Мы работаем с лучшими поставщиками и европейскими фабриками
              тканей. Также мы можем создать свой авторский дизайн ткани,что
              обеспечит рождение полностью эксклюзивной вещи.
            </p>
            <ButtonModal
              textadf="Пригласить дизайнера"
              contentBgColor="#89B867"
            />
          </div>
          <div className={styles.item}>
            <WhyMeSwiper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainWhyWe;
