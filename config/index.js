'use strict';

const Config = {
  env: {
    port: 3000
  },
  paths: {
    server: {
      base: './src/server',
      app: './src/server/app.js',
      jsFiles: './src/server/**/*.js',
      specs: './/src//server//**//*.spec.js',
      coverage: './src/server/**/!(*.spec.js)'
    }
  }
};

module.exports = Config;
