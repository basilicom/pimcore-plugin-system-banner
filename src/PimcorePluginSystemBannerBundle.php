<?php

/*
 * (c) Basilicom GmbH
 *
 * By purchasing and using the extension, the customer accepts Basilicom's End User License Agreement (EULA)
 * in its current version. For the full license information, please view the license.txt file that was
 * distributed with this source code.
 */

namespace Basilicom\PimcorePluginSystemBanner;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\Traits\PackageVersionTrait;

class PimcorePluginSystemBannerBundle extends AbstractPimcoreBundle
{
    use PackageVersionTrait;

    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
