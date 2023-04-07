/**
 * 解决node版本过高打包错误问题
 */

/** *
 * -  Bundling main process...node:internal/crypto/hash:71
  this[kHandle] = new _Hash(algorithm, xofLen);        
                  ^
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (D:\Desktop\2-electron-video\node_modules
      \vue-cli-plugin-electron-builder\node_modules\webpack\lib\util\createHash.js:135:53)
    at NormalModule._initBuildHash (D:\Desktop\2-electron-video\node_modules\
      vue-cli-plugin-electron-builder\node_modules\webpack\lib\NormalModule.js:417:16)
 */

// github issues https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/1885#issuecomment-1316735840

const crypto = require('crypto');

module.exports = function useCrypto() {
  /**
   * md4 algorithm is not available anymore in NodeJS 17+ (because of lib SSL 3).
   * In that case, silently replace md4 by md5 algorithm.
   */
  try {
    crypto.createHash('md4');
  } catch (e) {
    console.warn('crypto.js: Crypto "md4" is not supported anymore by this Node version');
    const origCreateHash = crypto.createHash;
    crypto.createHash = (alg, opts) => {
      return origCreateHash(alg === 'md4' ? 'md5' : alg, opts);
    };
  }
};
