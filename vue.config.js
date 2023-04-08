const {defineConfig} = require('@vue/cli-service');
const useCrypto = require('./crypto.js');

useCrypto();

module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/renderer/index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        asarUnpack: ['sdk'],
        // extraResources: [
        //   {
        //     from: "sdk/mymain.dll",
        //     to: "sdk/mymain.dll",
        //     filter: ["**/*"],
        //   },
        // ],
        mac: {
          hardenedRuntime: true,
          extendInfo: {
            NSMicrophoneUsageDescription: true, // 请允许本程序访问您的麦克风
            NSCameraUsageDescription: true // 请允许本程序访问您的摄像头
          }
        }
        // options placed here will be merged with default configuration and passed to electron-builder
      },
      nodeIntegration: false,
      externals: ['ffi-napi', 'ref-napi'],
      mainProcessFile: 'src/main/background.js',
      mainProcessWatch: ['src/main/**/*']
    }
  }
});
