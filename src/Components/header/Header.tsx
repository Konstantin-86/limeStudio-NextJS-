"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

import logo from "../../images/logo.png";
import telegramm from "../../images/telegr.png";
import whatsapp from "../../images/whatsapp.png";

export default function Header() {
  const [handleBurger, setHandleBurger] = useState(false);
  const closeBurger = () => setHandleBurger(false);
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <ul
            className={
              handleBurger
                ? styles.navListLeftActive
                : `${styles.navList} ${styles.navListLeft}`
            }
          >
            <li className={styles.navListItem}>
              <Link
                onClick={closeBurger}
                className={styles.listItemLink}
                href="/about"
              >
                Кто мы
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link
                onClick={closeBurger}
                className={styles.listItemLink}
                href="/service"
              >
                Услуги
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link
                onClick={closeBurger}
                className={`${styles.listItemLink} ${styles.portfolio}`}
                href="/portfolio"
              >
                Портфолио
                <div className={styles.portfolioSub}>
                  <p>Шторы</p>
                  <p>Карнизы</p>
                  <p>Солнцезащитные системы</p>
                </div>
              </Link>
            </li>
            <li className={styles.navListItem}>
              <Link
                onClick={closeBurger}
                className={styles.listItemLink}
                href="/contact"
              >
                Контакты
              </Link>
            </li>
          </ul>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              width={312}
              height={75}
              priority
              alt="logo"
            ></Image>
          </Link>
          <ul
            className={
              handleBurger
                ? styles.navListRightActive
                : `${styles.navList} ${styles.navListRight}`
            }
          >
            <li className={`${styles.navListItem} ${styles.listItemCalc}`}>
              <Link
                onClick={closeBurger}
                className={styles.listItemLink}
                href="/calc"
              >
                Калькулятор штор
              </Link>
            </li>
            <li onClick={closeBurger} className={styles.navListItem}>
              <a href="tel:+74995505028">+7 (499) 550-50-28</a>
            </li>
          </ul>
          <ul className={styles.navSocialsList}>
            <li className={styles.socialItem}>
              <Link href="/">
                <Image
                  src={telegramm}
                  width={22}
                  height={22}
                  alt="telegramm"
                ></Image>
              </Link>
              <span></span>
            </li>
            <li className={styles.socialItem}>
              <Link href="/">
                <Image
                  src={whatsapp}
                  width={22}
                  height={22}
                  alt="whatsapp"
                ></Image>
              </Link>
              <span></span>
            </li>
          </ul>
          <div className={styles.burgerInner}>
            <a href="tel:+74995505028">+7 (499) 550-50-28</a>
            <div
              onClick={() => setHandleBurger(!handleBurger)}
              className={handleBurger ? styles.burgerActive : styles.burger}
            >
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
              <span className={styles.line3}></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
