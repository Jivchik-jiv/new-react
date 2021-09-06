import React from 'react';
import FriendsList from './components/FriendsList/FriendsList';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import Transactions from './components/Transactions/Transactions';
import data from './data.json';


const App = () => {
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