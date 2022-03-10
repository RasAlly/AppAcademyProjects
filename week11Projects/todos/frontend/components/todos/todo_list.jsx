import React from "react"
import { TodoListItem } from "../todo_list/todo_list_item";
import TodoForm from "../todo_list/todo_form";

export const TodoList = (props) => {
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>
        {
          props.todos.map(todo => <TodoListItem todo={todo} 
            key={todo.id} 
            receiveTodo={props.receiveTodo} 
            removeTodo={props.removeTodo}
            status={todo.done}
            />)
        }
      </ul>

      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  )
}
