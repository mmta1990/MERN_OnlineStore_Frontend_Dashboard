import React from 'react'
import { useRouter } from 'next/router'
import ShopLayout from 'components/layouts/Shop'
import SingleHeader from 'components/products/single/Header'
import SingleItem from 'components/products/single'
import * as API from 'services/api'

export default function SingleProduct ({ product, comments }) {
  const router = useRouter()
  const { id } = router.query
  return (
      <ShopLayout title="جزئیات محصول">
        <SingleHeader/>
        <SingleItem product={product} comments={comments}/>
      </ShopLayout>
  )
}
export async function getStaticProps (context) {
  const { id } = context.params
  const product = await API.get(`/api/v1/products/${id}`)
  const comments = await API.get(`/api/v1/products/${id}/comments`)
  return {
    props: {
      product: product.data,
      comments: comments.data
    }
  }
}
export async function getStaticPaths () {
  const response = await API.get('/api/v1/products')
  const paths = response.data.map(product => ({ params: { id: product.id } }))
  return {
    paths,
    fallback: true
  }
}
