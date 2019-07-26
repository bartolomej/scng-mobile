import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// TODO: implement react-native-vector-icons
// import Icon from "react-native-vector-icons/FontAwesome";

import { navigation as newsNavigation } from "./news/index";
import { navigation as scheduleNavigation } from "./schedule/index";


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
    Urnik: {
      screen: scheduleNavigation,
      /*navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper-o" size={22} color={tintColor} />
        )
      }*/
    },
  }
);


export default createAppContainer(bottomTabNavigation);