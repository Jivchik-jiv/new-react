import React from 'react';
import Checkboxes from './components/Checkboxes/Checkboxes';
import ColorPicker from './components/ColorPicker';
import Counter from './components/Counter';
import Feedback from './components/Feedback';
import FriendsList from './components/FriendsList';
import News from './components/News';
import PhoneBook from './components/PhoneBook';
import Profile from './components/Profile';
import Statistic from './components/Statistic';
import Tabs from './components/Tabs';
import Todos from './components/Todos';
import Transactions from './components/Transactions';
import data from './data.json';



const App = () => {
    return (
        <div>
            <h1>
                Main page
            </h1>
            <News/>
            <Tabs/>
            <PhoneBook/>
            <Feedback/>
            <Checkboxes/>
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