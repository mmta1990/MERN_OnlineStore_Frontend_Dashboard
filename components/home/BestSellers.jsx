import React from 'react'
import ProductItem from 'components/products/List/ProductItem'

export default function BestSellers({products}) {
    return (
        <>
               <div className="text-center py-md-5 py-3 bg-white">
        <h6 className="mb-0">پرفروش ترین محصولات محصولات</h6>
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
