const ffi = require('ffi-napi');
const path = require('path');
const log = require('@/main/logs/index.js');

module.exports = function useSdk() {
  try {
    // eslint-disable-next-line no-undef
    let libDllPath = path.join(__static, 'sdk', 'app1.dll');

    if (process.env.NODE_ENV !== 'development') {
      libDllPath = path.join(process.resourcesPath, 'app.asar.unpacked', 'sdk', 'app1.dll');
    }

    const kernel32 = ffi.Library('kernel32', {
      SetDllDirectoryA: ['bool', ['string']]
    });

    kernel32.SetDllDirectoryA(path.join(libDllPath, '..'));

    log.info('app1.dll 路径', libDllPath);

    const libDllObj = ffi.Library(libDllPath, {
      add: ['int', ['int', 'int']]
    });

    const result = libDllObj.add(1, 12);

    log.info('app1.dll add result', result);

    return result;
  } catch (error) {
    log.error('app2.dll error', error.message);
    return 'error';
  }
};
