import React from 'react'
import ShopLayout from 'components/layouts/Shop'
import ShopHeader from 'components/products/Header'
import Products from 'components/products'
import * as api from 'services/api'
export default function products ({ products }) {
  return (
    <ShopLayout title="فروشگاه آنلاین">
        <ShopHeader/>
        <Products items={products}/>
    </ShopLayout>
  )
}

export async function getStaticProps () {
  const products = await api.get('/api/v1/products')
  return {
    props: {
      products: products.data
    }
  }
}
