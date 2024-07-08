<?php

namespace Basilicom\PimcorePluginSystemBanner;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\PimcoreBundleAdminClassicInterface;

class PimcorePluginSystemBannerBundle extends AbstractPimcoreBundle implements PimcoreBundleAdminClassicInterface
{
    public function getJsPaths(): array
    {
        return ['/bundles/pimcorepluginsystembanner/js/pimcore/system-banner.js'];
    }

    public function getCssPaths(): array
    {
        return ['/bundles/pimcorepluginsystembanner/css/pimcore/system-banner.css'];
    }

    public function getEditmodeJsPaths(): array
    {
        return [];
    }

    public function getEditmodeCssPaths(): array
    {
        return [];
    }
}
