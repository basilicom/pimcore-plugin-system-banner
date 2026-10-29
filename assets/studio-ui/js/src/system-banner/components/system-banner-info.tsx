import React, { useEffect, useState } from 'react'
import { fetchEnvironment, getSystemType, type EnvironmentRequestResponseData } from '../../../../../shared/system-banner-config'
import { SystemBannerLabel } from './system-banner-label'

export const SystemBannerInfo = (): React.JSX.Element => {
    const [envData, setEnvData] = useState<EnvironmentRequestResponseData | null>(null)

    useEffect(() => {
        fetchEnvironment()
            .then(setEnvData)
            .catch(() => {})
    }, [])

    return <SystemBannerLabel text={envData?.text ?? ''} color={envData?.color ?? 'transparent'} />
}
