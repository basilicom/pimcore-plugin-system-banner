import {SystemBanner} from "./js/SystemBanner";

pimcore.registerNS('pimcore.plugin.SystemBannerBundle');
pimcore.plugin.SystemBannerBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return 'pimcore.plugin.SystemBannerBundle';
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },

    pimcoreReady: function () {
        const systemBanner = new SystemBanner();
        systemBanner.show(pimcore.settings.environment);
    }
});

const SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
