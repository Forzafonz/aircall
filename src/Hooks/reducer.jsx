const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

// A reducer function
const reducer = function (state, action) {

  const setInitialState = () => {
    console.log("THIS IS STATE", state)
    return {...state, calls: action.values}
  } 

  const actions = {
    [SET_APPLICATION_DATA]: setInitialState,
    "default": () => {
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`)}
  }

  return actions[action.type] ? actions[action.type](action) : actions["default"]()

}

export { reducer as default, 
  SET_APPLICATION_DATA, 
}
