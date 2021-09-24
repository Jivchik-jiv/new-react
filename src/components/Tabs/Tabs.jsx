import React from 'react';
import styles from './Tabs.module.css'


const tabs = [
    {id:1, title: "Title 1", content: "11111 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"},
    {id:2, title: "Title 2", content: "22222 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"},
    {id:3, title: "Title 3", content: "33333 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"},{id:4, title: "Title 4", content: "44444 Herer is dh ksdv jkjdsdv jkjskds skjds dsjd ds  sdsjdkfdskf dfsaf saaf"}
]



class Tabs extends React.PureComponent {
state ={
    selectedTabIndex: 2
}

// shouldComponentUpdate (prevProps, prevState) {
//     return prevState.selectedTabIndex !== this.state.selectedTabIndex
// }

changeSelectedTab = (newId) => {
    this.setState({selectedTabIndex: newId})
}


    render() { 

        let activeTab = tabs[this.state.selectedTabIndex]

        return <div className = {styles.tabs}>
            <div>
                {tabs.map(({id, title}, index)=>{
                    return <button type = "button" onClick = {()=>this.changeSelectedTab(index)} key ={id}>{title}</button>
                })}
            </div>
            <h2>{activeTab.title}</h2>
            <p>{activeTab.content}</p>

        </div>;
    }
}
 
export default Tabs;