import React from 'react';
import ColorPicker from './components/ColorPicker';
import Counter from './components/Counter';
import FriendsList from './components/FriendsList';
import Profile from './components/Profile';
import Statistic from './components/Statistic';
import Todos from './components/Todos';
import Transactions from './components/Transactions';
import data from './data.json';



const App = () => {
    return (
        <div>
            <h1>
                Main page
            </h1>
            <Todos todos = {data.todos}/>
            <ColorPicker/>
            <Counter/>
            <Profile {...data.user}/>
            <Statistic stats={data.statistic} title = "Statistic"/>
            <FriendsList friends= {data.friends}/>
            <Transactions items = {data.transactions}/>
        </div>
    )
}

export default App;