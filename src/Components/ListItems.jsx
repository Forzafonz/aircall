import React, { useContext } from 'react'
import { UserContext } from '../Hooks/userContext.jsx';

export default function ListItems() {

  const {state, setActiveTab} = useContext(UserContext)

  return (
    <div>
      {state.active_tab}
    </div>
  )
}
