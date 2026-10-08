<?php

namespace Basilicom\PimcorePluginSystemBanner\Service;

use Pimcore\Config;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

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

    public function __construct(
        #[Autowire('%env(default::SYSTEM_BANNER_TEXT)%')]
        private readonly ?string $text = null,
        #[Autowire('%env(default::SYSTEM_BANNER_COLOR)%')]
        private readonly ?string $color = null,
    ) {
    }

    public function getEnvironment(): string
    {
        return Config::getEnvironment();
    }

    public function getText(): string
    {
        $text = trim($this->text ?? '');

        return $text !== '' ? $text : $this->getEnvironment();
    }

    public function getColor(): ?string
    {
        $color = trim($this->color ?? '');

        // test for legacy colors strings or regex for hex codes (3 or 6 chars)
        if (in_array($color, self::LEGACY_COLORS, true) or preg_match('/^#([A-Fa-f0-9]{3}){1,2}$/', $color)) {
            return $color;
        }

        return self::COLORS[$this->getEnvironment()] ?? null;
    }
}
