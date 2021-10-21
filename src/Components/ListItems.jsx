import React, { useContext } from 'react'
import { UserContext } from '../Hooks/userContext.jsx';
import ListItem from './ListItem.jsx';
import EmptyComponent from './EmptyComponent.jsx';

export default function ListItems() {

  const {state, setArchiveStatus} = useContext(UserContext)

  const changeArchiveStatus = (id, status) => {
    setArchiveStatus(id, status)
  }
  let currentDate = 0;
  // Iterate through the list of calls in the gloabl state and convert it to array
  // Convert Object of Objects which is used to store calls into array of objects, so that it will be easier to sort them
  // state.calls is an object of object like this: {1:{}, 2:{}, ...}
  const callsArray = Object.keys(state.calls).map(call => {
      return state.calls[call]
  })

  // Sort previously converted array based on timestamp.
  const sortedCallsArray = callsArray.sort((call1, call2) => {
    if (call1 && call2) {
      const firstSymbolTime = +new Date(call1['created_at'])
      const secondSymbolTime = +new Date(call2['created_at'])
      return -firstSymbolTime + secondSymbolTime;
    }
  })

  const callsList = sortedCallsArray.map(call => {
    //Check if a tab select is for "Active" calls. If a call is_arhived === true, don't include it in the callList
    // AND
    //Check if a tab select is for "Archived" calls. If a call is_arhived === false, don't include it in the callList
    if (!(state.active_tab === "Active" && call['is_archived']) && !(state.active_tab === "Archived" && !call['is_archived'])) {

      let trigger = false;
      //Check if date of current call is the same as the date of previous call
      //This is required for grouping
      if(call.created_at.slice(0, 10) !== currentDate) {
        currentDate = call.created_at.slice(0, 10);
        trigger = true;
      }
      return (
        <ListItem 
        key = {call.id}
        {...call}
        changeArchiveStatus = {changeArchiveStatus}
        separator = {trigger}
        />
        )
      } else {
        return false;
      }
  })
 
  //Filter out all unfitting calls which were replaced by "false" on a previous map.
  const filtered = callsList.filter(element => element !== false )
  
  return (
    <>
      {filtered}
      {!filtered.length && <EmptyComponent />}
    </>
  )
}
