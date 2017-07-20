let nextTodoId = 0;

export const SET_THEME = 'SET_THEME';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    title
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export const changeValue = (id, unitValue) => {
  return {
    type: 'CHANGE_VALUE',
    payLoad: {
      id: id,
      unitValue: unitValue
    },
  };
};

export const resetAll = () => {
  return {
    type: 'RESET_ALL'
  };
};