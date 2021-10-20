const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

// A reducer function to manage global application state.
const reducer = function (state, action) {

  const setInitialState = () => {
    // Change data about calls from array to object (this makes it simplier to search)
    const calls = {};
    action.values.forEach(call => {
      calls[call.id] = {call}
    })

    return {...state, calls}
  } 

  //this function triggers when users click on any of three available tabs
  const setActiveTab = () => {
    const newState = {...state};
    // return an updated state with a new active_tab values 
    return {...newState, active_tab: action.values}
  }

  const actions = {
    [SET_ACTIVE_TAB]: setActiveTab,
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
