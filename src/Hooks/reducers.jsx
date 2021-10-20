const SET_PLAYLIST = "SET_PLAYLIST";
const SET_PLAYING_MEDIA = "SET_PLAYING_MEDIA";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const ADD_MEDIA_TO_PLAYLIST = "ADD_MEDIA_TO_PLAYLIST";
const REMOVE_MEDIA_FROM_PLAYLIST = "REMOVE_MEDIA_FROM_PLAYLIST";
const UPDATE_NEW_PLAYLIST = "UPDATE_NEW_PLAYLIST";
const SET_NEXT_MEDIA = "SET_NEXT_MEDIA";
const SET_ORDER_FROM_LIKES = 'SET_ORDER_FROM_LIKES';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const CLEAR_MEDIA = 'CLEAR MEDIA'
const SET_SHOW_PLAYLIST = 'SET_SHOW_PLAYLIST'

// A reducer function

const reducer = function (state, action) {


//
  const actions = {

    "default": () => {
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`)}
  }

  return actions[action.type] ? actions[action.type](action) : actions["default"]()

}

export { reducer as default, 
  SET_APPLICATION_DATA, 
}
