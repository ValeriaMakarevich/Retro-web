import styles from "./ImageHome.module.css";

function ImageHome() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="/3befcb11-6dbd-49fa-887a-3ef57a775edf_a796fb91-c8e6-4f86-9c29-12dc35c2a3db (1).png"
        alt="изображение компьютера"
      />
    </div>
  );
}

export default ImageHome;
