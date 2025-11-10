<?php

namespace Basilicom\PimcorePluginSystemBanner\Controller;

use Pimcore\Config;
use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SystemBannerController extends FrontendController
{
    private const array VALID_COLORS = [
        'red',
        'yellow',
        'green',
        'purple',
        'blue',
    ];

    #[Route("/admin/pimcore-system-banner", methods: ["GET"])]
    public function systemBanner(): JsonResponse
    {
        $environmentName = Config::getEnvironment();
        $color = null;
        if (empty($_ENV['SYSTEM_BANNER_TEXT']) === false) {
            $environmentName = trim($_ENV['SYSTEM_BANNER_TEXT']);
        }
        if (empty($_ENV['SYSTEM_BANNER_COLOR']) === false && in_array($_ENV['SYSTEM_BANNER_COLOR'], self::VALID_COLORS, true)) {
            $color = trim($_ENV['SYSTEM_BANNER_COLOR']);
        }

        return new JsonResponse(
            [
                'environment' => Config::getEnvironment(),
                'text'        => $environmentName,
                'color'       => $color,
            ],
            200
        );
    }
}
