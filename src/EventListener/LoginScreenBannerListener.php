<?php

namespace Basilicom\PimcorePluginSystemBanner\EventListener;

use Basilicom\PimcorePluginSystemBanner\Service\SystemBannerProvider;
use Pimcore\Bundle\AdminBundle\Event\AdminEvents;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

/**
 * Renders the banner into the classic UI login page, which is public and loads no bundle JS.
 */
class LoginScreenBannerListener implements EventSubscriberInterface
{
    private const TEMPLATE = '@PimcorePluginSystemBanner/login/system-banner.html.twig';

    public function __construct(
        private readonly SystemBannerProvider $systemBannerProvider,
        #[Autowire('%env(bool:SYSTEM_BANNER_LOGIN_SCREEN)%')]
        private readonly bool $enabled,
    ) {
    }

    public static function getSubscribedEvents(): array
    {
        return [AdminEvents::LOGIN_BEFORE_RENDER => 'onLoginBeforeRender'];
    }

    public function onLoginBeforeRender(GenericEvent $event): void
    {
        if ($this->enabled === false) {
            return;
        }

        $parameters = $event->getArgument('parameters');
        $parameters['includeTemplates']['PimcorePluginSystemBannerBundle'] = self::TEMPLATE;
        $parameters['systemBanner'] = [
            'text' => $this->systemBannerProvider->getText(),
            'color' => $this->systemBannerProvider->getColor(),
        ];
        $event->setArgument('parameters', $parameters);
    }
}
