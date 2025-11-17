import styles from "./Year1969.module.css";
import { useState } from "react";
import ModalCrush from "../../../components/ModalCrush/ModalCrush";
import { eras } from "../../../data";
import { Link } from "react-router-dom";
export default function Year1969() {
  const [crush, setCrush] = useState(false);
  
  const era = eras["1969"];


  const crushOpen = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = (e.currentTarget.value || "").trim();

      if (value.toUpperCase() === "LO") {
        setCrush(true);
      }

      e.currentTarget.value = "";
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to {era.title}</h1>

        <div className={styles.infoContainer}>
          <div className={styles.wrapperImageComputer}>
            <img className={styles.imgComputer} src={era.img} alt="" />
          </div>
          <div className={styles.factContainer}>{era.fact}</div>
          <div className={styles.inpContainer}>
            <p>Введите LO</p>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter LO"
              onKeyDown={crushOpen}
            />
          </div>
          <div className={styles.btnImgContainer}>
            <img className={styles.btnImg} src={era.img2} alt="" />
          </div>
        </div>
        <div className={styles.technologies}>
          <h3 className={styles.titleTech}>Technologies:</h3>
          <ul className={styles.tech}>
            {era.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to="/timeline" className={styles.back}>
        ← Back to timeline
      </Link>
      {crush && <ModalCrush crush={crush} setCrush={setCrush} era={era}/>}
    </>
  );
}
