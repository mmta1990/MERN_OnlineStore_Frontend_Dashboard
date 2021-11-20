import React from 'react'
import ShopLayout from 'components/layouts/Shop'
import Basket from 'components/basket'
export default function basket () {
  return (
    <ShopLayout title="سبد خرید">
      <Basket/>
    </ShopLayout>
  )
}
