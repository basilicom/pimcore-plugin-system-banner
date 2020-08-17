pimcore.registerNS('pimcore.plugin.SystemBannerBundle');
pimcore.plugin.SystemBannerBundle = Class.create(pimcore.plugin.admin, {
  environmentAliases: {
    dev: [
      'dev',
      'development',
    ],

    test: [
      'qa',
      'qs',
      'test',
      'testing',
    ],

    stage: [
      'stage',
      'staging'
    ],

    prod: [
      'live',
      'prod',
      'production'
    ]
  },

  getClassName: function () {
    return 'pimcore.plugin.SystemBannerBundle';
  },

  initialize: function () {
    pimcore.plugin.broker.registerPlugin(this);
  },

  pimcoreReady: function () {
    var banner = document.createElement('div');
    banner.setAttribute('id', 'system-banner');
    banner.className = 'system-banner--' + this._getSystemType();
    banner.innerText = pimcore.settings.environment;

    document.body.append(banner);
  },

  _getSystemType: function() {
    var _this = this;

    var systemType = 'prod';
    Object.keys(this.environmentAliases).forEach(function (environmentAlias) {
      if (_this.environmentAliases[environmentAlias].includes(pimcore.settings.environment)) {
        systemType = environmentAlias;
      }
    });

    return systemType;
  }
});

var SystemBannerBundlePlugin = new pimcore.plugin.SystemBannerBundle();
