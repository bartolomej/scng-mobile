import React from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux'


class Notification extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Notification screen</Text>
      </View>
    )
  }
}

export default connect()(Notification);