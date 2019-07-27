# SCNG Mobile App


### Project structure
```
 +-- android            -> android native code
 +-- ios                -> ios native code
 +-- src
 |   +-- news           -> news module
 |   +-- ...            -> more modules
 |   +-- App.js         -> app root
 |   +-- navigation.js  -> navigation root (wires module navigation together)
 |   +-- store.js       -> redux store root (wires module reducers together)
 ``` 
 
 Code is organised into modules by feature.

 
 #### Example module index file
 Every module must include index.js file that 
 provides public API for high level app components (store.js, navigation.js,..).
 
 ```javascript
 // example index.js file
 
export const navigation = createAppContainer(
  createStackNavigator({
    News: NewsScreen,
    Notification: {
      screen: NotificationScreen,
      mode: 'modal',
      headerMode: 'none'
    }
  })
);

export const rootReducer = combineReducers({
  news: newsReducer,
  notifications: notificationReducer
});
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
 - [ ] integrate react-native-vector-icons library
 - [ ] integrate redux-persist library
 - [ ] add intro guides screen

### Useful resources
- debugging (https://facebook.github.io/react-native/docs/debugging)

