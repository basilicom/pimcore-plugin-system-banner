<?php

namespace Basilicom\PimcorePluginSystemBanner\Controller;

use Pimcore\Config;
use Pimcore\Controller\FrontendController;
use Pimcore\Model\User;
use Pimcore\Tool\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SystemBannerController extends FrontendController
{
    /**
     * @Route("/pimcore-system-banner", methods={"GET"})
     */
    public function systemBanner()
    {
        /** @var User $user*/
        $user = Session::getReadonly()->get("user");
        if (empty($user)) {
            return JsonResponse::create(null, 400);
        }

        $environment = Config::getEnvironment();

        $data = [
            'environment' => $environment,
        ];
        return JsonResponse::create($data, 200);
    }
}