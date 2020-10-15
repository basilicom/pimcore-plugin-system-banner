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
        var banner = new SystemBanner();
        banner.init(pimcore.settings.environment);
    }
});

var SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
