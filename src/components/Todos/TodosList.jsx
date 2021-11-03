import React from "react";
import styles from "./Todos.module.css";
import cx from 'classnames'

const TodosList = (props) => {
  const makeOptionClasses = (completed) => {
    return cx({
      [styles.item]: true,
      [styles.completed]: completed,
    });
  };

const { todos, toggleCompleted, deleteTodo } = props;
  return (
    <ul className={styles.list}>
      {todos.map(({id, completed, title}) => {
        return (
          <li className={makeOptionClasses(completed)} key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleCompleted({id, completed: !completed})}
            />
            <p>{title}</p>
            <button
              type="button"
              className={styles.button}
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};


export default TodosList;
