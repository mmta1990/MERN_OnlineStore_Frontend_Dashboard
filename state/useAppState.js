import React from 'react'
import AppContext from './appContext'
export default function useAppState () {
  return React.useContext(AppContext)
}
