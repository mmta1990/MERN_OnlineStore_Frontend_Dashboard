import React from 'react'
import AddressForm from './AddressForm'
import useAppState from 'state/useAppState'
export default function Addresses ({ addresses }) {
  const hasAddress = addresses.length > 0
  const {dispatch} = useAppState()
  const updateDeliveryAddress = (address)=>{
    dispatch({
      type:'UPDATE_DELIVERY_ADDRESS',
      payload:{address}
    })
  }
  return (
 <div className="card border-0 mb-md-0 mb-3 box-hover">
      <div className="card-body p-md-5 p-4">
      <div className="accordion accordion-style-2" id="accordion-2">
  <div className="card">
    <div className="card-header">
      <h6>
        <a className data-toggle="collapse" data-target="#collapse-2-1" aria-expanded="false">
          انتخاب آدرس
        </a>
      </h6>
    </div>
    <div id="collapse-2-1" className="collapse show" data-parent="#accordion-2">
      <div className="card-body">
      <div className="list-group list-group-gap">
            {!hasAddress && (
                <div className="d-flex align-items-center list-group-item border-1">
                    <div>
                        <h6 className="mb-0">آدرسی ثبت نشده است</h6>
                    </div>
                    </div>
            )}
            { hasAddress && addresses.map((address, index) => (
                <div key={index} className="d-flex align-items-center list-group-item border-1">
                    <div>
                        <div className="custom-control custom-radio custom-control-inline mb-3">
                        <input type="radio" id={`address-${index + 1}`}
                        onChange= {(e) => {updateDeliveryAddress(address)}}
                         name="deliveryAddress" className="custom-control-input"/>
                        <label className="custom-control-label" for={`address-${index + 1}`}>{address.title}</label>
        </div>
                            <div>
                                <span>گیرنده :</span>
                                <span>{address.fullName}</span>
                                <span>شماره همراه :</span>
                                <span>{address.mobile}</span>
                                <span>کد پستی: </span>
                                <span>{address.zipCode}</span>
                            </div>
                            <div>
                            <span>{address.state}</span> -
                            <span>{address.city}</span>  -
                            <span>{address.address}</span>
                            </div>
                    </div>

                    </div>
            ))}
        </div>s
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header">
      <h6>
        <a className="collapsed" data-toggle="collapse" data-target="#collapse-2-2">
        ثبت آدرس جدید
        </a>
      </h6>
    </div>
    <div id="collapse-2-2" className="collapse" data-parent="#accordion-2">
      <div className="card-body">
      <AddressForm/>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}
