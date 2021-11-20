import React from 'react'
import ShopLayout from 'components/layouts/Shop'
import Header from 'components/home/Header'
import Newests from 'components/home/Newests'
import BestSellers from 'components/home/BestSellers'
import MostViewed from 'components/home/MostViewed'
import Populars from 'components/home/Populars'
import * as api from 'services/api'
export default function Home (props) {
  return (
        <ShopLayout title="فروشگاه - خانه">
          <Header/>
          <Newests products={props.newests}/>
          <BestSellers products={props.best_sellers}/>
          <MostViewed products={props.most_viewed} />
          <Populars products={props.populars}/>
        </ShopLayout>
  )
}
export async function getStaticProps () {
  const products = await api.get('/api/v1/home')
  return {
    props: {
      newests: products.data.newests,
      best_sellers:products.data.best_sellers,
      most_viewed:products.data.most_viewed,
      populars:products.data.populars
    }
  }
}