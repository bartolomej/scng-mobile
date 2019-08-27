import {createStackNavigator, createAppContainer} from "react-navigation";

import scheduleReducer from './reducers/schedule';
import ScheduleScreen from './screens/Schedule';
import {fetchSchedule} from './actions';
import WebScreen from "../views/Web";

export const navigation = createAppContainer(
  createStackNavigator({
    Schedule: ScheduleScreen,
    Web: WebScreen,
  }, {
    //headerMode: "none",
  })
);

export const rootReducer = scheduleReducer;

export const fetchState = dispatch => fetchSchedule(dispatch);