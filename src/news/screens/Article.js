import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux'


class Article extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Clanek',
    };
  };

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