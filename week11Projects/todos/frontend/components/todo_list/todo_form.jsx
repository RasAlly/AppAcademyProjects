import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: Math.floor(Math.random() * 100),
      title: '',
      body: '',
      done: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateDone = this.updateDone.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }

  updateBody(e) {
    this.setState({body: e.target.value})
  }

  updateDone(e) {
    this.setState({done: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state)
      .then(() => this.setState({title: '', body: '', done: ''})
    );
    // this.setState({
    //   id: Math.floor(Math.random() * 100),
    //   title: '',
    //   body: '',
    //   done: ''
    // })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>title:
          <input type="text" onChange={this.updateTitle} value={this.state.title}/>
        </label>  

        <br />  

        <label>body:
          <input type="text" onChange={this.updateBody} value={this.state.body}/>
        </label>

        <br />

        <label>done:
          <input type="text" onChange={this.updateDone} value={this.state.done}/>
        </label>

        <input type="submit" value="Create Todo" />
      </form>
    )
  }
}

export default TodoForm;