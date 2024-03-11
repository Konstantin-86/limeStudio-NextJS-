import styles from "./MainDiscount.module.scss";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export default function MainDiscount() {
  return (
    <>
      <section className={cormorant.className}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <form>
              <h2 className={styles.title}>Cкидка 5%</h2>
              <p className={styles.text}>При обращении через сайт</p>
              <div className={styles.formInner}>
                <input type="text" placeholder="Ваша имя" name="name" />
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="Ваш телефон"
                  name="phone"
                />
                <button className={styles.button} type="submit">
                  Отправить
                </button>
              </div>
            </form>
            <p className={styles.license}>
              * Нажимая на кнопку вы даёте свое согласие на обработку
              персональных данных
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
