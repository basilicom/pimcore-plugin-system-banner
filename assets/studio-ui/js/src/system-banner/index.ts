import { type IAbstractPlugin } from '@pimcore/studio-ui-bundle'
import { RightSidebarExtension } from './modules/right-sidebar-extension'
import { LoginFormExtension } from './modules/login-form-extension'

export const SystemBannerPlugin: IAbstractPlugin = {
    name: 'SystemBannerPlugin',

    onStartup ({ moduleSystem }) {
        moduleSystem.registerModule(RightSidebarExtension);
        moduleSystem.registerModule(LoginFormExtension);
        console.log('Hello from System BannerPlugin.');
    }
}
