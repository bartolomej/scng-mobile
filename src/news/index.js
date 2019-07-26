import {createStackNavigator, createAppContainer} from "react-navigation";

import newsReducer from './reducers/news';
import ArticleScreen from './screens/Article';
import NewsScreen from './screens/News';

export const navigation = createAppContainer(
  createStackNavigator({
    News: NewsScreen,
    Article: {
      screen: ArticleScreen,
      mode: 'modal',
      headerMode: 'none'
    },
  })
);

export const rootReducer = newsReducer;