pimcore.registerNS("pimcore.plugin.SystemBannerBundle");

pimcore.plugin.SystemBannerBundle = Class.create(pimcore.plugin.admin, {

    systemText: '---',
    isLive: true,

    // functions
    getClassName: function () {
        return "pimcore.plugin.SystemBannerBundle";
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);

        this._getSystemType();
    },

    pimcoreReady: function (params, broker) {
        this._createBanner();
        this._updateBanner();
    },

    _getSystemType: function () {
        var _this = this;

        Ext.Ajax.request({
            url: "/admin/system-banner/get-system-type",
            method: 'GET',
            success: function (response) {

                var res = Ext.decode(response.responseText);
                if (res.success) {
                    _this.isLive = res.isLive;
                    _this.systemText = res.text;
                    _this._updateBanner();
                }
            },
            failure: function (response) {
                // nothing to do
            }
        });
    },

    _createBanner: function () {
        let banner = document.createElement('div');
        banner.setAttribute("id", "system-banner");
        document.body.append(banner);
    },

    _updateBanner: function () {
        let banner = document.getElementById('system-banner');
        if (!this.isLive) {
            banner.classList.add("system-banner-dev");
        }
        banner.innerText = this.systemText;
    }
});

var SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
