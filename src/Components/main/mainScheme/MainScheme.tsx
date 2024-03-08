import { Cormorant } from "next/font/google";

import styles from "./MainScheme.module.scss";

const cormorant = Cormorant({
  weight: ["600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const MainScheme = () => {
  return (
    <section className={cormorant.className}>
      <h2 className={styles.title}>Схема работы</h2>
      <div className={styles.mainSchemeWrap}>
        <div className={styles.item}>
          <div className={styles.itemInnerTitle}>
            <div className={styles.itemNumber}>1</div>
            <h3 className={styles.itemTitle}>Оставьте заявку</h3>
          </div>
          <div className={styles.itemInnerText}>
            <p>
              Или свяжитесь любым удобным способом. Мы ответим на все вопросы и
              назначим встречу с дизайнером
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemInnerTitle}>
            <div className={styles.itemNumber}>2</div>
            <h3 className={styles.itemTitle}>Встреча с дизайнером</h3>
          </div>
          <div className={styles.itemInnerText}>
            <p>
              Дизайнер приедет бесплатно с образцами и каталогами тканей и
              полностью проконсультирует вас, сделает все технические замеры
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemInnerTitle}>
            <div className={styles.itemNumber}>3</div>
            <h3 className={styles.itemTitle}>Пошив изделий</h3>
          </div>
          <div className={styles.itemInnerText}>
            <p>
              Мы осуществляем полный авторский надзор пошива в швейном цехе, где
              работают опытные швеи и технолог
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemInnerTitle}>
            <div className={styles.itemNumber}>4</div>
            <h3 className={styles.itemTitle}>Монтаж</h3>
          </div>
          <div className={styles.itemInnerText}>
            <p>
              Осуществим доставку и установку карнизов и повесим шторы, отпарив
              их. Все работы проводятся под ключ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScheme;
