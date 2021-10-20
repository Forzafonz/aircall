import React, { useEffect, useReducer } from 'react';
import reducer, {
  SET_APPLICATION_DATA
} from './reducer.jsx';
import axios from "axios";

export default function useApplicationData() {

  
  // Set the initial state of application
  const initialState = { 
    active_tab: "Activity",
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
  console.log("STATE:", state)

  const setActiveTab = () => {
    console.log("Set active tab activated!!")
  }

  return { 
    state,
    setActiveTab
  }
}
