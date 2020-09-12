import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const intialState = {
  results: [],
};
const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.resultId
  );
  return updatedArray;
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result }),
      });
    case actionTypes.DELETE_RESULT:
      //const newArray =[...state.results];
      //newArray.splice(id, 1);
      //Copy of the array
      return updateObject(state, { results: deleteResult(state, action) });
    default:
      return state;
  }
};
export default reducer;
