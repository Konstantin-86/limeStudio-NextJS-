import MainDesing from "@/Components/mainDesingSection/MainDesign";
import styles from "./page.module.css";
import MainSlider from "@/Components/sliderMain/MainSlider";
import MainPotrfolio from "@/Components/mainPorfolio/MainPotrfolio";

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
    </>
  );
}
