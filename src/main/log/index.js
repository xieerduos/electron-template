const electronLog = require('electron-log');
const {app} = require('electron');
const path = require('path');

const log = electronLog.create('main-process');

log.transports.file.resolvePath = () => path.join(app.getPath('userData'), 'logs/main.log');
log.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}';

log.transports.file.level = true;
log.transports.console.level = true;

module.exports = log;
