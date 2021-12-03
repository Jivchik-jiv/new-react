import React from 'react';
import styles from '../PersonalContacts.module.css';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import { connect } from 'react-redux';
import { selectIsAuth } from '../../../redux/auth/auth-selectors';

const MainNav=({isAuthenticated})=>{
    return (
        <div>
            <NavLink  exact to={routes.personalContacts.main} className={styles.nav} activeClassName={styles.active}>Main</NavLink>
            {isAuthenticated&&<NavLink to={routes.personalContacts.contacts} className={styles.nav} activeClassName={styles.active}>Contacts</NavLink>}
        </div>
    )
}

const mapStateToProps=(state)=>({
    isAuthenticated: selectIsAuth(state),
})

export default connect(mapStateToProps)(MainNav);