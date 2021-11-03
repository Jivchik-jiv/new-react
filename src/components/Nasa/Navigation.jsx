import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from "./Nasa.module.css";

const Navigation = ()=>{
    return <nav>
    <ul className={styles.navlist}>
      <li className={styles.item}>
        <NavLink
          to={routes.nasa.images}
          activeClassName={styles.active}
          className={styles.navlink}
        >
          Top images
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.nasa.search}
          activeClassName={styles.active}
          className={styles.navlink}
        >
          Search
        </NavLink>
      </li>
    </ul>
  </nav>
}

export default Navigation;