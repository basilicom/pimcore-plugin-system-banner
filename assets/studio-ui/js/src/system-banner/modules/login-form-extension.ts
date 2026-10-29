import { type AbstractModule, container } from '@pimcore/studio-ui-bundle'
import { serviceIds } from '@pimcore/studio-ui-bundle/app'
import { componentConfig, type ComponentRegistry } from '@pimcore/studio-ui-bundle/modules/app'
import { SystemBannerLogin } from '../components/system-banner-login'

export const LoginFormExtension: AbstractModule = {
    onInit: (): void => {
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
