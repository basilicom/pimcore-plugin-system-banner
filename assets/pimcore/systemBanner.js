import {SystemBanner} from "../systemBanner";

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
        systemBanner.show();
    }
});

const SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
