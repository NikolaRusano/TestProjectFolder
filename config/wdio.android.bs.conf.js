const { config } = require('./wdio.shared.conf');
const RpService = require("wdio-reportportal-service");

config.user = 'mrusanov_WP5GC3';
config.key = '3V5pqxaxwKycyCnzV16q';

config.services = [];
config.services.push('browserstack',  [RpService, {}]);


config.specs = [
    "./../test/specs/android/01_authorization_splash_tests.js"
];

config.capabilities = [
    {
        "platformName": "Android",
        "appium:platformVersion" : "12.0",
        "appium:deviceName" : "Google Pixel 6",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://c14b9de629a65de8e9963f963c144fff515a027d",
        "appium:appPackage": "ua.fora.android.mtest",
        //"appium:appActivity": "ua.fora.android.ui.activity.SplashActivity",
        "appium:autoGrantPermission": true,
        "appium:unicodeKeyboard": true,
    }
];

exports.config = config;

