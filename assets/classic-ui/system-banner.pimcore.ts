import {SystemBanner} from './js/SystemBanner';

declare const pimcore: any;

document.addEventListener(pimcore.events.pimcoreReady, (e) => {
    SystemBanner.show();
});
