import * as routes from '../routes.json';

type EnvironmentRequestResponseData = { environment: string, text: string, color?: string };

enum ENVIRONMENT {
    DEV = 'dev',
    TEST = 'test',
    STAGE = 'stage',
    PROD = 'prod'
}

const environmentAliases: { [key: string]: Array<string> } = {
    [ENVIRONMENT.DEV]: ['dev', 'development'],
    [ENVIRONMENT.TEST]: ['qa', 'qs', 'test', 'testing'],
    [ENVIRONMENT.STAGE]: ['stage', 'staging'],
    [ENVIRONMENT.PROD]: ['live', 'prod', 'production']
};

export class SystemBanner {
    static show(environment: string = ''): void {
        if (environment.trim() === '') {
            fetch(routes["get-environment"])
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error("Not 200 response");
                    }
                    return response.json();
                })
                .then((responseData: EnvironmentRequestResponseData) => {
                    this.addCss();
                    this.addBanner(responseData);
                })
                .catch(() => {
                    // do nothing and show nothing
                });
        } else {
            this.addCss();
            this.addBanner({text: environment, environment});
        }
    }

    private static addBanner(environmentData: EnvironmentRequestResponseData): void {
        const banner = document.createElement('div');
        banner.classList.add('system-banner__banner');
        banner.innerText = environmentData.text;

        const bannerContainer = document.createElement('div');
        bannerContainer.classList.add('system-banner');
        if (environmentData.color) {
            bannerContainer.classList.add('system-banner--' + environmentData.color);
        } else {
            bannerContainer.classList.add('system-banner--' + this.getSystemType(environmentData.environment));
        }
        bannerContainer.append(banner);

        document.body.append(bannerContainer);
    }

    private static getSystemType(environment: string): string {
        let systemType = ENVIRONMENT.PROD as string;
        Object.keys(environmentAliases).forEach((environmentAlias) => {
            if (environmentAliases[environmentAlias].includes(environment)) {
                systemType = environmentAlias;
            }
        });

        return systemType;
    }

    private static addCss(): void {
        const cssId = 'system-banner-css';
        if (!document.getElementById(cssId)) {
            const head = document.getElementsByTagName('head')[0];
            const link = document.createElement('link');

            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/bundles/pimcorepluginsystembanner/css/pimcore/system-banner.css';
            link.media = 'all';

            head.appendChild(link);
        }
    }
}
