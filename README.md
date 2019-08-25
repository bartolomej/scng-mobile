# SCNG Mobile App

### Action logging *rethink
https://github.com/react-navigation/react-navigation/issues/962
```
{
  "platform": <IOS/Android>,
  "version": <OS-version>,
  "phone_id": <unique-phone-id>,
  "timestamp": <unix>,
  "action": {
    "type": <navigation/event>,
    // TODO
  }
}
```
 
### Available Scripts

In the project directory, you can run:
 
#### `react-native run-ios`
 
Builds ios app in the development mode.<br>
You need xcode (apple dev tools) to build app for ios.

#### `react-native run-android`
 
Builds android app in the development mode.<br>
You need Android Studio configured, with emulator running in the background.
 
 ## TODO LIST
 - [ ] implement convenient error handling system
 - [ ] implement 'solska hrana' module
 - [ ] implement logger service (sends analytics data to backend)
 - [ ] feedback screen (send reviews,..)
 - [ ] contact screen (get in contact, contribute to scng apps)
 - [ ] implement consistent view components with styles
 - [x] integrate react-native-vector-icons library
 - [ ] integrate redux-persist library
 - [ ] add intro guides screen
 - [ ] add fonts and graphics
 - [ ] publish on [FDroid](https://f-droid.org/en/)

### Useful resources
- debugging (https://facebook.github.io/react-native/docs/debugging)

