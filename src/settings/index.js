import {combineReducers} from 'redux';
import {createAppContainer, createStackNavigator} from "react-navigation";

import InfoScreen from "./screens/Information";
import SettingsScreen from "./screens/Settings";
import ReportScreen from './screens/Report';
import notificationReducer from "./reducers/notification";
import settingsReducer from "./reducers/settings";
import {fetchNotifications, fetchSchools} from './actions';


export const navigation = createAppContainer(
  createStackNavigator({
    Settings: SettingsScreen,
    Report: ReportScreen,
    Notification: {
      screen: InfoScreen,
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