<?php

$config['system.logging']['error_level'] = 'verbose';
$config['config_split.config_split.dev']['status'] = TRUE;
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/default/development.services.yml';

// Comment these lines to disable a lot of Drupal's render caching.
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';
$settings['cache']['bins']['page'] = 'cache.backend.null';

$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

$settings['skip_permissions_hardening'] = TRUE;
$settings['hash_salt'] = 'CbpIiyuunjCttNBiXCyxyNwDopojILuVpVfQFcPvQvlsfdbolURxfHmJyFWVupWO';
