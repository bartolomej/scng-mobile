import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';

import {postFeedback} from "../actions";


class Information extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        borderBottomWidth: 0
      },
      headerTitle: 'Informacije',
    };
  };

  render() {
    const {notifications, isLoading, error} = this.props.notification;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hejla!</Text>
          <Text style={styles.description}>Si ustvarjalen? Rad razvijas ideje ali pa jih delis z drugimi? Pomagaj pri razvoju in izboljsavi nase aplikacije.</Text>
          <Text style={styles.description}>Lahko nam pomagas z razvojem na Githubu, ali pa prispevas kakrsne koli povratne informacije in ideje tukaj!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {

  },
  formContainer: {

  },
  title: {
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  description: {
    padding: 10,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'left'
  }
});

export default connect(state => ({notification: state.settings.notification}))(Information);