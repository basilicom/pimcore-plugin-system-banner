<?php

namespace Basilicom\PimcorePluginSystemBanner;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\PimcoreBundleAdminClassicInterface;
use Pimcore\Extension\Bundle\Traits\BundleAdminClassicTrait;
use Pimcore\Extension\Bundle\Traits\PackageVersionTrait;

class PimcorePluginSystemBannerBundle extends AbstractPimcoreBundle implements PimcoreBundleAdminClassicInterface
{
    use BundleAdminClassicTrait;
    use PackageVersionTrait;

    public function getJsPaths(): array
    {
        return ['/bundles/pimcorepluginsystembanner/js/pimcore/system-banner.js'];
    }

    public function getCssPaths(): array
    {
        return ['/bundles/pimcorepluginsystembanner/css/pimcore/system-banner.css'];
    }

    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
