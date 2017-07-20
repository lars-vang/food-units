import {defaultFoodUnits} from '../constants'

const foodUnit = (state, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      if (state.id !== action.payLoad.id) {
        return state;
      }
      return Object.assign({}, state, {
        value: action.payLoad.unitValue,
        unitsLeft: state.maxUnits - action.payLoad.unitValue
      });
    default:
      return state;
  }
};

const foodUnits = (state = defaultFoodUnits, action) => {
   switch (action.type) {
    case 'CHANGE_VALUE':
       return state.map(t =>
        foodUnit(t, action)
      );
    case 'RESET_ALL':
      return defaultFoodUnits;
    default:
      return state;
  }
};

export default foodUnits;