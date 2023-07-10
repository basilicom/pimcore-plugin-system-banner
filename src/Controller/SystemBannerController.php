<?php

namespace Basilicom\PimcorePluginSystemBanner\Controller;

use Pimcore\Config;
use Pimcore\Controller\FrontendController;
use Pimcore\Model\User;
use Pimcore\Tool\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SystemBannerController extends FrontendController
{
    private const VALID_COLORS = [
        'red',
        'orange',
        'green',
        'purple',
        'blue',
    ];
    /**
     * @Route("/pimcore-system-banner/environment", methods={"GET"})
     */
    public function systemBanner(): JsonResponse
    {
        /** @var User $user */
        $user = Session::getReadonly()->get('user');
        if (empty($user)) {
            return new JsonResponse(null, Response::HTTP_FORBIDDEN);
        }

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
