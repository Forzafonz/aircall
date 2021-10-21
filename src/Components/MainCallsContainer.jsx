import React, { useContext}  from 'react'
import { UserContext } from '../Hooks/userContext.jsx';
import ListItems from './ListItems.jsx';
import './MainCallsContainer.scss';

export default function MainCallsContainer() {

  const {state, setActiveTab} = useContext(UserContext)

  //an event handler to process the click on tab
  const clickHandler = (event) => {
    setActiveTab(event.target.id)
  }

  return (
    <>
    <div className="container">
	    <ul className="container--tabs">
	    	<li className={"tab" + (state.active_tab === "All" ? " tabs--active" : "")} onClick = {(event) => clickHandler(event)} id = "All">All Calls</li>
	    	<li className={"tab" + (state.active_tab === "Active" ? " tabs--active" : "")} onClick = {(event) => clickHandler(event)} id = "Active">Active Calls</li>
	    	<li className={"tab" + (state.active_tab === "Archived" ? " tabs--active" : "")} onClick = {(event) => clickHandler(event)} id = "Archived">Archived Calls</li>
	    </ul>

      <ListItems />

    </div>
    </>
  )
}
