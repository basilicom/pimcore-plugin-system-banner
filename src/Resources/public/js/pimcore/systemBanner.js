pimcore.registerNS('pimcore.plugin.SystemBannerBundle');

pimcore.plugin.SystemBannerBundle = Class.create(pimcore.plugin.admin, {
    banner: null,

    // functions
    getClassName: function () {
        return 'pimcore.plugin.SystemBannerBundle';
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);

        this._getSystemType();
    },

    pimcoreReady: function () {
        this._createBanner();
    },

    _getSystemType: function () {
        var _this = this;

        Ext.Ajax.request({
            url: '/admin/system-banner',
            method: 'GET',
            success: function (response) {
                var res = Ext.decode(response.responseText);
                if (res.success) {
                    _this._updateBanner(res.type, res.content);
                }
            }
        });
    },

    _getBanner: function () {
        if (!this.banner) {
            this.banner = document.createElement('div');
            this.banner.setAttribute('id', 'system-banner');
            this.banner.className = 'system-banner--prod';
            this.banner.innerText = '---';
        }

        return this.banner;
    },

    _createBanner: function () {
        var banner = this._getBanner();

        document.body.append(banner);
    },

    _updateBanner: function (type, content) {
        var banner = this._getBanner();

        banner.className = 'system-banner--' + type;
        banner.innerText = content;
    }
});

var SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
