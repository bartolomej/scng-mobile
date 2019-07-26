import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default ({title, date, description, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.description}>{description.substring(0, 80)} ...</Text>
      </View>
      <View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  titleWrapper: {
    padding: 15
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic'
  },
  descriptionWrapper: {
    padding: 5
  },
  date: {
    fontSize: 10,
    fontWeight: '300',
  },
  dateWrapper: {

  }
});