import React from 'react';
import {View, StyleSheet} from 'react-native';


export default ({color = 'lightgrey'}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={[styles.dividerStyle, {backgroundColor: color}]} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dividerStyle: {
    width: '95%',
    height: '100%',
  }
});