import {combineReducers} from 'redux';
import {createAppContainer, createStackNavigator} from "react-navigation";

import NotificationScreen from "./screens/Notification";
import SettingsScreen from "./screens/Settings";
import notificationReducer from "./reducers/notification";
import settingsReducer from "./reducers/settings";
import {fetchNotifications, fetchSchools} from './actions';


export const navigation = createAppContainer(
  createStackNavigator({
    Settings: SettingsScreen,
    Notification: {
      screen: NotificationScreen,
      mode: 'modal',
      headerMode: 'none'
    },
  })
);

export const rootReducer = combineReducers({
  notification: notificationReducer,
  settings: settingsReducer
});

export const fetchState = dispatch => {
  fetchSchools(dispatch);
  fetchNotifications(dispatch);
};