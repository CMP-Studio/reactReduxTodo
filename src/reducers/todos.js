
import {
  ADD_INDIVIDUAL_TODO,
  REMOVE_TODO,
  COMPLETE_TODO
} from '../actions/todos';


let initialState = [];



export function todos(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_INDIVIDUAL_TODO: {

      const todo = {
        message: action.todo,
        done: false
      }

      return [...state, todo];
    }

    case REMOVE_TODO:
    {
      const key = action.key;

      console.info(state);
      state.splice(key, 1);
      return state;
    }
    case COMPLETE_TODO:
    {
      const key = action.key

      state[key].done = !state[key].done;

      console.log(state);

      return state;

    }

    default: {
      return state;
    }
  }
}
