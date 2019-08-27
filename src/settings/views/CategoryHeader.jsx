import React, { Component } from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

const style = StyleSheet.create({
  defaultTitleStyle: {
    borderWidth: 0,
    fontWeight: '300',
    color: 'grey',
    fontSize: 13,
    padding: 16,
    paddingTop: 16,
    paddingBottom: 4,
  },
});

export default ({title, titleProps, titleStyle}) => {
  return (
    <View style={{}}>
      <Text
        {...titleProps}
        style={[style.defaultTitleStyle, titleStyle]}
      >
        {title.toUpperCase()}
      </Text>
    </View>
  )
}