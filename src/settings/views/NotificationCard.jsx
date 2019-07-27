import React from 'react';
import moment from 'moment';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default ({title, shortDescription, description, date}) => {
  let duration = moment.duration(moment().diff(moment(date)));
  let days = Math.round(duration.asDays());
  return (
    <TouchableOpacity style={styles.smallContainer}>
      <View>
        <View style={styles.leftInnerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightInnerContainer}>
          <Text>{shortDescription}</Text>
        </View>
      </View>
      <View>
        <Text>{days} {days > 1 ? 'days' : 'day'} ago</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  smallContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20
  },
  leftInnerContainer: {

  },
  rightInnerContainer: {
    flexDirection: 'column'
  },
  title: {
    fontWeight: '400',
  },
  subtitle: {

  },
  date: {

  }
});