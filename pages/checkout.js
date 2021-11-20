import React from 'react'
import ShopLayout from 'components/layouts/Shop'
import Checkout from 'components/checkout'
export default function checkout () {
  return (
    <ShopLayout title="صفحه بررسی سفارش">
        <Checkout/>
    </ShopLayout>
  )
}
