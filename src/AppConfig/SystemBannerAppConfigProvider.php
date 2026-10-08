<?php

namespace Basilicom\PimcorePluginSystemBanner\AppConfig;

use Basilicom\PimcorePluginSystemBanner\Service\SystemBannerProvider;
use Pimcore\Bundle\StudioUiBundle\AppConfig\AppConfigProviderInterface;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

/**
 * Hands the banner to the Studio UI login screen, which is public and cannot call the admin endpoint.
 */
class SystemBannerAppConfigProvider implements AppConfigProviderInterface
{
    public const KEY = 'systemBanner';

    public function __construct(
        private readonly SystemBannerProvider $systemBannerProvider,
        #[Autowire('%env(bool:SYSTEM_BANNER_LOGIN_SCREEN)%')]
        private readonly bool $enabled,
    ) {
    }

    public function getAppConfig(): array
    {
        if ($this->enabled === false) {
            return [];
        }

        return [
            self::KEY => [
                'text' => $this->systemBannerProvider->getText(),
                'color' => $this->systemBannerProvider->getColor(),
            ],
        ];
    }
}
