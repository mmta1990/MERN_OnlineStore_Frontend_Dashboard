import React from 'react'

export default function Profile() {
    return (
            <form>
            <div className="form-group">
                <label>نام </label>
                <input type="text" className="form-control" placeholder="Enter Name" />
                <small className="form-text text-muted">Please enter your name here.</small>
            </div>
            <div className="form-group">
                <label>نام خانوادگی </label>
                <input type="text" className="form-control" placeholder="Enter Name" />
                <small className="form-text text-muted">Please enter your name here.</small>
            </div>
            <div className="form-group">
                <label>آدرس ایمیل</label>
                <input type="email" className="form-control" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-pill btn-primary">به روز رسانی اطلاعات</button>
            </form>

    )
}
