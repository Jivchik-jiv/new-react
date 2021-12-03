import React from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import Timer from '../Timer/Timer';

const Navigation =()=> {

    return (
        <div className={styles.navWrap}>
        <nav className = {styles.nav}>
            <ul className = {styles.list}>
            <li className={styles.item}> 
                    <NavLink 
                        exact
                        to={routes.home}
                        className ={styles.link} 
                        activeClassName={styles.active}>Home page</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                        to={routes.imageGallery} 
                        className ={styles.link} 
                        activeClassName={styles.active}>Image Gallery</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                    to={routes.sendbox}
                    className ={styles.link} 
                    activeClassName={styles.active}>Sendbox</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                    to={routes.booksShelf.main}
                    className ={styles.link} 
                    activeClassName={styles.active}>Booksshelf</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                    to={routes.nasa.main}
                    className ={styles.link} 
                    activeClassName={styles.active}>Nasa</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink 
                    
                    to={routes.personalContacts.main}
                    className ={styles.link} 
                    activeClassName={styles.active}>Personal Contacts</NavLink>
                </li>
            </ul>
        </nav>
        <Timer/>
        </div>
    )
}

export default Navigation;