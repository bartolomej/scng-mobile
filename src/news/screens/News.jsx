import React from 'react'
import { RefreshControl, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from 'react-redux'

import NewsCard from '../views/NewsCard';
import {fetchNews} from "../actions";
import {host} from '../../../app.json';

class News extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Novice',
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToWeb')()}}>
          <Icon name="web" size={22} color={'black'} />
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
      }
    });
  }

  onRefresh = () => {
    fetchNews(this.props.dispatch);
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.props.news.isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        {this.props.news.news.map((news, index) => (
          <NewsCard
            key={index}
            onClick={() => this.goToArticle(news)}
            title={news.title}
            logo={host + news.school.logo}
            school={news.school.name}
            description={news.content}
            displayLine={index+1 !== this.props.news.news.length}
            date={news.date}/>
        ))}
      </ScrollView>
    )
  }

  goToArticle = news => {
    this.props.navigation.navigate('Article', {
      article: news
    });
  }
}

export default connect(state => ({news: state.news}))(News);


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});