const {defineConfig} = require('@vue/cli-service');
const useCrypto = require('./crypto.js');

useCrypto();

module.exports = defineConfig({
  transpileDependencies: true
});
