import {createStackNavigator, createAppContainer} from "react-navigation";

import scheduleReducer from './reducers/schedule';
import ScheduleScreen from './screens/Schedule';
import {fetchSchedule} from './actions';

export const navigation = createAppContainer(
  createStackNavigator({
    Schedule: ScheduleScreen,
  }, {
    headerMode: "none",
  })
);

export const rootReducer = scheduleReducer;

export const fetchState = dispatch => fetchSchedule(dispatch);