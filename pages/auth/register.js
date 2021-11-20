import React, { useState } from 'react'
import AuthLayout from 'components/layouts/Auth'
import { register } from 'services/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Login () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handleRegister = async (e) => {
    e.preventDefault()
    if (email.length === 0 || password.length === 0) {
      alert('لطفا ایمیل و کلمه عبور را وارد کنید')
      return
    }
    const result = await register({
      firstName,
      lastName,
      email,
      password
    })
    if (result) {
      router.push('/auth/login')
    } else {
      alert('خطایی درفرآیند ثبت نام رخ داده است،لطفا بعدا امتحان کنید')
    }
  }
  return (
    <AuthLayout title="ثبت نام در فروشگاه">
        <div className="section-gap">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="card border-0 row no-gutters flex-column flex-md-row">
                <div className="card-body d-flex align-items-center col-lg-5 p-md-5 p-3">
                    <div className="w-100">
                    <img className="mb-lg-5 mb-4" src="/static/assets/img/logo-dark.png" srcSet="/static/assets/img/logo-dark@2x.png 2x" alt />
                    <form action="" method="POST">
                        <div className="form-group">
                        <input type="text" className="form-control" onChange={e => setFirstName(e.target.value)} placeholder="نام" />
                        </div>
                       <div className="form-group">
                        <input type="text" className="form-control" onChange={e => setLastName(e.target.value)} placeholder="نام خانوادگی" />
                        </div>
                        <div className="form-group">
                        <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="آدرس ایمیل" />
                        </div>
                        <div className="form-group">
                        <div className="icon-field-right">
                            <i className="fa fa-eye" />
                            <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} placeholder="رمز عبور" />
                        </div>
                        </div>
                        <div className="form-group">
                         <a onClick={handleRegister} className="btn btn-theme">ثبت نام</a>
                        </div>
                        <div className="form-group mt-lg-5">
                          <Link href="/auth/login">
                           <a className>ورود</a>
                          </Link>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="flex-column col-lg-7">
                    <div className="position-relative">
                    <img className="card-img-right flex-grow-1 " src="/static/assets/img/cards/29a.jpg" alt />
                    <div className="login-content">
                        <div className="h1 login-circle-logo font-weight-800 text-primary mb-4">ک</div>
                        <h2 className>آن را بهتر و سریعتر کنید</h2>
                        <p>کلاب بهترین است از نگاه مشتریان تم فارست</p>
                        <div className="row justify-content-center mt-lg-5">
                        <div className="col-md-8">
                            <ul className="list-group text-left">
                            <li className="list-group-item"><i className="fa fa-check pr-3 text-primary font-size-12" />برنامه ریزی ایده نوآوری و نسل</li>
                            <li className="list-group-item"><i className="fa fa-check pr-3 text-primary font-size-12" /> بزرگ ارزش برند جهانی محصول است</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
</AuthLayout>
  )
}
