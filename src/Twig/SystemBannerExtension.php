<?php

namespace Basilicom\PimcorePluginSystemBanner\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class SystemBannerExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('renderSystemBanner', [$this, 'getSystemBanner']),
        ];
    }

    public function getSystemBanner() {
        return '<script src="/bundles/pimcorepluginsystembanner/js/systemBanner.js"></script>';
    }
}
