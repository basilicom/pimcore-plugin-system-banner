<?php

namespace Basilicom\PimcorePluginSystemBanner\DependencyInjection;

use Basilicom\PimcorePluginSystemBanner\AppConfig\SystemBannerAppConfigProvider;
use Pimcore\Bundle\AdminBundle\Event\AdminEvents;
use Pimcore\Bundle\StudioUiBundle\AppConfig\AppConfigProviderInterface;
use Pimcore\Bundle\StudioUiBundle\Webpack\WebpackEntryPointProviderInterface;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class PimcorePluginSystemBannerExtension extends Extension
{
    /**
     * @inheritdoc
     */
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../../config'));
        $loader->load('services.yaml');

        // pimcore/admin-ui-classic-bundle is optional and unavailable on Pimcore 2026
        if (class_exists(AdminEvents::class)) {
            $loader->load('services_admin_classic.yaml');
        }

        // pimcore/studio-ui-bundle is optional and unavailable on Pimcore 11
        if (interface_exists(WebpackEntryPointProviderInterface::class)) {
            $loader->load('services_studio.yaml');
        }

        // the app config of the public Studio entry page carries the banner to its login screen
        if (interface_exists(AppConfigProviderInterface::class)) {
            $container->autowire(SystemBannerAppConfigProvider::class)
                ->addTag('pimcore_studio_ui.app_config_provider');
        }
    }
}
