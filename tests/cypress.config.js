const { defineConfig } = require("cypress");
const fs = require('fs');
const {spawn} = require("node:child_process");

/*
 * Override some config options with a custom json file.
 */
let localConfig = {}
if (fs.existsSync(`${__dirname}/cypress.config.local.json`)) {
  localConfig = JSON.parse(fs.readFileSync(`${__dirname}/cypress.config.local.json`))
}



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // https://docs.cypress.io/api/plugins/before-run-api
      on('before:browser:launch', (browser = {}, launchOptions) => {

        /**
         * Example interaction with drupal through drush.
         */
        if (fs.existsSync(`${__dirname}/cypress/fixtures/users/role--administrator.json`)) {
          let administrator = JSON.parse(fs.readFileSync(`${__dirname}/cypress/fixtures/users/role--administrator.json`))
          const {CreateUser} = require(`${__dirname}/_custom/drush-import-fixtures.js`);

          CreateUser(administrator);
        }


      })
    },
  },
});
