import React, { useEffect, useReducer, useRef } from 'react';
import styles from './Timer.module.css';

const timeReducer=(state, action)=>{
    switch (action.type){
        case "start":
            return {...state, isRunning: true};
        case "stop":
            return {...state, isRunning: false};
        case "reset":
            return {time: 0, isRunning: false};
        case "increase":
            return {...state, time: state.time + 1};
        default:
            return {state};
    }
}

const getTwoDigits = (num)=>{
    if(num<10){
        return `0${num}`
    };
    return num;
}

const getAsTime=(num)=>{

    

    let ss=0;
    let mm=0;
    let hh=0;
    
    if(num<60){
        return `00:${getTwoDigits(num)}`
    }
    if(num<3600){
        ss=num%60;
        mm=Math.floor(num/60);
        return `${getTwoDigits(mm)}:${getTwoDigits(ss)}`
    }

    ss=num%60;
    mm=Math.floor((num%3600)/60);
    hh=Math.floor(num/3600);

    return `${getTwoDigits(hh)}:${getTwoDigits(mm)}:${getTwoDigits(ss)}`

}

const Stopwatch = ()=> {
    const [state, dispatch]=useReducer(timeReducer, {
        time: 0,
        isRunning: false
    });

    let timeInterval=useRef();

    const handleStopwatch = (e)=>{
        dispatch({type: e.target.name})
    };


    useEffect(()=>{
        if(state.isRunning){
            timeInterval.current=setInterval(()=>{
                console.log("Timer is running")
                dispatch({type: "increase"});
            }, 1000)
        } else {
            clearInterval(timeInterval.current)
        }

        return ()=>{
            clearInterval(timeInterval.current);
        }
    }, [state.isRunning])

   

    


    return (
        <div className={styles.timerWrap}>
            <p>{getAsTime(state.time)}</p>
            <button type="button" name="start" onClick={handleStopwatch}>Start</button>
            <button type="button" name="stop" onClick={handleStopwatch}>Stop</button>
            <button type="button" name="reset" onClick={handleStopwatch}>Reset</button>
        </div>
    )
}


export default Stopwatch;