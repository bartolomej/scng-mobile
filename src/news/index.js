import { combineReducers } from 'redux';
import {createStackNavigator, createAppContainer} from "react-navigation";

import newsReducer from './reducers/news';
import notificationReducer from './reducers/notification';
import NotificationScreen from './screens/Notification';
import NewsScreen from './screens/News';

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