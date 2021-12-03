import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';
import styles from '../PersonalContacts.module.css';
import avatarImage from './../../../images/monster.png'

const UserMenu=({user,onLogout})=>{

    return (
        <div className={styles.userMenu}>
            <img src={avatarImage} alt="" className={styles.avatar}/>
            <span className={styles.userGreeting}>Welcom, {user.name}</span>
            <button className={styles.btn} onClick={onLogout}>Logout</button>
        </div>
    )
}

const mapStateToProps=state=>({
    user: selectUser(state),
})

const mapDispatchToProps=dispatch=>({
    onLogout:()=>dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

