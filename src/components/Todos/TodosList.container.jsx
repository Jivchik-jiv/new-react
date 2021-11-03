import TodosList from "./TodosList";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/todos/todos-operations";

const mapDispatchToProps = (dispatch)=>({
  toggleCompleted: (id)=>dispatch(toggleTodo(id)),
  deleteTodo: (id)=>dispatch(deleteTodo(id))
});

// const mapStateToProps = (state)=> {

//  return {todos: state.todos}
// };

export default connect(null, mapDispatchToProps)(TodosList);