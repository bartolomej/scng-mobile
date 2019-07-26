import React from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux'


const Notification = ({dispatch}) => {
  return (
    <View>
      <Text>Notification screen</Text>
    </View>
  )
};

export default connect()(Notification);