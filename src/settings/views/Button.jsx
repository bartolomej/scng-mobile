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
    width: 140,
    height: 45,
    margin: 20,
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center'
  }
});