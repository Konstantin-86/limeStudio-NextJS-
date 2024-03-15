"use client";
import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { redirect, usePathname, useRouter } from "next/navigation";

import styles from "./Header.module.scss";

import logo from "../../images/logo.png";
import telegramm from "../../images/telegr.png";
import whatsapp from "../../images/whatsapp.png";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  console.log(router);

  const [handleBurger, setHandleBurger] = useState(false);
  const closeBurger = () => setHandleBurger(false);

  const routerFunc = (e: any) => {
    e.preventDefault();
    router.push("/about");
  };
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
            <li
              className={
                pathname === "/about"
                  ? `${styles.navListItemActive} ${styles.navListItem}`
                  : styles.navListItem
              }
            >
              <Link
                onClick={closeBurger}
                className={styles.listItemLink}
                href="/about"
              >
                Кто мы
              </Link>
            </li>
            <li
              className={
                pathname === "/service"
                  ? `${styles.navListItemActive} ${styles.navListItem}`
                  : styles.navListItem
              }
            >
              <Link
                onClick={closeBurger}
                className={styles.listItemLink}
                href="/service"
              >
                Услуги
              </Link>
            </li>
            <li
              className={
                pathname === "/portfolio"
                  ? `${styles.navListItemActive} ${styles.navListItem} ${styles.portfolioItem}`
                  : `${styles.navListItem} ${styles.portfolioItem}`
              }
            >
              <Link
                onClick={closeBurger}
                className={`${styles.listItemLink} ${styles.portfolio}`}
                href="/portfolio"
              >
                Портфолио
              </Link>
              <div className={styles.portfolioSub}>
                <Link href={"/portfolio/curtains"}>Шторы</Link>
                <Link href={"/portfolio/cornices"}>Карнизы</Link>
                <Link href={"/portfolio/sunProtection"}>
                  Солнцезащитные системы
                </Link>
              </div>
            </li>
            <li
              className={
                pathname === "/contact"
                  ? `${styles.navListItemActive} ${styles.navListItem}`
                  : styles.navListItem
              }
            >
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
            <li
              className={
                pathname === "/calc"
                  ? `${styles.navListItemActive} ${styles.navListItem} ${styles.listItemCalc}`
                  : `${styles.navListItem} ${styles.listItemCalc}`
              }
            >
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
