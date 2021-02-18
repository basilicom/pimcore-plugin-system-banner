<?php

namespace Basilicom\PimcorePluginSystemBanner;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class PimcorePluginSystemBannerBundle extends AbstractPimcoreBundle
{
    public function getJsPaths(): array
    {
        return [
            '/bundles/pimcorepluginsystembanner/js/pimcore/systemBanner.js',
        ];
    }
}
