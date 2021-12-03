import React, { useState } from 'react';
import styles from './Tabs.module.css'


const tabs = [
    {id:1, title: "Title 1", content: "11111 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"},
    {id:2, title: "Title 2", content: "22222 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"},
    {id:3, title: "Title 3", content: "33333 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"},{id:4, title: "Title 4", content: "44444 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"}
]


const Tabs =()=>{
    const [selectedTab, setSelectedTab]=useState(0);

    const changeSelectedTab = (newId)=>{
        setSelectedTab(newId)
    }
    const activeTab= tabs[selectedTab];

    return  <div className = {styles.tabs}>
    <div>
        {tabs.map(({id, title}, index)=>{
            return <button type = "button" onClick = {()=>changeSelectedTab(index)} key ={id}>{title}</button>
        })}
    </div>
    <h2>{activeTab.title}</h2>
    <p>{activeTab.content}</p>

</div>;
}
 
export default Tabs;