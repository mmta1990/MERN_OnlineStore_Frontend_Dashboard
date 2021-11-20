import Head from 'next/head'
import React from 'react'
import Header from './Header'
import * as API from 'services/api'
import DefaultStatus from 'components/partials/Notifications/Default'
import SuccessStatus from 'components/partials/Notifications/Success'
import ErrorStatus from 'components/partials/Notifications/Error'
import useAppState from "state/useAppState";
const verifyStatus = {
    PENDING:0,
    SUCCESS:1,
    FAILED:2
}
export default function Verify() {
    const {dispatch} = useAppState()
    const [verifyResult, setVerifyResult] = React.useState(verifyStatus.PENDING)
    const getPaymentParams = ()=>{
        const url = new URL(window.location.href)
        return {
            authority:url.searchParams.get('Authority'),
            status:url.searchParams.get('Status'),
            reserve:url.pathname.split('/')[3]
        }
    }
    React.useEffect(() => {
        const verifyPayment = ()=>{
            API.post('/api/v1/purchase/verification',{
                ...getPaymentParams()
            },{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            }).then(response => {
                if(response.data.success){
                    setVerifyResult(verifyStatus.SUCCESS)
                }else{
                    setVerifyResult(verifyStatus.FAILED)

                }
            })
            .catch(error => {
                setVerifyResult(verifyStatus.FAILED)

            })
            dispatch({
                type:'EMPTY_BASKET',
                payload:{}
            })
        }
        verifyPayment()
    }, [])
    return (
            <>
                <Header/>
                <section className="section-gap">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 order-md-1">
                                <div className="card border-0 mb-md-0 mb-3 box-hover">
                                    <div className="card-body py-4">
                                        <h5 className="mb-4">پرداخت سفارش</h5>
                                        <div className="mb-4">
                                        {verifyResult === verifyStatus.PENDING && <DefaultStatus message={'در حال بررسی پرداخت ...'} />}
                                        {verifyResult === verifyStatus.SUCCESS && <SuccessStatus message={'پرداخت با موفقیت تایید شد'} />}
                                        {verifyResult === verifyStatus.FAILED && <ErrorStatus message={'پرداخت شما نا موفق بود'} />}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )
}
