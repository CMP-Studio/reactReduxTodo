
import {
  ADD_INDIVIDUAL_TODO,
} from '../actions/todos';

let initialState = [];

export function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_INDIVIDUAL_TODO: {
      const todo = action.todo;

      return [...state, todo];
    }

    default: {
      return state;
    }
  }
}
