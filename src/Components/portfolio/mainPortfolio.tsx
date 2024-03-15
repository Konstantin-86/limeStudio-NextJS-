"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import { Cormorant } from "next/font/google";
import styles from "./mainPortfolio.module.scss";

const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

type itemsT = {
  id: number;
  link: string;
  name: string;
  image: string;
};

const MainPortfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://27792221a552b52d.mokky.dev/portfolio", {})
      .then((data) => {
        setItems(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(items);

  return (
    <>
      <div className={cormorant.className}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Портфолио</h1>
          <div className={styles.innerItem}>
            {items.map((item: itemsT) => (
              <div className={styles.item} key={item.id}>
                <Link href={`/portfolio/${item.link}`}>
                  <p>{item.name}</p>
                  <div className={styles.innerImg}>
                    <Image
                      width={424}
                      height={591}
                      src={item.image}
                      alt="portfolio"
                    ></Image>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPortfolio;
