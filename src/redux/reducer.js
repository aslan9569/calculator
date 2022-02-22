const initialState = {
  calc: "",
  result: "",
  ops: ["/", "*", "+", "-", "."],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set/calc":
      return {
        ...state,
        calc: state.calc + action.value,
        value: action.value,
      };
    case "set/result":
      return {
        ...state,
        result: action.value,
        calc: "",
      };
    case "delete/last":
      return {
        ...state,
        calc: state.calc.slice(0, -1),
        result: state.result.slice(0, -1),
      };
    case "delete/all":
      return {
        ...state,
        calc: "",
        result: "",
      };

    default:
      return state;
  }
};
export default reducer;

//ACTIONS
export const setCalc = (value) => {
  return {
    type: "set/calc",
    value,
  };
};
export const setResult = (value) => {
  return {
    type: "set/result",
    value,
  };
};
export const lastDelete = () => {
  return {
    type: "delete/last",
  };
};
export const allDelete = () => {
  return {
    type: "delete/all",
  };
};
