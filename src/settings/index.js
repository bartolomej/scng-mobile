import {createAppContainer, createStackNavigator} from "react-navigation";

import NotificationScreen from "./screens/Notification";
import SettingsScreen from "./screens/Settings";
import notificationReducer from "../news/reducers/news";
// TODO: add settings reducer
// import settingsReducer from "./reducers/settings";

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

export const rootReducer = notificationReducer;