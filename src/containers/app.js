
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../components/app';

import { addTodo } from '../actions/todos';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions:
      bindActionCreators({
        addTodo,
      }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
