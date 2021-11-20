import React from 'react'
import Link from 'next/link'
export default function AuthLink () {
  return (
    <div className="card border-0 mb-md-0 mb-3 box-hover">
      <div className="card-body p-md-5 p-4">
        <h5 className="text-primary">ورود و ثبت نام</h5>
        <p className="text-muted mb-4">
            برای ثبت نهایی سفارش باید در سایت وارد شوید
        </p>
        <Link href="/auth/login">
        <a className="btn btn-theme btn-pill">ورود</a>
        </Link>
      </div>
    </div>

  )
}
