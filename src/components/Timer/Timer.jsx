import React from 'react';
import styles from './Timer.module.css';
import Clock from './Clock'
import Stopwatch from './Stopwatch'

const Timer = ()=> {
    return (
        <div className={styles.timerWrap}>
            <Stopwatch/>
            <Clock/>
        </div>
    )
}


export default Timer;