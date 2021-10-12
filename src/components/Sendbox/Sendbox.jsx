import React from 'react';
import Checkboxes from '../Checkboxes/Checkboxes';
import ColorPicker from '../ColorPicker';
import Counter from '../Counter';
import Feedback from '../Feedback';
import FriendsList from '../FriendsList';
import News from '../News';
import PhoneBook from '../PhoneBook';
import Profile from '../Profile';
import Statistic from '../Statistic';
import Tabs from '../Tabs';
import Todos from '../Todos';
import Transactions from '../Transactions';
import data from './../../data.json';

const Sendbox =()=>{
return (
    <div>
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

export default Sendbox;