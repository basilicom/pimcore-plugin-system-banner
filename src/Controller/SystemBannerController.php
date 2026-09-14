<?php

namespace Basilicom\PimcorePluginSystemBanner\Controller;

use Pimcore\Config;
use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class SystemBannerController extends FrontendController
{
    private const COLORS = [
        'prod' => 'red',
        'production' => 'red',
        'stage' => 'yellow',
        'staging' => 'yellow',
        'dev' => 'green',
        'development' => 'green',
        'test' => 'purple',
        'testing' => 'purple'
    ];

    private const LEGACY_COLORS = [
        'green',
        'yellow',
        'red',
        'purple',
        'blue'
    ];

    #[Route("/admin/pimcore-system-banner", methods: ["GET"])]
    public function systemBanner(): JsonResponse
    {
        $environment = Config::getEnvironment();
        $environmentName = $environment;
        $color = self::COLORS[$environment] ?? null;

        if (empty($_ENV['SYSTEM_BANNER_TEXT']) === false) {
            $environmentName = trim($_ENV['SYSTEM_BANNER_TEXT']);
        }

        if (empty($_ENV['SYSTEM_BANNER_COLOR']) === false) {
            $input = trim($_ENV['SYSTEM_BANNER_COLOR']);

            // test for legacy colors strings or regex for hex codes (3 or 6 chars)
            if (in_array($input, self::LEGACY_COLORS) or preg_match('/^#([A-Fa-f0-9]{3}){1,2}$/', $input)) {
                $color = $input;
            }
        }

        return new JsonResponse(
            [
                'environment' => $environment,
                'text' => $environmentName,
                'color' => $color,
            ],
            200
        );
    }
}
