"use client";

import Image from "next/image";
import axios from "axios";

import portfolio1 from "../../images/portfolio1.png";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Portfolio() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://27792221a552b52d.mokky.dev/items").then((data) => {
      setItems(data.data);
    });
  }, []);
  console.log(items[0]);

  return (
    <header className="portfolio">
      portfolio
      {items.map((item: any) => (
        <div className="portfolio" key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.forWhat}</h2>
          <Link href={`/portfolio/${item.id}`}>
            <Image
              width={400}
              height={400}
              src={item.image.main}
              alt="mainImage"
            ></Image>
          </Link>

          {item.image.other.map((image: any) => (
            <div key={image} className="wrapOtherImages">
              <Image
                width={200}
                height={200}
                src={image}
                alt="otherImage"
              ></Image>
            </div>
          ))}
        </div>
      ))}
    </header>
  );
}
