import React from 'react'
import ShopLayout from 'components/layouts/Shop'
import Verify from 'components/payment/Verify'
export default function PaymentVerify() {
    return (
        <ShopLayout title="نتیجه پرداخت سفارش">
            <Verify/>
        </ShopLayout>
    )
}
