const { config } = require('./wdio.shared.conf');
const RpService = require("wdio-reportportal-service");

config.user = 'mrusanov_WP5GC3';
config.key = '3V5pqxaxwKycyCnzV16q';

config.services = [];
config.services.push('browserstack',  [RpService, {}]);


config.specs = [
    "./../test/specs/ios/01_authorization_splash_tests.js"
];

config.capabilities = [
    {
   "appium:platformName": "Android", // or "iOS"
   "appium:platformVersion": "11.0",
   "appium:deviceName": "TestDevice", // or "iPhone Simulator"
   "appium:automationName": "UIAutomator2", // or "XCUITest"
   "appium:app": "bs://c14b9de629a65de8e9963f963c144fff515a027d",
   "appium:appPackage": "ua.fora.android.mtest",
   "appium:appActivity": "ua.fora.android.ui.activity.SplashActivity",
   "appium:unicodeKeyboard": true,
   "appium:enableVNC": true,
   "appium:noReset": true,
   "appium:autoGrantPermissions": true,
   "appium:autoAcceptAlerts": true,
   "appium:nativeWebScreenshot": true,
   "appium:gpsEnabled": true,
   }
];
   
exports.config = config;

