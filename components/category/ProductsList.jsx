import React from 'react'
import ProductItem from 'components/products/List/ProductItem'
export default function ProductsList({products}) {
    return (
        <div className="col-md-9">
            <div className="row justify-content-center">
                {products.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}
