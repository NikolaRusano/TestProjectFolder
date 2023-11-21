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
   "platformName": "ios",
   "appium:platformVersion" : "14.0",
   "appium:deviceName" : "iPhone 12",
   "appium:automationName": "XCUITest",
   "appium:app": "bs://1b09421e5db87a2875b2c57fe0d88c9bca1e024e",
   "appium:appPackage": "ua.fora.android.mtest",  
   "appium:autoGrantPermission": true,
   "appium:unicodeKeyboard": true
   }
];
   
exports.config = config;

