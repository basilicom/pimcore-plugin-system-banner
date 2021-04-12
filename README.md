# Pimcore Plugin System Banner

Shows a banner of the pimcore environment, to indicate if you are on prod or dev or else.

Uses the PIMCORE_ENVIRONMENT.

* development environments = green
* test environments = purple
* stage environments = yellow
* prod environments = red

![Environment dev](docs/environment-dev.jpg)


## Installation

```
composer require basilicom/pimcore-plugin-system-banner
```


### Activate Plugin

* Add to AppKernel.php

or

* Activate in the Pimcore backend

### build assets
e.g.
```bin/console assets:install web --symlink --relative```


## Add the banner to the frontend (only when backend user is active)

use the following twig function
``` 
{{ renderSystemBanner() | raw }}
```
