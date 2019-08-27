import React from 'react'
import { RefreshControl, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux'

import NewsCard from '../views/NewsCard';
import Message from '../../views/Message';
import {fetchNews} from "../actions";
import {host} from '../../../app.json';
import parseError from '../../errors';
import {darkTheme, lightTheme} from '../../styles';


class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showBorder: false
    }
  }

  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    const isDark = () => navigation.getParam('theme') === 'dark';
    return {
      headerStyle: {
        //borderBottomWidth: 0,
        backgroundColor: isDark() ? darkTheme.BACKGROUND_COLOR_DARK : lightTheme.BACKGROUND_COLOR_LIGHT
      },
      headerTitle: 'Novice',
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToWeb')()}}>
          <Icon2 name="web" size={22} color={'black'} />
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    this.setNavigationState()
  }

  setNavigationState() {
    this.props.navigation.setParams({
      goToWeb: () => {
        this.props.navigation.navigate('Web', {
          href: 'https://www.scng.si',
          theme: this.props.theme
        });
      },
      theme: this.props.theme
    });
  }

  onRefresh = () => {
    fetchNews(this.props.dispatch);
  };

  render() {
    const isDark = () => this.props.theme === 'dark';

    if (this.props.news.error) {
      return (
        <ScrollView
          style={[styles.container, isDark() ? styles.darkContainer : styles.lightContainer]}
          refreshControl={
            <RefreshControl
              refreshing={this.props.news.isLoading}
              onRefresh={this.onRefresh}/>
          }>
          <Message
            title={parseError(this.props.news.error).title}
            description={parseError(this.props.news.error).description}
            image={parseError(this.props.news.error).image}/>
        </ScrollView>
      )
    }

    return (
      <ScrollView
        style={[styles.container, isDark() ? styles.darkContainer : styles.lightContainer]}
        refreshControl={
          <RefreshControl
            refreshing={this.props.news.isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        {this.props.news.articles.length === 0 && !this.props.news.isLoading && (
          <Message
            title={'Ni najdenih novic !'}
            description={'Ponovno zazenite aplikacijo ali obvestite razvijalce.'}
            image={<Icon1 name="alert-triangle" size={120} color={'black'} />}/>
        )}
        {this.props.news.articles.map((article, index) => (
          <NewsCard
            key={index}
            theme={this.props.theme}
            onClick={() => this.goToArticle(article)}
            title={article.title}
            logo={host + article.school.logo}
            school={article.school.name}
            description={article.content}
            displayLine={index+1 !== this.props.news.articles.length}
            date={article.date}/>
        ))}
      </ScrollView>
    )
  }

  goToArticle = news => {
    this.props.navigation.navigate('Article', {
      article: news,
      theme: this.props.theme
    });
  }
}

export default connect(state => ({
  news: state.news,
  theme: state.settings.theme
}))(News);


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  darkContainer: {
    backgroundColor: darkTheme.BACKGROUND_COLOR_DARK
  },
  lightContainer: {
    backgroundColor: lightTheme.BACKGROUND_COLOR_LIGHT
  }
});