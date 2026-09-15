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
                writingMode: 'vertical-rl',
                textTransform: 'uppercase',
                fontSize: 16,
                lineHeight: 1,
                /*
                    Define the text color relative to the background color, works with "purple", #800080 or rgb()
                    - extract HSL from background color
                    - calculate the lightness (L), the threshold is 50%, works in most cases
                */
                color: `hsl(from ${bgColor} h s calc(clamp(0, (50 - l) * 1000, 100) * 1%))`
            }}>
                {label}
            </div>
        </div>
    )
}
