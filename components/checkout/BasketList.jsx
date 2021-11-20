import React from 'react'
import useAppState from 'state/useAppState'
import { toPersianNumber } from 'services/lang'

export default function BasketList () {
  const { state } = useAppState()
  const totalBasket = state.basket.reduce((total, item) => {
    return total + (item.count * item.discountedPrice)
  }, 0)
  return (
<div className="col-md-4 order-md-2 mb-4">
  <h5 className="d-flex justify-content-between align-items-center mb-4">
    <span className="text-muted">سبد خرید شما</span>
  <span className="badge badge-dark badge-pill px-3">{state.basket.length}</span>
  </h5>
  <ul className="list-group mb-3">
    {state.basket.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
    <h6 className="my-0">{item.title}</h6>
    <small className="text-muted">تعداد {item.count}</small>
      </div>
      <span className="text-muted"> {toPersianNumber(item.discountedPrice)} تومان</span>
    </li>
    ))}
    <li className="list-group-item d-flex justify-content-between">
      <span>مجموع (تومان )</span>
      <strong> {toPersianNumber(totalBasket)} تومان</strong>
    </li>
  </ul>
</div>

  )
}
