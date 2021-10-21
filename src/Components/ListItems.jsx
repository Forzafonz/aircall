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
  // state.calls is an object of object like this: {1:{}, 2:{}, ...}
  const callsList = Object.keys(state.calls).map((call) => {
    //Check if a tab select is for "Active" calls. If a call is_arhived === true, don't include it in the callList
    // AND
    //Check if a tab select is for "Archived" calls. If a call is_arhived === false, don't include it in the callList
    if (!(state.active_tab === "Active" && state.calls[call]['is_archived']) && !(state.active_tab === "Archived" && !state.calls[call]['is_archived'])) {

      let trigger = false;
      if(state.calls[call].created_at.slice(0, 10) !== currentDate) {
        currentDate = state.calls[call].created_at.slice(0, 10);
        trigger = true;
      }
      return (
        <ListItem 
        key = {call}
        {...state.calls[call]}
        changeArchiveStatus = {changeArchiveStatus}
        separator = {trigger}
        />
        )
      } else {
        return false;
      }
  })
 
  //Sort calls by time created. Convert ISO time to timestamp using +new Date shorthand
  
  const filtered = callsList.filter(element => element !== false )
  
  const sortedCallsList = filtered.sort((callSymbol1, callSymbol2) => {
    if (callSymbol1 && callSymbol2) {

      const firstSymbolTime = +new Date(callSymbol1.props['created_at'])
      const secondSymbolTime = +new Date(callSymbol2.props['created_at'])
      return firstSymbolTime - secondSymbolTime;
    }
  })

  

  console.log("SORT", sortedCallsList)
  return (
    <>
      {sortedCallsList}
      {!sortedCallsList.length && <EmptyComponent />}
    </>
  )
}
