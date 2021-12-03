import React, { useReducer } from 'react';
import Buttons from './Buttons';
import styles from './Feedback.module.css';
import Section from './Section';
import Statistics from './Statistics';


const feedbackReducer=(state, action)=>{
    switch (action.type) {
        case 'good':
            return {...state, good: state.good+1};
        case 'neutral':
            return {...state, neutral: state.neutral+1};
        case 'bad':
            return {...state, bad: state.bad+1};
        default:
            return state;
    }
}

const initialState = {good: 0, neutral: 0, bad: 0}


const Feedback =()=>{
  const [state, dispatch]=useReducer(feedbackReducer, initialState)

  const feedbackKeys = Object.keys(state);

  const getTotal = () => {
    return Object.values(state).reduce((acc, item) => acc + item, 0);
  };

  const getPositiveFeedback = ()=> {
    let goodResults = state.good/getTotal()*100;
    return state.good? Math.trunc(goodResults*100)/100 : 0;
}



    return (
        <div className = {styles.feedback}>
            <Section title = "Please leave feedback">
                <Buttons buttons = {feedbackKeys} handleClick = {(name)=>dispatch({type: name})}/>
            </Section>
           <Section title = "Statistics">
        <Statistics feedback ={state} 
            feedBackKeys = {feedbackKeys} 
            total = {getTotal()} 
            positiveFeedback = {getPositiveFeedback()}/>
        </Section>
            
            
        </div>)
}
 
export default Feedback;