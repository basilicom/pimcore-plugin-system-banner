<?php

namespace Basilicom\PimcorePluginSystemBanner;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class PimcorePluginSystemBannerBundle extends AbstractPimcoreBundle
{
    public function getJsPaths()
    {
        return [
            '/bundles/systembanner/js/pimcore/systemBanner.js'
        ];
    }

    public function getCssPaths(): array
    {
        return [
            '/bundles/systembanner/css/pimcore/systemBanner.css',
        ];
    }
}
