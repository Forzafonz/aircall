import React, {useState} from 'react'
import './ListItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faChevronDown, faVoicemail, faShareSquare, faUndo } from '@fortawesome/free-solid-svg-icons'
import TimeAgo from 'react-timeago'

export default function ListItem({call_type, created_at, direction, duration, from, id, is_archived, to, via, changeArchiveStatus}) {
  const [toggled, setToggled] = useState(false)
  const phone = <FontAwesomeIcon icon={faPhoneAlt} size="2x"/>
  const voicemail = <FontAwesomeIcon icon={faVoicemail} size="2x"/>
  const chevron = <FontAwesomeIcon icon={faChevronDown} size="3x"/>
  const archive = <FontAwesomeIcon icon={faShareSquare} size="3x"/>
  const unarchive = <FontAwesomeIcon icon={faUndo} size="3x"/>


  //A helper function to make duration look good (break it into minutes/seconds)
  const durationToString = (duration) => {
    let response = "";
    if (duration/60 === 1){
      response = "1 minute";
    } else {
      response = `${duration/60} minutes`
    }
    if (duration%60) {
      response += `${duration%60} seconds`
    }
    return response;
  }

  const handleArchiveIconClick = (action) => {
    changeArchiveStatus(id, action === "archive" ? true : false)
  }


  return (
    <div className={"card" + (toggled ? " active" : "")}>
	    <div className="content">
		    <div className="imgBx">
          {call_type === "voicemail" && <div className = {"icon-main-voicemail"}>{voicemail}</div>}
			    {call_type !== "voicemail" &&  <div className = {"icon-main" + (call_type === "missed" ? "-missed" : "")}>{phone}</div>}
		    </div>
		  <h2>{from}<br /><span><TimeAgo date={created_at}/></span></h2>
	  </div>
	<ul className="navigation">
		<li>
    <span>Call Duration: </span><span>{durationToString(duration)}</span>
		</li>
		<li>
    <span>Direction: </span><span>{direction ? direction : "Not Available"}</span>
		</li>
		<li>
		<span>To: </span><span>{to ? to : "Not Available"}</span>
		</li>
		<li>
		<span>Via: </span><span>{via ? via : "Not Available"}</span>
		</li>
	</ul>
  {!is_archived && <div className="archive" onClick = {() => handleArchiveIconClick("archive")}>{archive}</div>}
  {is_archived && <div className="archive" onClick = {() => handleArchiveIconClick("unarchive")}>{unarchive}</div>}
	<div className="toggle" onClick = {() => setToggled(!toggled)}>
		{chevron}
	</div>
</div>
  )
}
