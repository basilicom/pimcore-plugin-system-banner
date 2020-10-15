require('../systemBanner.js');

pimcore.registerNS('pimcore.plugin.SystemBannerBundle');
pimcore.plugin.SystemBannerBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return 'pimcore.plugin.SystemBannerBundle';
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },

    pimcoreReady: function () {
        new SystemBanner(pimcore.settings.environment);
    }
});

var SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
