import React from 'react'
import { RefreshControl, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
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
    return {
      header: null,
      headerStyle: {
        borderBottomWidth: navigation.getParam('showBorder') ? 1 : 0 // TODO: dynamically show border on scroll
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
    this.props.navigation.setParams({
      goToWeb: () => {
        this.props.navigation.navigate('Web', {
          href: 'https://www.scng.si'
        });
      },
      showBorder: this.state.showBorder
    });
  }

  onRefresh = () => {
    fetchNews(this.props.dispatch);
  };

  render() {
    const isDark = () => this.props.theme === 'dark';

    return (
      <ScrollView
        style={[styles.container, isDark() ? styles.darkContainer : styles.lightContainer]}
        onScroll={() => this.setState({showBorder: true})}
        refreshControl={
          <RefreshControl
            refreshing={this.props.news.isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        {this.props.news.error && this.props.news.articles.length === 0 && (
          <Message
            title={parseError(this.props.news.error).title}
            description={parseError(this.props.news.error).description}
            image={parseError(this.props.news.error).image}/>
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

export default connect(state => ({news: state.news, theme: state.settings.settings.theme}))(News);


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingTop: '10%'
  },
  darkContainer: {
    backgroundColor: darkTheme.BACKGROUND_COLOR_DARK
  },
  lightContainer: {
    backgroundColor: lightTheme.BACKGROUND_COLOR_LIGHT
  }
});