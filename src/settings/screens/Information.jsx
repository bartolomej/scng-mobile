import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import {fetchFeatures} from "../actions";

class Information extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Informacije',
      headerBackTitle: null,
      headerTintColor: 'black',
      headerStyle: {
        borderBottomWidth: 0
      },
    };
  };

  componentDidMount() {
    fetchFeatures(this.props.dispatch);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>Hejla! Si ustvarjalen? Rad razvijas ideje ali pa jih delis z drugimi?</Text>
          <Text style={styles.description}>Lahko pomagas z razvojem
            <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://github.com/bartolomej/scng-mobile')}> mobilne </Text>ali
            <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://github.com/bartolomej/scng-api')}> strezniske </Text>
            aplikacije, ali pa prispevas povratne informacije in ideje za nadgradnjo tukaj!</Text>
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

export default connect(state => ({
  notification: state.settings.notification,
  settings: state.settings.settings
}))(Information);