import React from 'react';
import styles from './FriendsList.module.css';

const FriendsListItem = ({avatar, name, isOnline}) => {

    let status = isOnline ? "online" : "offline" 

    return (
        
         <li className={styles.item}>
            <span className={styles[status]}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
         </li>
    
    )
}


export default FriendsListItem;