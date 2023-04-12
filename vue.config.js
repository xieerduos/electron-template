const {defineConfig} = require('@vue/cli-service');
const useCrypto = require('./crypto.js');
const path = require('path');

useCrypto();

const name = 'ELT';

module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/renderer/index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    settings: {
      entry: 'src/renderer/settings/main.js',
      template: 'public/settings.html',
      filename: 'settings.html'
    }
  },
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      cache: false,
      builderOptions: {
        // electronDist: 'avr_electron_6.1.12',
        // afterSign: './avr_scripts/after-sign.js',
        appId: 'com.yourappid.www',
        icon:
          process.platform === 'win32' ?
            path.join(__dirname, 'public/icons/win/icon.ico')
            : path.join(__dirname, 'public/icons/mac/icon.icns'),
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
          // target：指定要打包的目标格式，这里使用了 msi 和 nsis 两个选项，分别代表 MSI 和 NSIS 格式的安装包。
          target: ['msi', 'nsis'],
          // verifyUpdateCodeSignature 布尔值，表示是否验证更新包的数字签名。
          // 在发布应用程序更新时，为了确保更新包的完整性和安全性，通常需要对更新包进行数字签名。
          // 这个选项可以控制是否在安装更新时验证数字签名。
          // 如果设置为 false，则不验证数字签名。
          verifyUpdateCodeSignature: false
        },
        msi: {
          createDesktopShortcut: true, // 布尔值，表示是否在桌面上创建快捷方式。
          createStartMenuShortcut: true, // 布尔值，表示是否在开始菜单中创建快捷方式。
          runAfterFinish: false, // 布尔值，表示是否在安装完成后自动运行程序。
          oneClick: true, // 布尔值，表示是否启用单击安装模式。在单击安装模式下，用户只需单击一次安装程序即可开始安装。
          perMachine: true, // 布尔值，表示安装程序是否将应用程序安装为机器级别（即所有用户共享）
          shortcutName: name // 字符串，表示快捷方式的名称。
        },

        // publish 指定应用程序的发布渠道和版本。
        // 这里使用了 generic 作为发布提供者，alpha 作为版本号，url 则是指定应用程序的发布地址。
        // 这些信息将用于自动化部署和更新应用程序。
        publish: [
          {
            provider: 'generic',
            channel: 'alpha',
            url: ''
          }
        ],
        // asarUnpack：指定 asar 模块的解压设置。
        // asar 是 Electron 用来打包应用程序的一种文件格式，这个选项可以用于指定应用程序中需要解压缩的文件或目录。
        // 这里使用了一个数组，其中包含两个字符串。第一个字符串指定了需要解压缩的所有 .node 文件，第二个字符串指定了需要解压缩的两个目录 sdk 和 public。
        asarUnpack: [
          '**\\*.node',
          'sdk',
          'public',
          '**/node_modules/electron/**/*',
          '**/node_modules/electron/**/*.node'
        ],
        mac: {
          category: name, // 指定应用程序所属的分类，通常用于在 macOS Dock 中显示应用程序的图标。
          hardenedRuntime: true, // 布尔值，表示是否启用强化的 macOS 运行时保护机制。
          extendInfo: {
            // 用于指定 macOS 应用程序的扩展信息。
            // 这里指定了两个键值对，分别表示应用程序需要访问麦克风和摄像头。
            // 这些信息将在应用程序启动时显示给用户，以获得用户的授权。
            NSMicrophoneUsageDescription: true, // 请允许本程序访问您的麦克风
            NSCameraUsageDescription: true // 请允许本程序访问您的摄像头
          }
        }
      },
      preload: {
        mainWindow: 'src/main/preload/index.js',
        settingsWindow: 'src/main/preload/settings.js'
      },
      nodeIntegration: false,
      externals: ['ffi-napi', 'ref-napi'],
      mainProcessFile: 'src/main/background.js',
      mainProcessWatch: ['src/main/**/*']
    }
  }
});
