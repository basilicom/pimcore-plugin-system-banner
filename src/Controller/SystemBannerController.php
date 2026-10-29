<?php

namespace Basilicom\PimcorePluginSystemBanner\Controller;

use Basilicom\PimcorePluginSystemBanner\Service\SystemBannerProvider;
use Pimcore\Controller\FrontendController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class SystemBannerController extends FrontendController
{
    #[Route("/admin/pimcore-system-banner", methods: ["GET"])]
    public function systemBanner(SystemBannerProvider $systemBannerProvider): JsonResponse
    {
        return new JsonResponse(
            [
                'environment' => $systemBannerProvider->getEnvironment(),
                'text' => $systemBannerProvider->getText(),
                'color' => $systemBannerProvider->getColor(),
            ]
        );
    }
}
