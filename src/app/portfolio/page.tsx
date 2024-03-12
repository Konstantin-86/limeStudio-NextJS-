"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";

export default function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://27792221a552b52d.mokky.dev/items").then((data) => {
      setItems(data.data);
    });
  }, []);

  return (
    <header className="portfolio">
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
