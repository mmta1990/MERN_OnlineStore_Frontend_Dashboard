import React from 'react'
import Header from './Header'
import BasketList from './BasketList'
import Address from './AddressForm'
import Shipping from './Shipping'
export default function index () {
  return (
      <>
      <Header/>
      <section className="section-gap">
      <div className="container">
        <div className="row">
          <BasketList/>
          <Shipping/>
        </div>
      </div>
    </section>

      </>
  )
}
