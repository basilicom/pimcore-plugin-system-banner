import React from 'react'
import { appConfig } from '@pimcore/studio-ui-bundle/app'
import { textColorFor } from '../utils/text-color'

type LoginBanner = { text: string, color: string | null }

// filled by SystemBannerAppConfigProvider only when SYSTEM_BANNER_LOGIN_SCREEN is on
const loginBanner = (appConfig as unknown as { systemBanner?: LoginBanner }).systemBanner

export const SystemBannerLogin = (): React.JSX.Element | null => {
    if (loginBanner === undefined) {
        return null
    }

    const bgColor = loginBanner.color ?? '#3e3e3e'

    return (
        <div style={{
            backgroundColor: bgColor,
            borderRadius: 6,
            marginTop: 16,
            padding: 8,
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: textColorFor(bgColor)
        }}>
            {loginBanner.text}
        </div>
    )
}
