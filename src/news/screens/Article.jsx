import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View style={styles.container}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.content}</Text>
      </View>
    )
  }
}

export default connect()(Article);


const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic'
  }
});