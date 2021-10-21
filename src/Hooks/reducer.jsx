const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
const SET_ARCHIVE_STATUS = "SET_ARCHIVE_STATUS";

// A reducer function to manage global application state.
const reducer = function (state, action) {

  const setInitialState = () => {
    // Change data about calls from array to object (this makes it simplier to search)
    const calls = {};
    action.values.forEach(call => {
      calls[call.id] = {...call}
    })

    return {...state, calls}
  } 

  //this function triggers via dispatch when users click on any of three available tabs
  const setActiveTab = () => {
    const newState = {...state};
    // return an updated state with a new active_tab values 
    return {...newState, active_tab: action.values}
  }


  //this function triggers via dispatch when users click on archive/unarchive icon
  const setArchiveStatus = () => {
    const idToUpdate = action.values.id
    const newState = {...state};
    const callToUpdate = {...newState.calls[idToUpdate], is_archived: action.values.status}
    const updatedCalls = {...newState.calls, [idToUpdate]: callToUpdate}
    return {...newState, calls: updatedCalls}
  }

  const actions = {
    [SET_ARCHIVE_STATUS]: setArchiveStatus,
    [SET_ACTIVE_TAB]: setActiveTab,
    [SET_APPLICATION_DATA]: setInitialState,
    "default": () => {
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`)}
  }

  return actions[action.type] ? actions[action.type](action) : actions["default"]()

}

export { reducer as default, 
  SET_APPLICATION_DATA,
  SET_ACTIVE_TAB,
  SET_ARCHIVE_STATUS 
}
