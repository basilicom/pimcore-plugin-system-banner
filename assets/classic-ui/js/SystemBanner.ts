import {
    type EnvironmentRequestResponseData,
    fetchEnvironment,
    getSystemType
} from '../../shared/system-banner-config';

export class SystemBanner {
    static show(environment: string = ''): void {
        if (environment.trim() === '') {
            fetchEnvironment()
                .then((responseData) => {
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
        document.body.style.setProperty('--system-banner-background', '' + environmentData.color);
        bannerContainer.append(banner);
        document.body.append(bannerContainer);
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
