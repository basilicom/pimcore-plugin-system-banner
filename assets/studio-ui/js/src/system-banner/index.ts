import { type IAbstractPlugin } from '@pimcore/studio-ui-bundle'
import { RightSidebarExtension } from './modules/right-sidebar-extension'

export const SystemBannerPlugin: IAbstractPlugin = {
    name: 'SystemBannerPlugin',

    onStartup ({ moduleSystem }) {
        moduleSystem.registerModule(RightSidebarExtension);
        console.log('Hello from System BannerPlugin.');
    }
}
