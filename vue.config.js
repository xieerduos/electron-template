const {defineConfig} = require('@vue/cli-service');
const useCrypto = require('./crypto.js');
const path = require('path');

useCrypto();

const name = 'ETL';

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
      cache: false,
      builderOptions: {
        // electronDist: 'avr_electron_6.1.12',
        // afterSign: './avr_scripts/after-sign.js',
        appId: 'com.ffffee.www',
        icon: path.join(__dirname, 'public/icons/win/icon.ico'),
        productName: name,
        // eslint-disable-next-line no-template-curly-in-string
        artifactName: name.toLowerCase() + '-${os}-${version}.${ext}',
        copyright: 'Copyright © 2023 李钟意 All rights reserved.',
        directories: {
          // output: "./dist_electron/${platform}/${arch}/"
        },
        extraResources: [],
        win: {
          icon: path.join(__dirname, 'public/icons/win/icon.ico'),
          // target: [
          //   {
          //     target: 'msi',
          //     arch: ['x64']
          //   }
          // ],
          verifyUpdateCodeSignature: false
        },
        msi: {
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
          runAfterFinish: false,
          oneClick: true,
          perMachine: true,
          shortcutName: name
        },
        publish: [
          {
            provider: 'generic',
            channel: 'alpha',
            url: ''
          }
        ],
        asarUnpack: ['**\\*.node', 'sdk', 'public'],
        mac: {
          category: name,
          hardenedRuntime: true,
          extendInfo: {
            NSMicrophoneUsageDescription: true, // 请允许本程序访问您的麦克风
            NSCameraUsageDescription: true // 请允许本程序访问您的摄像头
          }
        }
      },
      nodeIntegration: false,
      externals: ['ffi-napi', 'ref-napi'],
      mainProcessFile: 'src/main/background.js',
      mainProcessWatch: ['src/main/**/*']
    }
  }
});
