import React from 'react'
import DashboardLayout from 'components/layouts/Dashboard'
import OrdersList from 'components/dashboard/orders'
import * as api from 'services/api'
export default function orders({orders}) {
    return (
        <DashboardLayout title="فروشگاه | پنل کاربری | لیست سفارش ها">
            <OrdersList />
        </DashboardLayout>
    )
}
export async function getStaticProps () {

    return {
      props: {
        
      }
    }
  }