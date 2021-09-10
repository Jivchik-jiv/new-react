import React from "react";
import styles from "./Todos.module.css";
import cx from 'classnames'

const TodosList = ({todos, toggleCompleted, deleteTodo}) => {

   const makeOptionClasses = (completed)=> {
        return cx({
            [styles.item]: true,
            [styles.completed]: completed
        })
    }

  
  
    return (
      <ul className={styles.list}>
        {todos.map((todo) => {
          return (
            <li className={makeOptionClasses(todo.completed)} key={todo.id}>
                <input type="checkbox" checked = {todo.completed} onChange = {()=>toggleCompleted(todo.id)}/>
                <p>{todo.title}</p>
                <button type="button" className={styles.button} onClick = {()=>deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }


export default TodosList;
