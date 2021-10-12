import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation =()=> {

    return (
        <nav className = {styles.nav}>
            <ul className = {styles.list}>
            <li className={styles.item}> 
                    <NavLink 
                        exact
                        to="/" 
                        className ={styles.link} 
                        activeClassName={styles.active}>Home page</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                        to="/imagegallery" 
                        className ={styles.link} 
                        activeClassName={styles.active}>Image Gallery</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                    to="/sendbox"
                    className ={styles.link} 
                    activeClassName={styles.active}>Sendbox</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                    to="/booksshelf"
                    className ={styles.link} 
                    activeClassName={styles.active}>Booksshelf</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;