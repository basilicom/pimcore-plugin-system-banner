import React, { useEffect, useState } from 'react'
import { appConfig } from '@pimcore/studio-ui-bundle/app'
import { fetchEnvironment, getSystemType, type EnvironmentRequestResponseData } from '../../../../../shared/system-banner-config'
import { SystemBannerLabel } from './system-banner-label'

export const SystemBannerInfo = (): React.JSX.Element => {
    const [envData, setEnvData] = useState<EnvironmentRequestResponseData | null>(null)

    useEffect(() => {
        // Studio API route, so the banner does not depend on a Classic UI session
        fetchEnvironment(`${appConfig.apiPrefix}/system-banner`)
            .then(setEnvData)
            .catch(() => {})
    }, [])

    return <SystemBannerLabel text={envData?.text ?? ''} color={envData?.color ?? 'transparent'} />
}
