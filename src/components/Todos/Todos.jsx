import React from "react";
import styles from "./Todos.module.css";
import TodosList from "./TodosList.container";
import { connect } from "react-redux";
import { addTodo, fetchTodos } from "../../redux/todos/todos-operations";


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

 
    componentDidMount(){
        this.props.fetchTodos()
    }

  

      render (){
        const {addTodo, todos}= this.props;
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
    
  
}

const mapDispatchToProps =(dispatch)=>({
  fetchTodos: ()=> dispatch(fetchTodos()),
  addTodo: (value)=>dispatch(addTodo(value))
})

const mapStateToProps=(state)=>({
  todos: state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
