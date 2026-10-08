<?php

namespace Basilicom\PimcorePluginSystemBanner\Service;

use Pimcore\Config;

class SystemBannerProvider
{
    private const COLORS = [
        'prod' => 'red',
        'production' => 'red',
        'stage' => 'yellow',
        'staging' => 'yellow',
        'dev' => 'green',
        'development' => 'green',
        'test' => 'purple',
        'testing' => 'purple'
    ];

    private const LEGACY_COLORS = [
        'green',
        'yellow',
        'red',
        'purple',
        'blue'
    ];

    public function getEnvironment(): string
    {
        return Config::getEnvironment();
    }

    public function getText(): string
    {
        if (empty($_ENV['SYSTEM_BANNER_TEXT']) === false) {
            return trim($_ENV['SYSTEM_BANNER_TEXT']);
        }

        return $this->getEnvironment();
    }

    public function getColor(): ?string
    {
        if (empty($_ENV['SYSTEM_BANNER_COLOR']) === false) {
            $input = trim($_ENV['SYSTEM_BANNER_COLOR']);

            // test for legacy colors strings or regex for hex codes (3 or 6 chars)
            if (in_array($input, self::LEGACY_COLORS) or preg_match('/^#([A-Fa-f0-9]{3}){1,2}$/', $input)) {
                return $input;
            }
        }

        return self::COLORS[$this->getEnvironment()] ?? null;
    }
}
