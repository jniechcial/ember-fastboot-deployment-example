/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const env = EmberApp.env();

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      generateAssetMap: env === 'production',
    },
  });

  return app.toTree();
};
