import React from 'react'
import ProductItem from 'components/products/List/ProductItem'
export default function Newests({products}) {
    return (
        <>
        <div className="text-center py-md-5 py-3 bg-white">
        <h6 className="mb-0">جدیدترین محصولات</h6>
        </div>
        <div className="component-section bg-gray">
            <div className="container">
                <div className="row justify-content-center">
                  {products.map(product => (<ProductItem key={product.id} {...product} />))}
                </div>
            </div>
            </div>
        </>
    )
}
