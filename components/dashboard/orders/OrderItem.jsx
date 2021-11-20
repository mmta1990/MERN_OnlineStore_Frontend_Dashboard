import React from 'react'

export default function OrderItem({order}) {
    return (
        <tr className="bg-white">
        <td>{order.id}</td>
        <td>
          <h6>{order.finalPrice}</h6>
          <span className="text-muted">{order.totalPrice}</span>
        </td>
        <td>
          <h6>{order.createdAt}</h6>
        </td>
        <td>
          <a href="#" className="btn btn-pill btn-outline">مشاهده جزئیات</a>
        </td>
      </tr>
    )
}
