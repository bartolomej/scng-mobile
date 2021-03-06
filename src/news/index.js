import {createStackNavigator, createAppContainer} from "react-navigation";

import newsReducer from './reducers/news';
import ArticleScreen from './screens/Article';
import NewsScreen from './screens/News';
import WebScreen from '../views/Web';
import {fetchNews} from './actions';

export const navigation = createAppContainer(
  createStackNavigator({
    News: NewsScreen,
    Web: WebScreen,
    Article: ArticleScreen
  })
);

export const rootReducer = newsReducer;

export const fetchState = dispatch => fetchNews(dispatch);