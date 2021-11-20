import React from 'react'
import useAppState from 'state/useAppState'
import * as API from 'services/api'
export default function AddressForm () {
  const {state,dispatch} = useAppState()
  const [address, setAddress] = React.useState({
    title:'',
    fullName: '',
    zipCode: '',
    mobile: '',
    state: '',
    city: '',
    address: ''
  })
  const updateAddressField = (field, value) => {
    setAddress(prev => ({ ...prev, [field]: value }))
  }
  const saveAddress = (e) => {
    API.post(`/api/v1/users/${state.user.id}/addresses`,{
      ...address
    },{headers:{
      'Authorization':localStorage.getItem('token')
    }})
    .then(response => {
      dispatch({
        type:'ADD_ADDRESS',
        payload:{
          address
        }
      })
    })
    .catch(error => console.log(error))
  }
  return (

  <form className="needs-validation" noValidate>
        <div className="mb-3">
      <label htmlFor="title">عنوان</label>
      <div className="input-group">
        <input type="text" className="form-control" id="title" placeholder="عنوان آدرس ماننده خانه، محل کار  و ..." required
        onChange={e => updateAddressField('title', e.target.value)}
         />
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="fullName">نام گیرنده</label>
      <div className="input-group">
        <input type="text" className="form-control" id="fullName" placeholder="نام کامل گیرنده" required
        onChange={e => updateAddressField('fullName', e.target.value)}
         />
        <div className="invalid-feedback" style={{ width: '100%' }}>
          نام کاربری شما مورد نیاز است
        </div>
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="mobile">شماره همراه</label>
      <div className="input-group">
        <input type="text" className="form-control" id="mobile" placeholder="شماره موبایل" required
        onChange={e => updateAddressField('mobile', e.target.value)}
         />
        <div className="invalid-feedback" style={{ width: '100%' }}>
          نام کاربری شما مورد نیاز است
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-3">
        <label htmlFor="state">استان</label>
        <select className="custom-select d-block w-100" id="state" required
        onChange={e => updateAddressField('state', e.target.value)}
        >
          <option value>انتخاب...</option>
          <option>تهران</option>
          <option>البرز</option>
          <option>همدان</option>
          <option>شیراز</option>
          <option>اصفهان</option>
        </select>
        <div className="invalid-feedback">
          لطفا یک کشور معتبر را انتخاب کنید
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="city">شهر</label>
        <select className="custom-select d-block w-100" id="city" required
        onChange={e => updateAddressField('city', e.target.value)}
        >
          <option value>انتخاب...</option>
          <option>تهران</option>
          <option>کرج</option>

        </select>
        <div className="invalid-feedback">
          لطفا یک کشور معتبر ارائه کنید
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <label htmlFor="zipCode">کد پستی</label>
        <input type="text" className="form-control" id="zipCode" placeholder required
        onChange={e => updateAddressField('zipCode', e.target.value)}
        />
        <div className="invalid-feedback">
          کد پستی مورد نیاز است
        </div>
      </div>
    </div>
        <div className="mb-3">
      <label htmlFor="address">آدرس</label>
      <input type="text" className="form-control" id="address" placeholder="خیابان آذر پلاک 11" required
      onChange={e => updateAddressField('address', e.target.value)}
      />
      <div className="invalid-feedback">
        لطفا آدرس حمل و نقل خود را وارد کنید.
      </div>
    </div>
    <hr className="mb-4" />
    <button className="btn btn-primary btn-lg btn-block" onClick={saveAddress} type="button">ذخیره آدرس</button>
    <hr className="mb-4" />
    
  </form>

  )
}
