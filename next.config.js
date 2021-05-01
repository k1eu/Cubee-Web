const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const url = require('url');
const { secretConfig, ...config } = require('config');

module.exports = withPlugins([
  withImages
], {
  
  serverRuntimeConfig: { ...config, ...secretConfig },
  publicRuntimeConfig: config,
  
});
