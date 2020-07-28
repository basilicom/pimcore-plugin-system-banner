<?php

namespace Basilicom\PimcorePluginSystemBanner\Controller\Admin;

use Pimcore\Bundle\AdminBundle\Controller\AdminController;
use Pimcore\Bundle\AdminBundle\HttpFoundation\JsonResponse;
use Pimcore\Config;
use Symfony\Component\Routing\Annotation\Route;

class SystemBannerAdminController extends AdminController
{
    const TYPES_PROD = [
        'prod',
        'live',
    ];

    /**
     * @Route("/admin/system-banner/get-system-type", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function getSystemType()
    {
        $success = true;
        $environment = Config::getEnvironment();

        $type = false;
        if (in_array($environment, self::TYPES_PROD)) {
            $type = true;
        }

        return $this->adminJson([
            'success' => $success,
            'isLive' => $type,
            'text' => $environment
        ]);
    }
}
