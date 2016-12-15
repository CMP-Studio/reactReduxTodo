
// *** Action Types ***
export const ADD_TODOS = 'ADD_TODOS';

// *** Action Creators ***
export function addTodo(todo) {
  return {
    type: ADD_TODOS,
    todo,
  };
}
