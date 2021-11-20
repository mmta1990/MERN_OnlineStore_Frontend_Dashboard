import React from 'react'
import Item from './Item'
import useAppState from 'state/useAppState'
export default function Items () {
  const { state } = useAppState()
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <table className="table vl-custom-table">
            <thead>
              <tr>
                <th>نام محصول</th>
                <th>قیمت</th>
                <th>تعداد</th>
                <th>مجموع</th>
              </tr>
            </thead>
            <tbody>
                {state.basket.map((item, index) => <Item key={index} {...item} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}
