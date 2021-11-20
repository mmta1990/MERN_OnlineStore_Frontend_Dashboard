import App from 'next/app'
import React from 'react'
import AppContext from './appContext'
import initState from './initState'
import reducer from './reducer'
export default function AppStateProvider ({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initState)
  return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
  )
}
