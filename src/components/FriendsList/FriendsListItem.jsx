import React from 'react';

const FriendsListItem = ({avatar, name, isOnline, }) => {


    return (
        
         <li className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
         </li>
    
    )
}


export default FriendsListItem;