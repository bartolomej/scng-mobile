import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import moment from 'moment';


export default ({periodStart, periodEnd, shortName, classRoom, teacherName, group}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text>{moment(periodStart).format('HH:mm')}</Text>
        <Text>{moment(periodEnd).format('HH:mm')}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>{shortName}</Text>
        <Text>{classRoom}</Text>
        <Text>{teacherName}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  rightContainer: {
    flex: 2,
    textAlign: 'center'
  }
});