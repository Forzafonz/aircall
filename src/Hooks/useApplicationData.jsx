import React, { useEffect, useReducer } from 'react';
import reducer, {
  SET_APPLICATION_DATA,
  SET_ACTIVE_TAB,
  SET_ARCHIVE_STATUS
} from './reducer.jsx';
import axios from "axios";

export default function useApplicationData() {

  
  // Set the initial state of application
  const initialState = { 
    active_tab: "All",
    calls: {}
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Retrieve the initial state data about calls
  // and set it as initial state of application using the reducer.
  useEffect(() => {
    axios.get(`https://aircall-job.herokuapp.com/activities`)
    .then((response) => {
      dispatch({type: SET_APPLICATION_DATA, values: response.data})
    })
  }, [])

  //A function to update currently active tab
  const setActiveTab = (active_tab) => {
    dispatch({type: SET_ACTIVE_TAB, values: active_tab})
  }

  //A function to arhive un-archive calls
  const setArchiveStatus = (id, status) => {
    axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {is_archived: status})
    dispatch({type: SET_ARCHIVE_STATUS, values: {id, status}})
  }


  return { 
    state,
    setActiveTab,
    setArchiveStatus
  }
}
