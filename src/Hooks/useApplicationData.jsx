import {useEffect, useReducer, useState, useRef} from 'react';
import reducer, { 
  SET_APPLICATION_DATA, 
  SET_PLAYLIST, 
  SET_PLAYING_MEDIA, 
  ADD_MEDIA_TO_PLAYLIST, 
  REMOVE_MEDIA_FROM_PLAYLIST,
  UPDATE_NEW_PLAYLIST,
  SET_NEXT_MEDIA,
  SET_ORDER_FROM_LIKES,
  ADD_NEW_MESSAGE,
  SET_SHOW_PLAYLIST,
  CLEAR_MEDIA 
} from './reducers';
import axios from "axios";

export default function useApplicationData(initial) {

  return { 

  }
}
