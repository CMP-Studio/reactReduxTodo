
import React, { PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from './addTodoForm';

const styles = {
  todoList: {
    display: 'flex',
    justifyContent: 'center',
  }
}

const App = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React + Redux</h2>
      </div>
      <br />
      <TodoForm
        actions={{
          addTodo: props.actions.addTodo,
        }}
      />
      <ul style={styles.todoList}>
        {props.todos.map((todo, index) => {
          return (
            <li key={index}>{todo}</li>
          )
        })}
      </ul>
    </div>
  );
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default App;
