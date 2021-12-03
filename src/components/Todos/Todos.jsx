import React, { useEffect, useState } from "react";
import styles from "./Todos.module.css";
import TodosList from "./TodosList.container";
import { connect } from "react-redux";
import { addTodo, fetchTodos } from "../../redux/todos/todos-operations";
import { getTodos } from "../../redux/todos/todos-selectors";


const TodosStatistic = (props) => {
  return (
    <div className={styles.statistic}>
      <p>Total: {props.total}</p>
      <p>Completed: {props.completedTodos}</p>
    </div>
  );
};

const TodoEditor =({addTodo})=>{
  const [value, setValue]=useState("");

  const handleChange=(e)=>{
    setValue(e.target.value);
  };

  const [showVorning, setShowVorning]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!value.length) {
      setShowVorning(true)
    }else {
    
      addTodo(value);
      setShowVorning(false)
      setValue('')
    }
  };

  return (
    <form onSubmit = {handleSubmit}>
      <label>
        <p>New todo</p>
        <input type="text" value = {value} onChange = {handleChange}/>
      </label>
      <button type = 'submit'>Add todo</button>
      {showVorning && <p className = {styles.vorning}>You have to add some data to add todo card!</p>}
    </form>
  )
}

const Todos=({todos, fetchTodos, addTodo})=>{

  useEffect(()=>{
    fetchTodos()
  }, [fetchTodos])

  const reversedTodos = [...todos].reverse();
  const  completedTodos = todos.reduce((total, todo)=> todo.completed? total+1:total, 0);

  return (
    <div className={styles.todos}>
      <TodoEditor addTodo = {addTodo}/>
      <h1 className={styles.title}> Todos</h1>
      <TodosStatistic total={todos.length} completedTodos={completedTodos}/>
     {todos&& <TodosList todos={reversedTodos}/>}
    </div>
  );
}


const mapDispatchToProps =(dispatch)=>({
  fetchTodos: ()=> dispatch(fetchTodos()),
  addTodo: (value)=>dispatch(addTodo(value))
})

const mapStateToProps=(state)=>({
  todos: getTodos(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
