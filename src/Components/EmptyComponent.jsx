import React from 'react'
import './emptycomponent.scss'

export default function EmptyComponent() {
  // This is an empty component which is showed if there are no active or archived calls
  return (
    <div className="notification">
      <div className="notification__icon">
    <svg width="40px" height="40px" viewBox="0 0 367.011 367.01"
	 >
      <path d="M365.221,329.641L190.943,27.788c-1.542-2.674-4.395-4.318-7.479-4.318c-3.084,0-5.938,1.645-7.48,4.318L1.157,330.584
			c-1.543,2.674-1.543,5.965,0,8.639c1.542,2.674,4.395,4.318,7.48,4.318h349.65c0.028,0,0.057,0,0.086,0
			c4.77,0,8.638-3.863,8.638-8.639C367.011,332.92,366.342,331.1,365.221,329.641z M23.599,326.266L183.464,49.381l159.864,276.885
			H23.599z" fill="#2AC420"/>
		<path d="M174.826,136.801v123.893c0,4.773,3.867,8.638,8.638,8.638c4.77,0,8.637-3.863,8.637-8.638V136.801
			c0-4.766-3.867-8.637-8.637-8.637C178.693,128.165,174.826,132.036,174.826,136.801z" fill="#2AC420"/>
		<path d="M183.464,279.393c-5.922,0-10.725,4.8-10.725,10.722s4.803,10.729,10.725,10.729c5.921,0,10.725-4.809,10.725-10.729
			C194.189,284.193,189.386,279.393,183.464,279.393z" fill="#2AC420"/></svg>

      </div>
      <div className="notification__message">
        <h2>There are no calls in this category</h2>
        
      </div>
    </div>
  )
}
