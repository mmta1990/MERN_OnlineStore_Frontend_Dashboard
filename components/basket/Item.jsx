import React from 'react'
import Image from 'next/image'
import useAppState from 'state/useAppState'
export default function Item (props) {
  const { dispatch } = useAppState()
  const handleChangeCount = (e) => {
    dispatch({
      type: 'UPDATE_BASKET_ITEM_COUNT',
      payload: {
        productID: props.productID,
        count: e.target.value
      }
    })
  }
  const handleDeleteItem = (e) => {
    e.preventDefault()
    dispatch({
      type: 'REMOVE_BASKET_ITEM',
      payload: {
        productID: props.productID
      }
    })
  }
  return (
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <a href="#" className="mr-4">
              <Image className="rounded" src={props.thumbnail} width={100} height={100} alt="product thumbnail" />
                </a>
                <a href="#" className="text-dark">{props.title}</a>
            </div>
          </td>
          <td>
            <strong>{props.discountedPrice} تومان</strong>
          </td>
          <td>
            <input type="number" onChange={handleChangeCount} min={1} max={10} className="form-control w-50" defaultValue={props.count} />
          </td>
          <td>
            <strong>{props.discountedPrice * props.count} تومان</strong>
          </td>
          <td>
            <a onClick={handleDeleteItem} className="text-decoration-none h5"
              ><i className="vl-cross-circle"></i
            ></a>
          </td>
        </tr>

  )
}
