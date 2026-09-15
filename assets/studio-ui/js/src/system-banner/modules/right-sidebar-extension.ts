import { type AbstractModule, container } from '@pimcore/studio-ui-bundle'
import { serviceIds } from '@pimcore/studio-ui-bundle/app'
import { componentConfig, type ComponentRegistry } from '@pimcore/studio-ui-bundle/modules/app'
import { SystemBannerInfo } from '../components/system-banner-info'

export const RightSidebarExtension: AbstractModule = {
    onInit: (): void => {
        const componentRegistry = container.get<ComponentRegistry>(serviceIds['App/ComponentRegistry/ComponentRegistry'])

        componentRegistry.registerToSlot(
            componentConfig.rightSidebar.slot.name,
            {
                name: 'systemBannerInfo',
                component: SystemBannerInfo,
                priority: 101
            }
        )
    }
}
