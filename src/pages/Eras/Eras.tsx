import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { eras } from "../../data";

type CSSModule = Record<string, string>;

const importStyle = async (year: string): Promise<CSSModule> => {
  const map: Record<string, () => Promise<{ default: CSSModule }>> = {
    "1969": () => import("./styles/1969.module.css"),
    "1983": () => import("./styles/1983.module.css"),
    "1990": () => import("./styles/1990.module.css"),
  };
  const importer = map[year] || map["1998"];
  const mod = await importer();
  return mod.default;
};

 export default function Eras() {

  const { year } = useParams<{ year: string }>();
  const [styles, setStyles] = useState<CSSModule | null>(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    if (year) {
      setLoading(true);
      importStyle(year)
        .then(setStyles)
        .finally(() => setLoading(false));
    }
  }, [year]);

  const era = year ? eras[year] : null;

 
  if (!era || loading || !styles) {
    return (
      
        <div style={{ padding: "3rem", textAlign: "center" }}>
          {loading ? "Загрузка..." : "Эпоха не найдена"}
          <br />
          <Link to="/timeline">← Назад</Link>
        </div>
      
    );
  }

 
  return (
   
      <div className={styles.container}>
        <h1 className={styles.title}>
             {era.title}
        </h1>

        <p className={styles.fact}>{era.fact}</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Событие</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {era.events.map((e, i) => (
              <tr key={i} className={i % 2 === 0 ? styles.even : styles.odd}>
                <td>{e.name}</td>
                <td>{e.info}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {era.screenshot && (
          <img src={era.screenshot} className={styles.screenshot} />
        )}
        {era.gif && <img src={era.gif} className={styles.gif} />}

        <h3>Технологии:</h3>
        <ul className={styles.tech}>
          {era.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <Link to="/timeline" className={styles.back}>
          ← Back
        </Link>
      </div>
  );
}
