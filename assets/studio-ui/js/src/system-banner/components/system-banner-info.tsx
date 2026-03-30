import React, { useEffect, useState } from 'react'
import { fetchEnvironment, getSystemType, type EnvironmentRequestResponseData } from '../../../../../shared/system-banner-config'

export const SystemBannerInfo = (): React.JSX.Element => {
    const [envData, setEnvData] = useState<EnvironmentRequestResponseData | null>(null)

    useEffect(() => {
        fetchEnvironment()
            .then(setEnvData)
            .catch(() => {})
    }, [])

    const label = envData?.text ?? ''
    const bgColor = envData?.color ?? 'transparent'

    return (
        <div style={{
            backgroundColor: bgColor,
            margin: 8,
            borderRadius: 6,
            paddingBlock: 12,
            paddingInline: 12,
        }}>
            <div style={{
                color: 'white',
                writingMode: 'vertical-rl',
                textTransform: 'uppercase',
                fontSize: 16,
                lineHeight: 1
            }}>
                {label}
            </div>
        </div>
    )
}
