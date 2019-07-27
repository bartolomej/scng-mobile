import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default ({title, date, description, onClick, style, displayLine = true}) => {
  return (
    <View>
      <TouchableOpacity onPress={onClick} style={[styles.container, style]}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{description.substring(0, 80)} ...</Text>
        </View>
      </TouchableOpacity>
      {displayLine && <View style={styles.containerStyle}>
        <View style={styles.dividerStyle} />
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  description: {
    fontSize: 13,
    fontStyle: 'italic'
  },
  descriptionWrapper: {
    paddingTop: 5,
    paddingBottom: 5
  },
  containerStyle: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  dividerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(220,220,223)',
  },
});