import React from 'react'
import './PageLoading.scss'
import AppLayout from '../../Components/AppLayout/AppLayout'

const PageLoading = ({ show }) => {
    return (
        <AppLayout>
            <div className="loading">
                <div className="cssload-container">
                    <div className="cssload-whirlpool"></div>
                </div>
            </div>
        </AppLayout>
    )
}

export default PageLoading;