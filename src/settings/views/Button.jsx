import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';


export default ({text, onClick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 40,
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
});