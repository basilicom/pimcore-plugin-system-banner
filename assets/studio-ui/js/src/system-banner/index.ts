import { type IAbstractPlugin } from '@pimcore/studio-ui-bundle'
import { LeftSidebarExtension } from './modules/left-sidebar-extension'

export const SystemBannerPlugin: IAbstractPlugin = {
    name: 'SystemBannerPlugin',

    onStartup ({ moduleSystem }) {
        moduleSystem.registerModule(LeftSidebarExtension)
    }
}
