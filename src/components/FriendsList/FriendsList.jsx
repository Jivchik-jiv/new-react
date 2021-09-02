import React from 'react';
import FriendsListItem from './FriendsListItem';

const FriendsList = ({friends}) => {


    return (
        <div>
            <ul>
                {friends.map(friend=> {
                  
                    return <FriendsListItem {...friend}/>
                })}
            </ul>
        </div>
    )
}

export default FriendsList;