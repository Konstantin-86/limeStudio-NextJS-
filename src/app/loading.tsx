import styles from "./page.module.css";
const loading = () => {
  return (
    <>
      <div className={styles.circleContainer}>
        <div className={styles.circleProgress}></div>
      </div>
    </>
  );
};

export default loading;
