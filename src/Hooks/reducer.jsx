const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

// A reducer function
const reducer = function (state, action) {

  const setInitialState = () => {
    // Change calls from array to object
    const calls = {};
    action.values.forEach(call => {
      calls[call.id] = {call}
    })

    return {...state, calls}
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
  SET_ACTIVE_TAB 
}
