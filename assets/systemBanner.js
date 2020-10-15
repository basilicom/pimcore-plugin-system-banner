class SystemBanner {
    constructor(environment = null) {
        this.setEnvironmentAliases();

        if (environment === null) {
          this.getData();
        } else {
          this.addCss();
          this.addBanner(environment);
        }
    }

    setEnvironmentAliases() {
        this.environmentAliases = {
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
        }
    }

    getData() {
        var _this = this;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                _this.addCss();
                _this.addBanner(response.environment);
            }
        };
        xhttp.open("GET", "/pimcore-system-banner", true);
        xhttp.send();
    }

    getSystemType(environment) {
        var _this = this;

        var systemType = 'prod';
        Object.keys(_this.environmentAliases).forEach(function (environmentAlias) {
            if (_this.environmentAliases[environmentAlias].includes(environment)) {
                systemType = environmentAlias;
            }
        });

        return systemType;
    }

    addBanner(environment) {
        var banner = document.createElement('div');
        banner.setAttribute('id', 'system-banner');
        banner.className = 'system-banner--' + this.getSystemType(environment);
        banner.innerText = environment;

        document.body.append(banner);
    }

    addCss() {
        var cssId = 'system-banner-css';
        if (!document.getElementById(cssId)) {
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/bundles/pimcorepluginsystembanner/css/pimcore/systemBanner.css';
            link.media = 'all';
            head.appendChild(link);
        }
    }
}

new SystemBanner();
