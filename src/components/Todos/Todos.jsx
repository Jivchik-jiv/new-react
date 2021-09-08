import React from "react";
import styles from "./Todos.module.css";
import TodosList from "./TodosList";

const TodosStatistic = (props) => {
  return (
    <div className={styles.statistic}>
      <p>Total: {props.total}</p>
      <p>Completed: {props.completedTodos}</p>
    </div>
  );
};

class Todos extends React.Component {

    countCo
  render() {
      const todos = this.props.todos;
      const completedTodos = todos.reduce((total, todo)=> todo.completed? total+1:total, 0)
    return (
      <div className={styles.todos}>
        <h1 className={styles.title}> Todos</h1>
        <TodosStatistic total={todos.length} completedTodos={completedTodos}/>
        <TodosList todos={todos} />
      </div>
    );
  }
}

export default Todos;
