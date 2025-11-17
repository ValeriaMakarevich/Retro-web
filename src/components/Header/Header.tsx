import { useLocation, useParams } from "react-router-dom";
import styles from "./Header.module.css";




function Header() {
const location = useLocation();
const {year}= useParams()
console.log(location)

const getPageTitle = (path: string) => {
  if (path === "/") return "Home";
  if (path === "/timeline") return "Timeline";
  if (path.startsWith("/eras/")) return year ;
  if (path === "/gallery") return "Gallery";
  if (path === "/about") return "About";
  return "Page Not Found";
};

  return (
    <div className={styles.container}>
      <div className={styles.text}>{getPageTitle(location.pathname)}</div>
    </div>
  );
}

export default Header;
