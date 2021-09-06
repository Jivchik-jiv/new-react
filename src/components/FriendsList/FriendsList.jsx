import React from 'react';
import FriendsListItem from './FriendsListItem';
import styles from './FriendsList.module.css'

const FriendsList = ({friends}) => {


    return (
        <div className= {styles.friends}>
            <h1 className= {styles.title}>Friends</h1>
            <ul className = {styles.list}>
                {friends.map(friend=> {
                  
                    return <FriendsListItem {...friend}  key={friend.id}/>
                })}
            </ul>
        </div>
    )
}

export default FriendsList;