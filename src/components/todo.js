
import React, { Component, PropTypes } from 'react';



class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleComplete = this.handleComplete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleComplete(event)
  {
    console.log(this);
    var s = this.props.actions.completeTodo(this.props.index);
    event.preventDefault();
    this.setState(s);
  }

  handleRemove(event)
  {
    console.log(this);
    var s = this.props.actions.removeTodo(this.props.index);
    this.props.parent.setState(s);
  }


  render() {
    console.warn(this);
    return (
      <li><a href='#' onClick={this.handleComplete}>{this.props.todo.message} {this.props.todo.done ? '✓' : ''}</a> <button onClick={this.handleRemove}>Delete</button></li>
    );
  }
}

Todo.propTypes = {
  index: PropTypes.number,
  todo: PropTypes.object,
  actions: PropTypes.object,
  parent: PropTypes.object,
};

export default Todo;
