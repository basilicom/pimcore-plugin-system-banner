const environmentAliases = {
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
};

export class SystemBanner {
    show(environment) {
        if (!environment) {
            fetch('/pimcore-system-banner/environment')
                .then((response) => response.json())
                .then((responseData) => {
                    this.addCss();
                    this.addBanner(responseData.environment);
                });
        } else {
            this.addCss();
            this.addBanner(environment);
        }
    }

    getSystemType(environment) {
        let systemType = 'prod';
        Object.keys(environmentAliases).forEach((environmentAlias) => {
            if (environmentAliases[environmentAlias].includes(environment)) {
                systemType = environmentAlias;
            }
        });

        return systemType;
    }

    addBanner(environment) {
        const banner = document.createElement('div');
        banner.classList.add('system-banner__banner');
        banner.innerText = environment;

        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('system-banner', 'system-banner--' + this.getSystemType(environment));
        bannerContainer.append(banner);

        document.body.append(bannerContainer);
    }

    addCss() {
        const cssId = 'system-banner-css';
        if (!document.getElementById(cssId)) {
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');

            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/bundles/pimcorepluginsystembanner/css/pimcore/systemBanner.css';
            link.media = 'all';

            head.appendChild(link);
        }
    }
}
