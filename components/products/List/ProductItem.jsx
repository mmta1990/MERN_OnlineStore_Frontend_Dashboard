import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useAppState from 'state/useAppState'
export default function ProductItem (props) {
  const {dispatch} = useAppState()
  const isSpecialOffer = (price, discountedPrice) => {
    return discountedPrice && discountedPrice > 0 && discountedPrice < price
  }
  const addToBasket =  (product) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        productID: product.id,
        price: product.price,
        title: product.title,
        discountedPrice: product.discountedPrice,
        count: 1,
        thumbnail: product.thumbnail
      }
    })
  }
  return (
      <div className="col-md-4">
        <div className="card border-0 mb-4 box-hover">
          <div className="position-relative">
            {isSpecialOffer(props.price, props.discountedPrice) && <div className="ft-tag ft-inside-tr">ویژه</div>}
            <Image
              src={props.thumbnail}
              width={350}
              height={350}
            />
          </div>
          <div className="card-body py-4 text-center">
            <h6 className="mb-2 font-size-16">
              <Link href={`/products/details/${props.id}`}>
              <a>{props.title}</a>
              </Link>
            </h6>
            <div className="price mb-3">
              <del className="text-muted mr-2">
  <span className="font-size-14 h6">{props.price} تومان</span>
              </del>
  <span className="h6">{props.discountedPrice} تومان</span>
            </div>
            <a href="#" onClick={(e) => {addToBasket(props)}} className="btn btn-sm btn-pill btn-outline">
              افزودن به سبد خرید
            </a>
          </div>
        </div>
      </div>
  )
}
