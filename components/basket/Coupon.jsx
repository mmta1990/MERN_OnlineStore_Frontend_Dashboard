import React from 'react'
import * as API from 'services/api'
import Error from 'components/partials/Notifications/Error'
import Success from 'components/partials/Notifications/Success'
import useAppState from 'state/useAppState'
export default function Coupon () {
  const { dispatch } = useAppState()
  const [couponCode, setCouponCode] = React.useState('')
  const [applyResult, setApplyResult] = React.useState({
    status: null,
    message: ''
  })
  const applyCoupon = (e) => {
    e.preventDefault()
    if (couponCode === '' || couponCode === undefined || couponCode === null) {
      return false
    }
    API.post('/api/v1/coupons/validation', { couponCode })
      .then(response => {
        setApplyResult({
          status: true,
          message: response.data.message
        })
        dispatch({
          type: 'UPDATE_COUPON',
          payload: {
            ...response.data.coupon
          }
        })
      })
      .catch(error => {
        setApplyResult({
          status: false,
          message: error.response.data.message
        })
      })
  }
  return (
            <div className="col-md-7">
            <h6>تخفیف کوپن</h6>
            <p className="text-muted">لطفا کد کوپن خود را در صورت لزوم وارد کنید</p>
              {applyResult.status === false && <Error message={applyResult.message} />}
              {applyResult.status === true && <Success message={applyResult.message} />}

            <form className="d-md-flex mt-lg-4 mt-3 mb-4">
                <input type="text" onChange={(e) => setCouponCode(e.target.value.trim())} className="form-control mr-2 mb-2" placeholder="کد کوپن" />
                <button type="submit" onClick={applyCoupon} className="btn btn-pill btn-solid-dark mr-2  mb-2">اعمال کوپن</button>
                <button type="submit" className="btn btn-pill btn-outline  mb-2">بروز سبد</button>
            </form>
            </div>

  )
}
