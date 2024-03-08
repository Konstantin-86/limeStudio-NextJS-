import Image from "next/image";
import Link from "next/link";

import { Cormorant } from "next/font/google";

import img1 from "@/images/mainReviews/image1.png";
import img2 from "@/images/mainReviews/image2.png";
import img3 from "@/images/mainReviews/image3.png";
import styles from "./mainReviews.module.scss";

const cormorant = Cormorant({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const MainReviews = () => {
  return (
    <section className={cormorant.className}>
      <div className={styles.container}>
        <h2 className={styles.title}>Отзывы</h2>
        <div className={styles.inner}>
          <div className={`${styles.item} ${styles.itemContent}`}>
            <div className={styles.itemTitle}>
              <Image src={img1} alt="image1"></Image>
              <div className={styles.titleName}>
                <p className={styles.name}>Наташа К.</p>
                <p className={styles.date}>21.01.2024</p>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                Всем добрый день! Планируя ремонт в квартире, мы особое внимание
                уделили детской, поскольку у нас разнополые дети и хотелось бы,
                что бы комната была максимально функциональна, комфорта и, в то
                же время, оставалась просторной, лаконичной...
              </p>
            </div>
            <div className={styles.link}>
              <Link href={"https://yandex.ru/maps/"}>Читать полностью</Link>
            </div>
          </div>
          <div className={`${styles.item} ${styles.itemContent}`}>
            <div className={styles.itemTitle}>
              <Image src={img2} alt="image1"></Image>
              <div className={styles.titleName}>
                <p className={styles.name}>Андрей И.</p>
                <p className={styles.date}>17.09.2023</p>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                В компанию Lime я обратился по просьбе жены, которая не в силах
                была продумать дизайн интерьера квартиры. А ремонт требовался, и
                капитальный, поэтому хотелось сделать все как можно лучше. После
                заключения договора мне выделили личный...
              </p>
            </div>
            <div className={styles.link}>
              <Link href={"https://yandex.ru/maps/"}>Читать полностью</Link>
            </div>
          </div>
          <div className={`${styles.item} ${styles.itemContent}`}>
            <div className={styles.itemTitle}>
              <Image src={img3} alt="image1"></Image>
              <div className={styles.titleName}>
                <p className={styles.name}>Жмых П.</p>
                <p className={styles.date}>10.09.2025</p>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                Перед тем, как начать ремонт в квартире, мы с супругой первым
                делом начали искать в интернете; студию дизайна квартир и
                наткнулись на Lime. И не прогадали. Адекватная цена, удобный
                способ связи, профессиональные дизайнеры. Легкое общение...
              </p>
            </div>
            <div className={styles.link}>
              <Link href={"https://yandex.ru/maps/"}>Читать полностью</Link>
            </div>
          </div>
          <div className={`${styles.item} ${styles.itemVideo}`}></div>
        </div>
      </div>
    </section>
  );
};

export default MainReviews;
