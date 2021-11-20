import React from 'react'
import useAppState from 'state/useAppState'
import * as API from 'services/api'
export default function PaymentForm({gateways}) {
  const [payButtonText, setPayButtonText] = React.useState('پرداخت')
    const {state,dispatch} = useAppState()
    const handlePayment = (e)=>{
      setPayButtonText('در ال انتقال به درگاه ...')
        API.post('/api/v1/purchase',{
          ...state
        },{
          headers:{
            Authorization:localStorage.getItem('token')
          }
        })
        .then(response => {
          if(response.data.success){
            window.location.href = response.data.url
          }
        })
        .catch(error => console.log(error)) 
    }
    const updatePaymentMethod = (method) => {
      dispatch({
        type:'UPDATE_PAYMENT_METHOD',
        payload:{
          method
        }
      })
    }
    return (
      <div className="card border-0 mb-md-0 mb-3 box-hover">
        <div className="card-body p-md-5 p-4">
        <h4 className="mb-3">پرداخت</h4>
            <div className="d-block my-3">
              {gateways.map((item,index) => (
                  <div className="custom-control custom-radio">
                  <input id={item.name}
                  onChange={(e) => {updatePaymentMethod(item.name)}}
                   name="paymentMethod" type="radio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor={item.name}>{item.title}</label>
                  </div>

              ))}
            <hr className="mb-4" />
            <button onClick={handlePayment} className="btn btn-primary btn-lg btn-block" type="submit">
                {payButtonText}
            </button>
        </div>
      </div>
      </div>
    )
}
