
// *** Action Types ***
export const ADD_INDIVIDUAL_TODO = 'ADD_INDIVIDUAL_TODO';

// *** Action Creators ***
export function addTodo(todo) {
  return {
    type: ADD_INDIVIDUAL_TODO,
    todo,
  };
}
