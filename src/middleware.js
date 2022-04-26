/* export const myLogger = (store) => {
  return (nextFn) => {
    return (action) => {
      console.log("Middleware run");
      return nextFn(action);
    };
  };
};
 */

//shorter syntax
export const myLogger = (store) => (nextFn) => (action) => {
  console.log("Middleware run");
  return nextFn(action);
};

export const secondMiddleware = (store) => (nextFn) => (action) => {
  console.log("Second Middleware run");
  return nextFn(action);
};

export const capAtTen = (store) => (nextFn) => (action) => {
  console.log("Third Middleware run");
  console.log("Store:",store); //we see here that store has access to two functions: getState and dispatch

  if (store.getState() >= 10) {
    return nextFn({ type: "DECREMENT" });
  }
  nextFn(action); //else retunr normal action
};
