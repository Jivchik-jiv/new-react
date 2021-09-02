import React from 'react';
import FriendsList from './components/FriendsList/FriendsList';
import Profile from './components/Profile';
import Statistic from './components/Statistic';
import Transactions from './components/Transactions';
import data from './data.json';


const App = () => {
console.log(data)
    return (
        <div>
            <h1>
                Main page
            </h1>
            <Profile {...data.user}/>
            <Statistic stats={data.statistic} title = "Statistic"/>
            <FriendsList friends= {data.friends}/>
            <Transactions items = {data.transactions}/>
        </div>
    )
}

export default App;