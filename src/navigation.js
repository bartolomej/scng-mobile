import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { navigation as newsNavigation } from "./news/index";
// TODO: implement react-native-vector-icons
// import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";


const bottomTabNavigation = createBottomTabNavigator(
  {
    Novice: {
      screen: newsNavigation,
      /*navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper-o" size={22} color={tintColor} />
        )
      }*/
    },
  }
);


export default createAppContainer(bottomTabNavigation);