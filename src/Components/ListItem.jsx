import React, { useState } from 'react'
import './ListItem.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faChevronDown, faVoicemail, faShareSquare, faUndo, faPhoneSlash, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import TimeAgo from 'react-timeago'

export default function ListItem({call_type, created_at, direction, duration, from, id, is_archived, to, via, changeArchiveStatus, separator}) {
  const [toggled, setToggled] = useState(false)
  const phone = <FontAwesomeIcon icon={faPhoneAlt} size="2x"/>
  const phoneMiss = <FontAwesomeIcon icon={faPhoneSlash} size="2x"/>
  const voicemail = <FontAwesomeIcon icon={faVoicemail} size="2x"/>
  const chevron = <FontAwesomeIcon icon={faChevronDown} size="3x"/>
  const archive = <FontAwesomeIcon icon={faShareSquare} size="3x"/>
  const unarchive = <FontAwesomeIcon icon={faUndo} size="3x"/>
  const missedIncoming = <FontAwesomeIcon icon={faSignInAlt} size="2x"/>
  const missedOutcoming = <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>
  const months = [ "", "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

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
    <>
    {separator && <div className = "date-separator">Activities on {months[Number(created_at.slice(5,7))]} {created_at.slice(8,10)}, {created_at.slice(0,4)}</div>}
    <div className={"card" + (toggled ? " active" : "")}>
	    <div className={"content" + (toggled ? " active" : "")}>
		    <div className="imgBx">
          {call_type === "voicemail" && <div className = {"icon-main-voicemail"}>{voicemail}</div>}
			    {call_type !== "voicemail" &&  <div className = {"icon-main" + (call_type === "missed" ? "-missed" : "")}>
            {direction === "outbound" ? missedOutcoming : missedIncoming}{call_type === "missed" ? phoneMiss : phone}
          </div>}
		    </div>
		  <h2>{from}<br />
        <div className="clock">
          At {created_at.slice(11, 13) > 12 ? 
          (created_at.slice(11, 13) - 12) + created_at.slice(13, 16) + " p.m." : 
          (Number(created_at.slice(11, 13)) + created_at.slice(13, 16) + " a.m.")}
        </div>

      </h2>
	  </div>
	<ul className="navigation">
		<li>
    <span>Call Duration: </span><span>{durationToString(duration)}</span>
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
  </>
  )
}
