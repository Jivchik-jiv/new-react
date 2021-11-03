import React from "react";
import { connect } from "react-redux";
import Clicker from "./Clicker";
import styles from "./Counter.module.css";
import * as actions from '../../redux/counter/counter-actions'

const Counter = ({value, onIncrement, onDecrement, step}) => {
  return (
    <div className={styles.counter}>
      <h1 className={styles.title}>Counter</h1>
      <p className={styles.result}>{value}</p>
      <Clicker handleIncrement={()=>onIncrement(step)} handleDecrement={()=>onDecrement(step)}/>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        value: state.counter.value,
        step: state.counter.step
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        onIncrement: (step)=>dispatch(actions.increment(step)),
        onDecrement: (step)=>dispatch(actions.decrement(step))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
