/*
 * (c) Basilicom GmbH
 *
 * By purchasing and using the extension, the customer accepts Basilicom's End User License Agreement (EULA)
 * in its current version. For the full license information, please view the license.txt file that was
 * distributed with this source code.
 */

import { type IAbstractPlugin } from '@pimcore/studio-ui-bundle'
import { RightSidebarExtension } from './modules/right-sidebar-extension'

export const SystemBannerPlugin: IAbstractPlugin = {
    name: 'SystemBannerPlugin',

    onStartup ({ moduleSystem }) {
        moduleSystem.registerModule(RightSidebarExtension);
        console.log('Hello from System BannerPlugin.');
    }
}
