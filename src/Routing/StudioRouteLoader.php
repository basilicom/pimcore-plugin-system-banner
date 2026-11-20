<?php

namespace Basilicom\PimcorePluginSystemBanner\Routing;

use Basilicom\PimcorePluginSystemBanner\Controller\SystemBannerController;
use Symfony\Component\Config\Loader\Loader;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

/**
 * Adds the banner endpoint below the Studio API prefix, so the Studio UI reads it through the Studio firewall
 * instead of the Classic UI session. Without pimcore/studio-backend-bundle there is no Studio API and no route.
 */
class StudioRouteLoader extends Loader
{
    public const TYPE = 'pimcore_plugin_system_banner_studio';

    private const URL_PREFIX_PARAMETER = 'pimcore_studio_backend.url_prefix';

    public function __construct(
        private readonly ParameterBagInterface $parameterBag,
    ) {
        parent::__construct();
    }

    public function load(mixed $resource, ?string $type = null): RouteCollection
    {
        $routes = new RouteCollection();

        if ($this->parameterBag->has(self::URL_PREFIX_PARAMETER) === false) {
            return $routes;
        }

        $routes->add(
            'pimcore_plugin_system_banner_studio',
            new Route(
                rtrim((string) $this->parameterBag->get(self::URL_PREFIX_PARAMETER), '/') . '/system-banner',
                ['_controller' => SystemBannerController::class . '::studioSystemBanner'],
                methods: ['GET'],
            ),
        );

        return $routes;
    }

    public function supports(mixed $resource, ?string $type = null): bool
    {
        return $type === self::TYPE;
    }
}
