import React from 'react'
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from 'react-redux'
import moment from 'moment';

import {host} from '../../../app.json';
import {darkTheme, lightTheme} from '../../styles';

class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const isDark = () => navigation.getParam('theme') === 'dark';
    console.log(isDark());
    return {
      headerBackTitle: null,
      headerTintColor: isDark() ? darkTheme.PRIMARY_COLOR : lightTheme.PRIMARY_COLOR,
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: isDark() ? darkTheme.BACKGROUND_COLOR_DARK : lightTheme.BACKGROUND_COLOR_LIGHT
      },
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToWeb')()}}>
          <Icon name="web" size={22} color={isDark() ? darkTheme.PRIMARY_COLOR : lightTheme.PRIMARY_COLOR} />
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      goToWeb: () => {
        this.props.navigation.navigate('Web', {
          href: this.props.navigation.state.params.article.href
        });
      },
    });
  }

  render() {
    const article = this.props.navigation.state.params.article;

    let duration = moment.duration(moment().diff(moment(article.date)));
    let days = Math.round(duration.asDays());

    const isDark = () => this.props.theme === 'dark';

    return (
      <ScrollView style={[{flex: 1}, isDark() ? darkStyles.container : lightStyles.container]}>
        <View style={styles.titleWrapper}>
          <Text style={[styles.title, isDark() ? darkStyles.title : lightStyles.title]}>{article.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{aspectRatio: 1, width: 15, resizeMode: 'contain', marginRight: 5}}
              source={{uri: host + article.school.logo}}
            />
            <Text style={[styles.details, isDark() ? darkStyles.details : lightStyles.details]}>
              objavil {article.school.name} | {days} {days > 1 ? 'dni' : 'dan'} nazaj
            </Text>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={[styles.description, isDark() ? darkStyles.description : lightStyles.description]}>{article.content}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default connect(state => ({theme: state.settings.settings.theme}))(Article);


const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'left'
  },
  details: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'left'
  },
  titleWrapper: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 0
  },
  description: {
    fontSize: 15,
    lineHeight: 25,
    fontStyle: 'italic'
  },
  descriptionWrapper: {
    padding: 20
  }
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.BACKGROUND_COLOR_LIGHT
  },
  title: {
    color: lightTheme.PRIMARY_COLOR
  },
  details: {
    color: lightTheme.SECONDARY_LIGHT_COLOR
  },
  description: {
    color: lightTheme.PRIMARY_COLOR
  }
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: darkTheme.BACKGROUND_COLOR_DARK
  },
  title: {
    color: darkTheme.PRIMARY_COLOR,
  },
  details: {
    color: darkTheme.SECONDARY_LIGHT_COLOR
  },
  description: {
    color: darkTheme.PRIMARY_COLOR
  }
});