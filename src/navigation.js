import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// TODO: implement react-native-vector-icons
// import Icon from "react-native-vector-icons/FontAwesome";
/*navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="newspaper-o" size={22} color={tintColor} />
    )
  }*/

import { navigation as newsNavigation } from "./news/index";
import { navigation as scheduleNavigation } from "./schedule/index";
import { navigation as settingsNavigation } from "./settings/index";


const bottomTabNavigation = createBottomTabNavigator(
  {
    Novice: {
      screen: newsNavigation,
    },
    Urnik: {
      screen: scheduleNavigation,
    },
    Vec: {
      screen: settingsNavigation,
    },
  }
);


export default createAppContainer(bottomTabNavigation);