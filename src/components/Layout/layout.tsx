import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import styles from "./layout.module.css";


function Layout() {
  const location = useLocation()

  const getBackground = () =>{
    if(location.pathname.startsWith("/timeline")) return styles.timeline;
    if (location.pathname.startsWith("/about")) return styles.about;
    return ""
  }

    return (
      <div className={`${getBackground()}`}>
        <div className={styles.header}>
          <Header />
        </div>
        <Menu />
        <Outlet />
      </div>
    );
}

export default Layout