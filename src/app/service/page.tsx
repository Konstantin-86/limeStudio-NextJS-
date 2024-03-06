import Link from "next/link";
import Image from "next/image";

import portfolio1 from "../../images/portfolio1.png";

export default function Service() {
  return (
    <div>
      Service page
      <Link href="/service/1">
        <Image src={portfolio1} alt="portfolio"></Image>
      </Link>
    </div>
  );
}
