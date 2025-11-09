import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";



function Header() {
const location = useLocation();
console.log(location)

const getPageTitle = (path: string) => {
  if (path === "/") return "Home";
  if (path === "/timeline") return "Timeline";
  if (path === "/eras") return "Era";
  if (path === "/gallery") return "Gallery";
  if (path === "/about") return "About";
  return "Page Not Found";
};

  return (
    <div className={styles.container}>{getPageTitle(location.pathname)}</div>
  );
}

export default Header;
