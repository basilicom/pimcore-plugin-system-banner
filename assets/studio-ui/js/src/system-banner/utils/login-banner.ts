import { appConfig } from '@pimcore/studio-ui-bundle/app'

export type LoginBanner = { text: string, color: string | null }

// filled by SystemBannerAppConfigProvider only when SYSTEM_BANNER_LOGIN_SCREEN is on;
// appConfig is read synchronously from the entry page, so it is complete before any module onInit
export const getLoginBanner = (): LoginBanner | undefined =>
    (appConfig as unknown as { systemBanner?: LoginBanner }).systemBanner
