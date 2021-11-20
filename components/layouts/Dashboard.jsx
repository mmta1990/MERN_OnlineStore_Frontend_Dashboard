import Head from 'next/head'
import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import useAppState from 'state/useAppState'
import ActiveLink from 'components/partials/ActiveLink'
import { useRouter } from "next/router";
import {check as authCheck} from "services/auth";
export default function Shop ({ children, title }) {
  const { state, dispatch } = useAppState()
  const router = useRouter()
  const handleLogout= (e)=>{
    e.preventDefault()
    localStorage.removeItem('token')
    dispatch({
      type:'LOGOUT',
      payload:{}
    })
    router.push('/auth/login')
  }
  React.useEffect(() => {
    authCheck().then(isUserLoggedIn => {
      if(!isUserLoggedIn){
        router.push('/auth/login')
      }
    }).catch(error => console.log(error))
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
        <meta name="author" content="Mosaddek" />
        </Head>
        <Header/>
        <div className="component-section bg-gray">    
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-3">
                <div className="card border-0 mb-md-0 mb-3">
                  <div className="card-body py-4">
                      <h5 className="mb-4 text-center">منوی کاربری</h5>
                      <div className="mb-4">
                      <div className="list-group list-group-gap list-group-right-arrow list-group-right-arrow-on-hover">
                          <ActiveLink href="/dashboard" 
                          classes="list-group-item border-0 p-3 m-0 text-center"
                          >داشبورد</ActiveLink>
                          <ActiveLink href="/dashboard/orders"
                           classes="list-group-item border-0 p-3 m-0 text-center">سفارش ها</ActiveLink>
                          <ActiveLink href="/dashboard/address"
                           classes="list-group-item border-0 p-3 m-0 text-center">آدرس ها</ActiveLink>
                          <ActiveLink href="/dashboard/profile" 
                          classes="list-group-item border-0 p-3 m-0 text-center">پروفایل</ActiveLink>
                          <a onClick={handleLogout} href="#" className="list-group-item border-0 p-3 m-0 text-center">خروج</a>
                      </div>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="col-md-9">
                {children}
                </div>
                </div>
            </div>
            </div>
        <Footer/>
        </>

  )
}
