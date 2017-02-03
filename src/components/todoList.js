import React, { Component, PropTypes } from 'react';
import Todo from './todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

  }




  render() {
    console.warn(this);
    return (
      <ul style={this.props.styles.todoList}>
        {this.props.todos.map((todo, index) => {
          return (
            <Todo todo={todo} key={index} index={index} actions={{
              completeTodo: this.props.actions.completeTodo,
              removeTodo: this.props.actions.removeTodo
            }} parent={this} store={this.props.store}/>
          )
        })}
      </ul>
    );
  }
}

TodoList.propTypes = {
    styles: PropTypes.object,
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,

};

export default TodoList;
