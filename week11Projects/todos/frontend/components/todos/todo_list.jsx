import React from "react"
import { TodoListItem } from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

export class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {todos: props.todos}
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render () {
    return (
      <div>
      <h3>Todo List goes here!</h3>
      <ul>
      {
        this.props.todos.map(todo => <TodoListItem todo={todo} 
          key={todo.id} 
          receiveTodo={this.props.receiveTodo} 
          removeTodo={this.props.removeTodo}
          status={todo.done}
        />)
      }
      </ul>
      
      <TodoForm createTodo={this.props.createTodo}  />
      </div>
    )
  }
      
} 