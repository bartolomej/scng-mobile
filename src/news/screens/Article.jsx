import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


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
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{article.title}</Text>
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
    fontWeight: '500',
    textAlign: 'center'
  },
  titleWrapper: {
    padding: 20
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