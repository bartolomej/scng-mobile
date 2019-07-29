import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';


export default ({placeholder, description, onChange, value, multiline = false}) => {
  return (
    <View style={styles.container}>
      {description.length > 0 && <Text style={styles.description}>{description}</Text>}
      <TextInput
        multiline={multiline}
        style={[styles.input, (multiline ? {height: 100} : {})]}
        placeholder={placeholder}
        onChangeText={value => onChange(value)}
        value={value}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    height: 40,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15
  },
  description: {

  }
});