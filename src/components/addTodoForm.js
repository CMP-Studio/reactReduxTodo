
import React, { Component, PropTypes } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.actions.addTodo(this.state.value);

    this.setState({value: ''});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        TODO:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

TodoForm.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default TodoForm;
