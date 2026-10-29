import React from 'react'
import { appConfig } from '@pimcore/studio-ui-bundle/app'
import { SystemBannerLabel } from './system-banner-label'

type LoginBanner = { text: string, color: string | null }

// filled by SystemBannerAppConfigProvider only when SYSTEM_BANNER_LOGIN_SCREEN is on
const loginBanner = (appConfig as unknown as { systemBanner?: LoginBanner }).systemBanner

export const SystemBannerLogin = (): React.JSX.Element | null => {
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
