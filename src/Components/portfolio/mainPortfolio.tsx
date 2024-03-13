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

const MainPortfolio = () => {
  const [items, setItems] = useState([]);
  const [limit, setLimlit] = useState(3);

  useEffect(() => {
    axios
      .get("https://27792221a552b52d.mokky.dev/items", {
        params: {
          limit: limit,
        },
      })
      .then((data) => {
        setItems(data.data.items);
      })
      .catch((err) => console.log(err));
  }, [limit]);
  console.log(items);

  const showMore = () => {
    setLimlit(limit + 3);
  };

  return (
    <>
      <div className={cormorant.className}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Портфолио</h1>
          <div className={styles.innerItems}>
            {items &&
              items.map((item: any) => (
                <div className={styles.item} key={item.id}>
                  <Link href={`/portfolio/${item.id}`}>
                    <Image
                      priority
                      width={424}
                      height={591}
                      src={item.image.main}
                      alt="mainImage"
                    ></Image>
                  </Link>
                  <p className={styles.forWhat}># {item.forWhat}</p>
                  <h2 className={styles.title}>{item.name}</h2>
                </div>
              ))}
          </div>
          <button className={styles.button} onClick={showMore}>
            Показать еще
          </button>
        </div>
      </div>
    </>
  );
};

export default MainPortfolio;
