# Schemadotorg Blueprints - Drupal Module Development Environment

Used for developing on [Schemadotorg Blueprints](https://www.drupal.org/project/schemadotorg)

## Setup

Clone this repo somewhere, then in the repo root perform the following steps:

```
lando start
lando composer install
lando drupal-install-standard

# Install cypress
cd tests && npm ci
```

* Username: admin
* Password: pass
