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