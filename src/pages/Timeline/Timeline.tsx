
import { Link } from "react-router-dom";
import styles from "./Timeline.module.css";
import { timelineData } from "../../data";

export default function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.point}>
            <div className={styles.yearTop}>{item.year}</div>

            <Link
              to={`/eras/${item.year}`}
              className={`${styles.dot}`}
            />

          
              <div className={styles.factBottom}>{item.fact}</div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
