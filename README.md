## Setup

Clone this repo somewhere, then in the repo root perform the following steps:

```
lando start
lando composer install
lando drupal-install-standard

# Install cypress
cd tests && npm ci

# Run cypress
npx cypress open
```

* Username: admin
* Password: pass
