import React from 'react';
import styles from '../PersonalContacts.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';

const AuthNav=()=>{
    return (
        <div>
            <NavLink to={routes.personalContacts.registration} className={styles.nav} activeClassName={styles.active}>Registration</NavLink>
            <NavLink to={routes.personalContacts.login} className={styles.nav} activeClassName={styles.active}>Login</NavLink>
        </div>
    )
}

export default AuthNav;