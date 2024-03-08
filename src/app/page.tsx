import MainDesing from "@/Components/main/mainDesingSection/MainDesign";
import styles from "./page.module.css";
import MainSlider from "@/Components/main/mainSlider/MainSlider";
import MainPotrfolio from "@/Components/main/mainPorfolio/MainPotrfolio";
import MainScheme from "@/Components/main/mainScheme/MainScheme";
import MainWhyWe from "@/Components/main/mainWhyWe/MainWhyWe";
import MainReviews from "@/Components/main/mainReviews/MainReviews";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className={styles.homeWrap}>
          <MainSlider />
          <MainDesing />
        </div>
      </div>
      <MainPotrfolio />
      <div className="container">
        <MainScheme />
      </div>
      <MainWhyWe />
      <MainReviews />
    </>
  );
}
