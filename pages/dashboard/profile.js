import React from 'react'
import DashboardLayout from 'components/layouts/Dashboard'
import ProfileForm from 'components/dashboard/profile'
export default function Profile() {
    return (
        <DashboardLayout title="فروشگاه | پنل کاربری">
            <ProfileForm/>
        </DashboardLayout>
    )
}
