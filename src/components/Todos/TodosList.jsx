import React from "react";
import styles from "./Todos.module.css";
import cx from 'classnames'

class TodosList extends React.Component {

    makeOptionClasses = (completed)=> {
        return cx({
            [styles.item]: true,
            [styles.completed]: completed
        })
    }
  render() {
    return (
      <ul className={styles.list}>
        {this.props.todos.map((todo) => {
          return (
            <li className={this.makeOptionClasses(todo.completed)} key={todo.id}>
              <p>{todo.title}</p>
              <button type="button" className={styles.button}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodosList;
