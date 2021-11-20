import React from 'react'
import OrderItem from './OrderItem'
import * as api from 'services/api'
export default function OrdersList() {
  const [orders, setOrders] = React.useState([])
  React.useEffect(() => {
    const fetchOrders = ()=>{
         api.get('/api/v1/orders',{
        headers:{
            authorization:localStorage.getItem('token')
        }
    }).then(response => {
        if(response.data.success){
          setOrders(response.data.orders)
        }
    })
    .catch(error => console.log(error))
    }
    fetchOrders()
  }, [])
    return (
<div className="table-responsive">
  <table className="table vl-custom-table">
    <thead>
      <tr>
        <th>شناسه</th>
        <th>مبلغ</th>
        <th>تاریخ ثبت</th>
        <th>عملیات</th>
      </tr>
    </thead>
    <tbody>
        {orders.map(order => (<OrderItem key={order.id} order={order} />))}
    </tbody>
  </table>
</div>

    )
}
