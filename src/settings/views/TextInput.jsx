import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';


export default ({placeholder, description, onChange, value, multiline = false, style = {}}) => {
  return (
    <View style={[styles.container, style]}>
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
    height: 45,
    padding: 10,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 20
  },
  description: {

  }
});