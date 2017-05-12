# react-native
Weather consulting application with react native

### Instructions

If you have Android emulator
```
emulator -avd avd_name
```

List available avds
```
emulator -list-avds
```

### Run the app on localhost

```
react-native run-android
or
react-native start
```

_Android dev need a `local.properties` in android folder with the route of android SDK_
`sdk.dir=/Users/toni/Library/Android/Sdk`


### To run atdd test locally

Install ios and android simulators
Install appium and start the appium server for your device, please refer to:

- http://appium.io
- https://github.com/appium/appium/blob/master/README.md

## Running tests

### iOS

```
DEV=true ios=true npm run atdd
ios=true npm run atdd
```

### Android

```
DEV=true npm run atdd
npm run atdd
```

## Build for Android

from official react native doc [here](https://facebook.github.io/react-native/docs/signed-apk-android.html)

## Build for iOS

1) Get ".app" file :
```
react-native run-ios --configuration=release

```

2) The ".app" file route:

*Build/Products/Release/"<Your_Filename>.app"*

3) Convert .app to .ipa :

    a. Create folder Payload.

    b. paste .app file into Payload folder.

    c. compress the Payload folder.

    d. change the name you want and put extension as .ipa.