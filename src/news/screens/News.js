import React from 'react'
import { View, Text } from 'react-native';
import { connect } from 'react-redux'


const News = ({dispatch}) => {
  return (
    <View>
      <Text>News screen test</Text>
    </View>
  )
};

export default connect()(News);