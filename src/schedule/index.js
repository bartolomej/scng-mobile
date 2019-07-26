import { combineReducers } from 'redux';
import {createStackNavigator, createAppContainer} from "react-navigation";

import scheduleReducer from './reducers/schedule';
import ScheduleScreen from './screens/Schedule';

export const navigation = createAppContainer(
  createStackNavigator({
    Schedule: ScheduleScreen,
  })
);

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
});