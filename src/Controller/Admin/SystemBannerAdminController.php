<?php

namespace Basilicom\PimcorePluginSystemBanner\Controller\Admin;

use Pimcore\Bundle\AdminBundle\Controller\AdminController;
use Pimcore\Bundle\AdminBundle\HttpFoundation\JsonResponse;
use Pimcore\Config;
use Symfony\Component\Routing\Annotation\Route;

class SystemBannerAdminController extends AdminController
{
    const ENVIRONMENT_DEV = 'dev';
    const ENVIRONMENT_STAGE = 'stage';
    const ENVIRONMENT_PROD = 'prod';

    const ENVIRONMENT_MAP = [
        'dev' => self::ENVIRONMENT_DEV,
        'development' => self::ENVIRONMENT_DEV,
        'qa' => self::ENVIRONMENT_DEV,

        'stage' => self::ENVIRONMENT_STAGE,
        'staging' => self::ENVIRONMENT_STAGE,

        'live' => self::ENVIRONMENT_PROD,
        'prod' => self::ENVIRONMENT_PROD,
    ];

    /**
     * @Route("/admin/system-banner", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function getSystemType()
    {
        $environment = Config::getEnvironment();
        $environmentType = !in_array($environment, self::ENVIRONMENT_MAP)
            ? self::ENVIRONMENT_PROD
            : self::ENVIRONMENT_MAP[$environment];

        return $this->adminJson(
            [
                'success' => true,
                'type' => $environmentType,
                'content' => $environment
            ]
        );
    }
}
