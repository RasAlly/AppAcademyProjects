import { connect } from "react-redux";
import { TodoList } from './todo_list';
import { allTodos } from "../../reducers/selectors";
import { receiveTodo, receiveTodos, removeTodo } from "../../actions/todo_actions";


const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (todo) => dispatch(removeTodo(todo)),
    receiveTodos: (todo) => dispatch(receiveTodos(todo))
  }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer