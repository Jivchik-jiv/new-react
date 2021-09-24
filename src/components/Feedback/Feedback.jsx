import React from 'react';
import Buttons from './Buttons';
import styles from './Feedback.module.css';
import Section from './Section';
import Statistics from './Statistics';

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleFeedbackChange = (name) => {
        this.setState (prevState=>( {
            ...prevState,
            [name]: prevState[name]+1
        }))
    }


     getTotal = () => {

     return Object.values(this.state).reduce(
        (acc, item) => acc + item,
        0
      );
         
    }

    getPositiveFeedback = ()=> {
        let goodResults = this.state.good/this.getTotal()*100;
        return this.state.good? Math.trunc(goodResults*100)/100 : 0;
    }


    render() { 
        let feedBackKeys = Object.keys(this.state);

        let total =this.getTotal();

        return (
        <div className = {styles.feedback}>
            <Section title = "Please leave feedback">
                <Buttons buttons = {feedBackKeys} handleClick = {this.handleFeedbackChange}/>
            </Section>
           <Section title = "Statistics">
        <Statistics feedback ={this.state} 
            feedBackKeys = {feedBackKeys} 
            total = {total} 
            positiveFeedback = {this.getPositiveFeedback()}/>
        </Section>
            
            
        </div>)
    }
}
 
export default Feedback;