"use client";

import Image from "next/image";
import axios from "axios";

import { useEffect, useState } from "react";

export default function PortfolioItem({ params }: { params: { id: string } }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get(`https://27792221a552b52d.mokky.dev/items?id=${params.id}`)
      .then((data) => {
        setItem(data.data);
      });
  }, []);

  return (
    <>
      <h1>{params.id}</h1>
      {item.map((elem: any) => (
        <div className="portfoliods" key={elem.id}>
          {elem.image.other.map((image: any) => (
            <div className="asdf" key={image}>
              <Image
                priority
                src={image}
                alt="portfolio"
                width={400}
                height={400}
              ></Image>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
