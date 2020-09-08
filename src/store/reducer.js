const intialState = {
  counter: 0,
  results: [],
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "STORE_RESULT":
      return {
        ...state,
        //push will mutate the object not advisable to use
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case "DELETE_RESULT":
      //const newArray =[...state.results];
      //newArray.splice(id, 1);      

      //Copy of the array
      const updatedArray = state.results.filter(result => result.id !== action.resultId);
      return{
        ...state,
        results: updatedArray
      }
  }

  return state;
};
export default reducer;
