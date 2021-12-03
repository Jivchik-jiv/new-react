import React, { useEffect, useState } from 'react';
import styles from './Timer.module.css';

const Clock = ()=> {
    const [time, setTime]=useState(new Date());

    useEffect(()=>{
       
        let clockInterval = setInterval(()=>{
            setTime(new Date())
        }, 1000);

        return ()=>{clearInterval(clockInterval)}
    },[])
    return (
        <div className={styles.timerWrap}>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}


export default Clock;