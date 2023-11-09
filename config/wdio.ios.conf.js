const path = require('path');
const { config } = require('./wdio.shared.conf');

config.port = 4723;


config.specs = [
    "./test/specs/ios/01_authorization_splash_tests.js"
];

config.capabilities = [
    {
   "appium:platformName": "Android", // or "iOS"
   "appium:platformVersion": "11.0",
   "appium:deviceName": "TestDevice", // or "iPhone Simulator"
   "appium:automationName": "UIAutomator2", // or "XCUITest"
   "appium:app": path.join(process.cwd(), "./app/android/ForaMobileAndroid-1.38.7-google-mtest-fora.apk"),
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

