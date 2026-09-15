<?php

/*
 * (c) Basilicom GmbH
 *
 * By purchasing and using the extension, the customer accepts Basilicom's End User License Agreement (EULA)
 * in its current version. For the full license information, please view the license.txt file that was
 * distributed with this source code.
 */

namespace Basilicom\PimcorePluginSystemBanner\EventListener;

use Pimcore\Event\BundleManager\PathsEvent;
use Pimcore\Event\BundleManagerEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Registers the classic UI assets. Pimcore >= 2026 has no classic UI and never dispatches these events.
 */
class AdminClassicAssetsListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            BundleManagerEvents::JS_PATHS => 'onJsPaths',
            BundleManagerEvents::CSS_PATHS => 'onCssPaths',
        ];
    }

    public function onJsPaths(PathsEvent $event): void
    {
        $event->addPaths(['/bundles/pimcorepluginsystembanner/js/pimcore/system-banner.js']);
    }

    public function onCssPaths(PathsEvent $event): void
    {
        $event->addPaths(['/bundles/pimcorepluginsystembanner/css/pimcore/system-banner.css']);
    }
}
