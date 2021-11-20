import Head from 'next/head'
import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import useAppState from 'state/useAppState'
export default function Shop ({ children, title }) {
  const { state, dispatch } = useAppState()
  React.useEffect(() => {
    const initState = () => {
      const currentState = JSON.parse(localStorage.getItem('state'))
      if (currentState) {
        dispatch({
          type: 'INIT_STATE',
          payload: currentState
        })
      }
    }
    initState()
  }, [])
  return (
        <>
        <Head>
          <title>{title}</title>
         <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
        <meta name="description" content="" />
        </Head>
        <Header/>
        {children}
        <Footer/>
        </>

  )
}
