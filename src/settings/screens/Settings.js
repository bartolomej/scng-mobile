import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


class Settings extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Vec',
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToNotification')()}}>
          <Text>N</Text>
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({
      goToNotification: () => {
        this.props.navigation.navigate('Notification');
      }
    });
  }

  render() {
    return (
      <View>
        <Text>Settings screen</Text>
      </View>
    )
  }
}

export default connect()(Settings);