import React from "react";
import styles from "./Todos.module.css";
import TodosList from "./TodosList";
import {nanoid} from 'nanoid';

const TodosStatistic = (props) => {
  return (
    <div className={styles.statistic}>
      <p>Total: {props.total}</p>
      <p>Completed: {props.completedTodos}</p>
    </div>
  );
};

class TodoEditor extends React.Component {
  state = {
    value: '',
    showVorning: false
  }

  handleChange = (e) => {

    this.setState({value: e.target.value})
  }

  handleSubmit =(e)=> {
    e.preventDefault();

    if (!this.state.value.length) {
      this.setState({showVorning: true})
    }else {
      this.props.addTodo(this.state.value);
      this.setState({value: '', showVorning: false})

    }

   
  }

  render () {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          <p>New todo</p>
          <input type="text" value = {this.state.value} onChange = {this.handleChange}/>
        </label>
        <button type = 'submit'>Add todo</button>
        {this.state.showVorning && <p className = {styles.vorning}>You have to add some data to add todo card!</p>}
      </form>
    )
  }
}

class Todos extends React.Component {

  state = {
    todos: this.props.todos
  }

  toggleCompleted = (itemId)=> {
    this.setState(prevState=>( {
    todos: prevState.todos.map(todo=> todo.id === itemId ? {
        ...todo,
          completed: !todo.completed
        } : todo )
      
    }))
  }

  deleteTodo = (itemId)=> {
    this.setState(prevState => ({
        todos: prevState.todos.filter((todo)=>todo.id!==itemId)
    }))
  }

  addTodo = (text)=> {

    const newTodo = {
      title: text,
      id: nanoid(5), 
      completed: false
    }

    this.setState(prevState=>({
      todos: [
        newTodo,
        ...prevState.todos
        
      ]
    }))
  }


  render() {
      const todos = this.state.todos;
      const completedTodos = todos.reduce((total, todo)=> todo.completed? total+1:total, 0)
    return (
      <div className={styles.todos}>
        <TodoEditor addTodo = {this.addTodo}/>
        <h1 className={styles.title}> Todos</h1>
        <TodosStatistic total={todos.length} completedTodos={completedTodos}/>
        <TodosList todos={todos} toggleCompleted = {this.toggleCompleted} deleteTodo= {this.deleteTodo}/>
      </div>
    );
  }
}

export default Todos;
