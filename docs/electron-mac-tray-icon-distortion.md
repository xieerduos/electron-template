# Electron Mac 系统托盘图标失真问题

我们使用 `electron-icon-builder` 方式生成的 electron 图标

```bash
electron-icon-builder --input=./public/logo.png --output=./public/
```

例如下面：

```txt
16x16.png
24x24.png
32x32.png
48x48.png
64x64.png
```

把上面的内容修改为下面的形式就可以了

```txt
icon.png
icon@1.5.png
icon@2.png
icon@3.png
icon@4.png
```

系统托盘使用的地方

```js
const iconPath = process.platform === 'win32' ? 'win/icon.ico' : 'png/icon.png';

const tray = new Tray(path.join(__static, `icons/${iconPath}`));
```

参考地址： https://www.electronjs.org/zh/docs/latest/api/native-image#%E9%AB%98%E5%88%86%E8%BE%A8%E7%8E%87
