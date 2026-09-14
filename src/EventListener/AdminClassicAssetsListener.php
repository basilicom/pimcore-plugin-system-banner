<?php

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
