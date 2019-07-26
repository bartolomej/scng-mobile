import React from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux'


class Schedule extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Schedule screen</Text>
      </View>
    )
  }
}

export default connect()(Schedule);