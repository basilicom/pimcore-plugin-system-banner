import React from 'react'
import { SystemBannerLabel } from './system-banner-label'
import { getLoginBanner } from '../utils/login-banner'

export const SystemBannerLogin = (): React.JSX.Element | null => {
    const loginBanner = getLoginBanner()

    if (loginBanner === undefined) {
        return null
    }

    // same spot as the right sidebar entry after login
    return (
        <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 1000 }}>
            <SystemBannerLabel text={loginBanner.text} color={loginBanner.color ?? '#3e3e3e'} />
        </div>
    )
}
