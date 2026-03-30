import React, { useEffect, useState } from 'react'
import { fetchEnvironment, getSystemType, type EnvironmentRequestResponseData } from '../../../../../shared/system-banner-config'

const environmentColors: Record<string, string> = {
    dev: '#4caf50',
    test: '#ff9800',
    stage: '#2196f3',
    prod: '#f44336'
}

export const SystemBannerInfo = (): React.JSX.Element => {
    const [envData, setEnvData] = useState<EnvironmentRequestResponseData | null>(null)

    useEffect(() => {
        fetchEnvironment()
            .then(setEnvData)
            .catch(() => {})
    }, [])

    const label = envData?.text ?? 'System Banner'
    const systemType = envData != null ? getSystemType(envData.environment) : null
    const bgColor = envData?.color ?? (systemType != null ? environmentColors[systemType] : undefined) ?? 'transparent'

    return (
        <div style={{
            backgroundColor: bgColor,
            margin: 8,
            borderRadius: 6,
            color: 'white',
            writingMode: 'vertical-rl',
            textTransform: 'uppercase',
            fontSize: 16,
            boxSizing: 'border-box',
            paddingBlock: 12,
            paddingInline: 12,
            lineHeight: 1
        }}>
            <p style={{margin: 0, fontWeight: 'bold'}}>{label}</p>
        </div>
    )
}
