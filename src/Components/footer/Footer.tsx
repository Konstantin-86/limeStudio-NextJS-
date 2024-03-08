import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

import logo from "@/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.myfooter}>
      <div className={styles.container}>
        <div className={styles.footerInnerLinks}>
          <div className={styles.footerItem}>
            <Link href={"/"} className={styles.logo}>
              <Image src={logo} alt="logo"></Image>
            </Link>
            <Link href={"https://web.telegram.org/"}>Telegram</Link>
            <Link href={"https://web.telegram.org/"}>Whatsapp</Link>
          </div>
          <div className={styles.footerItem}>
            <Link href={"/"} className={styles.footerItemTitle}>
              Портфолио
            </Link>
            <Link href={"/"}>Шторы</Link>
            <Link href={"/"}>Декоративные элементов</Link>
            <Link href={"/"}>Солнцезащитные системы</Link>
          </div>
          <div className={styles.footerItem}>
            <Link href={"/"} className={styles.footerItemTitle}>
              О нас
            </Link>
            <Link href={"/"}>Кто мы</Link>
            <Link href={"/"}>Услуги</Link>
            <Link href={"/"}>Работы</Link>
          </div>
          <div className={styles.footerItem}>
            <Link href={"/"} className={styles.footerItemTitle}>
              Контакты
            </Link>
            <a href="tel:+74995505028">+7 (499) 550-50-28</a>
            <a href="mailto:lime-s@lime-s.ru">lime-s@lime-s.ru</a>
            <p>Москва, Дмитровское шоссе д.42</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <Link href={"/"}>Политика конфиденциальности</Link>
          <div className={styles.footerBottomText}>
            Сайт разработал Константин Якимцев
            <Link
              href={
                "https://orenburg.hh.ru/resume/7c09a4beff0c594a830039ed1f697078575576"
              }
            >
              Профиль на HH
            </Link>
          </div>
          <p>© {currentYear} Все материалы сайта защищены авторским правом</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
