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
        return $this->bannerResponse($systemBannerProvider);
    }

    /**
     * Route added by StudioRouteLoader below the Studio API prefix (Studio firewall).
     */
    public function studioSystemBanner(SystemBannerProvider $systemBannerProvider): JsonResponse
    {
        // the Studio access_control usually covers this already; the banner never goes to anonymous visitors
        $this->denyAccessUnlessGranted('ROLE_PIMCORE_USER');

        return $this->bannerResponse($systemBannerProvider);
    }

    private function bannerResponse(SystemBannerProvider $systemBannerProvider): JsonResponse
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
