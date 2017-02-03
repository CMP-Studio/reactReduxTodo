
// *** Action Types ***
export const ADD_INDIVIDUAL_TODO = 'ADD_INDIVIDUAL_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
// *** Action Creators ***
export function addTodo(todo) {
  return {
    type: ADD_INDIVIDUAL_TODO,
    todo,
  };
}

export function removeTodo(key)
{
  return {
    type: REMOVE_TODO,
    key
  };
}

export function completeTodo(key)
{
  return {
    type: COMPLETE_TODO,
    key
  };
}
