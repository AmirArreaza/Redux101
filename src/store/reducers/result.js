import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const intialState = {
  results: [],
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
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultId
      );
      return updateObject(state, {
        results: updatedArray,
      });
    default:
      return state;
  }
};
export default reducer;
