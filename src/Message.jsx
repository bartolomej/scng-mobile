import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default ({title, description, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{image}</View>
      <View style={styles.topInnerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20
  },
  imageContainer: {
    padding: 20,
    flex: 1
  },
  topInnerContainer: {
    flex: 1,
    margin: 20
  },
  title: {
    fontSize: 20,
    margin: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  description: {
    fontSize: 15,
    textAlign: 'center'
  }
});