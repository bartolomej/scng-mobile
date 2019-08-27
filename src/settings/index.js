import {createAppContainer, createStackNavigator} from "react-navigation";

import InfoScreen from "./screens/Information";
import SettingsScreen from "./screens/Settings";
import ReportScreen from './screens/Report';
import settingsReducer from "./reducers/settings";
import {fetchFeatures, fetchSchools} from './actions';


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

export const rootReducer = settingsReducer;

export const fetchState = dispatch => {
  fetchSchools(dispatch);
  fetchFeatures(dispatch)
};