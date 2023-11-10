const path = require('path');
const { config } = require('./wdio.shared.conf');
const RpService = require("wdio-reportportal-service");

config.port = 4723;

config.services = [];
config.services.push('appium',  [RpService, {}]);


config.specs = [
    "./../test/specs/android/01_authorization_splash_tests.js"
];

config.capabilities = [
    {

        // capabilities for local Appium web tests on an Android Emulator
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

