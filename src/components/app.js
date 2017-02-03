
import React, { PropTypes } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import TodoForm from './addTodoForm';
import TodoList from './todoList';


const styles = {
  app: {
    textAlign: 'center',
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px',
  },
  appHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  todoList: {
    display: 'flex',
    justifyContent: 'center',
  },
}



const App = (props) => {
  return (
    <div style={styles.app}>
      <div style={styles.appHeader}>
        <img src={logo} style={styles.appLogo} alt="logo" />
        <h2>Welcome to React + Redux</h2>
      </div>
      <br />
      <TodoForm
        actions={{
          addTodo: props.actions.addTodo,
        }}
      />
      <TodoList actions={{
        completeTodo: props.actions.completeTodo,
        removeTodo: props.actions.removeTodo
      }} todos={props.todos} styles={styles} store={props.store}/>
    </div>
  );
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

export default App;
