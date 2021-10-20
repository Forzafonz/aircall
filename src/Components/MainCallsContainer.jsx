import React, { useContext}  from 'react'
import { UserContext } from '../Hooks/userContext.jsx';
import ListItems from './ListItems.jsx';
import './MainCallsContainer.scss';

export default function MainCallsContainer() {

  const {state, setActiveTab} = useContext(UserContext)

  //an event handler to process the click on tab
  const clickHandler = (event) => {
    console.log(event.target.id)
    setActiveTab(event.target.id)
  }
  console.log("RERENDERED")

  return (
    <>
    <div className="container">
	    <ul className="container--tabs">
	    	<li className="tab tabs--active" onClick = {(event) => clickHandler(event)} id = "All">All calls</li>
	    	<li className="tab" onClick = {(event) => clickHandler(event)} id = "Active">Active Calls</li>
	    	<li className="tab" onClick = {(event) => clickHandler(event)} id = "Archived">Archived Calls</li>
	    </ul>

      <ListItems />

    </div>
    </>
  )
}
