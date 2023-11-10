const { config } = require('./wdio.shared.conf');
const RpService = require("wdio-reportportal-service");

config.user = 'user_name';
config.key = 'USErkeyuserkeyuserkey';

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
   "appium:app": "bs://1b09421e5db87a2875b2c57fe0d88c9bca1e024e",
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

