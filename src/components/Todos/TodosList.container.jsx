import TodosList from "./TodosList";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/todos/todos-operations";

const mapDispatchToProps = (dispatch)=>({
  toggleCompleted: (id)=>dispatch(toggleTodo(id)),
  deleteTodo: (id)=>dispatch(deleteTodo(id))
});



export default connect(null, mapDispatchToProps)(TodosList);