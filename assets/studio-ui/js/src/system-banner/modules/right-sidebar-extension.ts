/*
 * (c) Basilicom GmbH
 *
 * By purchasing and using the extension, the customer accepts Basilicom's End User License Agreement (EULA)
 * in its current version. For the full license information, please view the license.txt file that was
 * distributed with this source code.
 */

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
