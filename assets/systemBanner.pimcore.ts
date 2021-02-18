import {SystemBanner} from './js/SystemBanner';

declare const pimcore: any;
declare const Class: any;

pimcore.registerNS('pimcore.plugin.SystemBannerBundle');
pimcore.plugin.SystemBannerBundle = Class.create(pimcore.plugin.admin, {
    getClassName: () => 'pimcore.plugin.SystemBannerBundle',

    pimcoreReady: () => {
        SystemBanner.show(pimcore.settings.environment);
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },
});

const SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
