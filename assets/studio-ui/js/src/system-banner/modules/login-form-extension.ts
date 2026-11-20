import { type AbstractModule, container } from '@pimcore/studio-ui-bundle'
import { serviceIds } from '@pimcore/studio-ui-bundle/app'
import { componentConfig, type ComponentRegistry } from '@pimcore/studio-ui-bundle/modules/app'
import { SystemBannerLogin } from '../components/system-banner-login'
import { getLoginBanner } from '../utils/login-banner'

export const LoginFormExtension: AbstractModule = {
    onInit: (): void => {
        // the login form shows an "or" divider for every extra component in this slot,
        // so register only when there is a login banner to show
        if (getLoginBanner() === undefined) {
            return
        }

        const componentRegistry = container.get<ComponentRegistry>(serviceIds['App/ComponentRegistry/ComponentRegistry'])

        componentRegistry.registerToSlot(
            componentConfig.form.login.name,
            {
                name: 'systemBannerLogin',
                component: SystemBannerLogin
            }
        )
    }
}
