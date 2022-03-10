import React from "react";

// export const TodoListItem = ({todo, removeTodo, receiveTodo}) => {

//   const updateStatus = (e) => {
//     console.log(todo)
//     console.log(e.target.value)
//     if (e.target.value === false) {
//       todo.done = true;
//       e.target.value = "Done";
//     } else {
//       todo.done = false;
//       e.target.value = "Not Done";
//     }
//     receiveTodo(todo)
//   }
  
//   return (
//     <li>{todo.title}
//       <button onClick={() => removeTodo(todo)} >Delete</button>
//       {/* <button onClick={() => receiveTodo(todo) } >Done</button> */}
//       <input type="button" onClick={updateStatus} value="Not Done" />
//     </li>
//   )
// }

export class TodoListItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = this.props.todo;

    this.updateStatus = this.updateStatus.bind(this)
  }

  updateStatus(e) {
    let button = document.getElementById(`done-button-${this.props.todo.id}`)
    if (this.state.done === false) {
      button.innerHTML = "Done";
      this.setState({done: true})
    } else {
      button.innerHTML = "Not Done";
      this.setState({done: false})
    }
    this.props.receiveTodo(this.state)
  }
  
  render() {
    return (
      <li>{this.props.todo.title}
      <button onClick={() => removeTodo(this.props.todo)} >Delete</button>
      <button onClick={this.updateStatus} id={`done-button-${this.props.todo.id}`} >Done</button>
      {/* <input type="button" onClick={this.updateStatus} value="Not Done" /> */}
    </li>
    )
  }
}

