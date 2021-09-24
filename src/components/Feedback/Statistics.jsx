import React from 'react';
import styles from './Feedback.module.css';
import Notification from './Notification';

const Statistics = ({feedBackKeys, feedback, total, positiveFeedback})=> {

   

    return (
        <div className = {styles.statistics}>
                {total>0? <ul className = {styles.list}>
                    {feedBackKeys.map(item=> {
                        return <li className = {styles.item} key = {item}>
                            {item}: {feedback[item]}
                        </li>
                    })}
                    <li className = {styles.item}>Total: {total}  </li>
                    <li className = {styles.item}>Positive feedback: {positiveFeedback}&#37;  </li>
                </ul>:
                <Notification note = "No feedback given"/>
                }
                

            </div>
    )
}

export default Statistics;