import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';

import Line from '../../views/HorizontalLine';


export default ({title, displayBottomLine = true, displayTopLine = true, value, onValueChange}) => {
  return (
    <View>
      {displayTopLine && <Line/>}
      <TouchableOpacity style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Switch value={value} onValueChange={onValueChange}/>
        </View>
      </TouchableOpacity>
      {displayBottomLine && <Line/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16
  },
  titleContainer: {
    flex: 1,
  },
  valueContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 14
  },
  value: {

  }
});