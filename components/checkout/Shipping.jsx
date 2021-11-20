import AuthLink from 'components/partials/AuthLink'
import React from 'react'
import * as AUTH from 'services/auth'
import Addresses from './Addresses'
import PaymentForm from './PaymentForm'
import useAppState from 'state/useAppState'
import * as API from 'services/api'
export default function Shipping () {
  const { state } = useAppState()
  const isUserLoggedIn = !!state.user.id
  const [gateways, setGateways] = React.useState([])
  React.useEffect(() => {
    const fetchGateways = ()=>{
      API.get('/api/v1/payments/gateways')
      .then(response => {
        if(response.data.success){
          setGateways(response.data.gateways)
        }
      })
      .catch(error => console.log(error))
    }
    fetchGateways()
  }, [])
  return (
    <div className="col-md-8 order-md-1">
        <h5 className="mb-4">انتخاب آدرس ارسال</h5>
        {isUserLoggedIn && <Addresses addresses={state.user.address}/>}
        {isUserLoggedIn &&   <PaymentForm gateways={gateways}/>}
        {!isUserLoggedIn && <AuthLink/>}
  </div>
  )
}
