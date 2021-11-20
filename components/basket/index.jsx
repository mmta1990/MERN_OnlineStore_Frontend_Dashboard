import React from 'react'
import Header from './Header'
import Items from './Items'
import Coupon from './Coupon'
import Details from './Details'
export default function index () {
  return (
            <>
            <Header/>
            <section className="section-gap">
            <div className="container">
                <Items/>
                <div className="row">
                    <Coupon/>
                    <Details/>
                </div>
            </div>
            </section>

            </>
  )
}
