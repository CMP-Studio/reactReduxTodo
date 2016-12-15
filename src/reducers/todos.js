
import {
  ADD_TODOS,
} from '../actions/todos';

let initialState = [];

export function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOS: {
      const todo = action.todo;

      return [...state, todo];
    }

    default: {
      return state;
    }
  }
}
