import React from 'react'
import userAppState from 'state/useAppState'
import { toPersianNumber } from 'services/lang'
import { amountWithDiscount, calculateDiscountAmount } from 'services/discount'
import Link from 'next/link'
export default function Details () {
  const { state } = userAppState()
  const totalBasket = state.basket.reduce((total, item) => {
    return total + (item.count * item.discountedPrice)
  }, 0)
  return (
<div className="col-md-5">
  <div className="card p-4">
    <h6>مجموع سبد</h6>
    <hr />
    <div className="row mb-1">
      <div className="col-8 font-weight-normal">مجموع کل</div>
      <div className="col-4">{toPersianNumber(totalBasket)} تومان</div>
    </div>
    <div className="row mb-1">
  <div className="col-8 font-weight-normal">تخفیف ({toPersianNumber(state.coupon.percent)}%)</div>
      <div className="col-4">- {toPersianNumber(calculateDiscountAmount(totalBasket, state.coupon.percent).toFixed(0))} تومان</div>
    </div>
    <div className="row my-4">
      <div className="col-8">مجموع خرید</div>
      <div className="col-4"><strong>{toPersianNumber(amountWithDiscount(totalBasket, state.coupon.percent).toFixed(0))} تومان</strong></div>
    </div>
    <Link href="/checkout">
    <a className="btn btn-pill btn-block btn-theme">بررسی</a>
    </Link>
  </div>
</div>

  )
}
