export const counterReducer = (state = 0, action) => {
  console.log("Reducer run");
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
