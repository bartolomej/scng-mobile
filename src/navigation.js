import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from 'react-native-vector-icons/Feather';
import React from 'react';

import { navigation as newsNavigation } from "./news/index";
import { navigation as scheduleNavigation } from "./schedule/index";
import { navigation as settingsNavigation } from "./settings/index";


const bottomTabNavigation = createBottomTabNavigator(
  {
    Novice: {
      screen: newsNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper-o" size={22} color={tintColor} />
        )
      }
    },
    Urnik: {
      screen: scheduleNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar" size={22} color={tintColor} />
        )
      }
    },
    Vec: {
      screen: settingsNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon2 name="more-horizontal" size={22} color={tintColor} />
        )
      }
    },
  }
);


export default createAppContainer(bottomTabNavigation);