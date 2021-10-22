import React, { useState, useContext } from 'react'
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../Hooks/userContext.jsx';
import {faHome, faUpload, faCog, faAddressBook, faArchive } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

  const home = <FontAwesomeIcon icon={ faHome } size="2x"/>
  const upload = <FontAwesomeIcon icon={ faArchive } size="2x"/>
  const cog = <FontAwesomeIcon icon={ faCog } size="2x"/>
  const addressBook = <FontAwesomeIcon icon={ faAddressBook } size="2x"/> 

  const [checked, updateCheckedItem] = useState("item-1")
  const {state, setActiveTab} = useContext(UserContext)
  
  // This function is used to track which "checkbox" is checked off in the footer and set global state for active tab appropriately.
  const updateChecked = (item) => {
    if (item === "item-1"){
      setActiveTab("All")
    } else if (item === "item-2") {
      setActiveTab("Archived")
    }
    updateCheckedItem(item)
  }

  return (
    <footer className="footer">
      {/* The entire footer is built as an ansemble of radio buttons, which determine which one is selected on click. */}
      <input type="radio" id="item-1" checked = {checked === "item-1" ? true : false} name="menu" onChange = {() => updateChecked("item-1")}/>
        <label htmlFor="item-1">
          <span>
            {home}
          </span>
        </label>
      <input type="radio" id="item-2" name="menu" checked = {checked === "item-2" ? true : false} name="menu" onChange = {() => updateChecked("item-2")}/>
          <label htmlFor="item-2">
          <span>
           {upload}
          </span>
       </label>
       <input type="radio" id="item-3" name="menu" checked = {checked === "item-3" ? true : false} name="menu" onChange = {() => updateChecked("item-3")}/>
          <label htmlFor="item-3">
           <span>
            {cog}
          </span>
          </label>
        <input type="radio" id="item-4" name="menu" checked = {checked === "item-4" ? true : false} name="menu" onChange = {() => updateChecked("item-4")}/>
          <label htmlFor="item-4">
           <span>
            {addressBook}
          </span>
          </label>

       <div className="cursor">
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.625 18.625" height="19.867" width="19.867">
        <path d="M0 0v18.625C.459 6.493 7.17.804 18.625 0z" fillRule="evenodd"/></svg>
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.625 18.625" height="19.867" width="19.867">
        <path d="M0 0v18.625C.459 6.493 7.17.804 18.625 0z" fillRule="evenodd"/></svg>
        </div>
    </footer>
  )
}
