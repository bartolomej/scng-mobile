import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import moment from 'moment';


class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Clanek',
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToWeb')()}}>
          <Text>Web</Text>
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
      }
    });
  }

  render() {
    const article = this.props.navigation.state.params.article;

    let duration = moment.duration(moment().diff(moment(article.date)));
    let days = Math.round(duration.asDays());

    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.details}>objavil {article.school.name} | {days} {days > 1 ? 'dni' : 'dan'} nazaj</Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{article.content}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default connect()(Article);


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'left'
  },
  details: {
    fontSize: 12,
    color: 'grey',
    fontStyle: 'italic',
    textAlign: 'left'
  },
  titleWrapper: {
    padding: 15
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