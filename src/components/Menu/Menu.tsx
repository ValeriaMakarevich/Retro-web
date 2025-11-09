import { NavLink } from "react-router-dom";
import { menuArray } from "../../data";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <>
      <div className={styles.menu}>
       {menuArray.map((item, id) =>{
        return (
          <NavLink key={id} to={item.to}>
            <button>{item.name}</button>
          </NavLink>
        );
       })}
      </div>
    </>
  );
}

export default Menu;
