import React from 'react'
import ProductItem from './ProductItem'
export default function ProductsList ({ items }) {
  return (
          <section className="section-gap">
            <div className="container">
              <div className="row justify-content-center">
                {items.map((product) => <ProductItem key={product.id} {...product} />)}
                <div className="col-md-12 text-center mt-4">
                  <a href="#" className="btn btn-pill btn-theme">
                    ادامه خواندن
                  </a>
                </div>
              </div>
            </div>
          </section>
  )
}
