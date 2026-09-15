<?php

/*
 * (c) Basilicom GmbH
 *
 * By purchasing and using the extension, the customer accepts Basilicom's End User License Agreement (EULA)
 * in its current version. For the full license information, please view the license.txt file that was
 * distributed with this source code.
 */

declare(strict_types=1);

namespace Basilicom\PimcorePluginSystemBanner\Webpack;

use Pimcore\Bundle\StudioUiBundle\Webpack\WebpackEntryPointProviderInterface;

/**
 * @internal
 */
final class WebpackEntryPointProvider implements WebpackEntryPointProviderInterface
{
    public function getEntryPointsJsonLocations(): array
    {
        return glob(__DIR__ . '/../../public/studio/build/*/entrypoints.json');
    }

    public function getEntryPoints(): array
    {
        return ['exposeRemote'];
    }

    public function getOptionalEntryPoints(): array
    {
        return [];
    }

}
