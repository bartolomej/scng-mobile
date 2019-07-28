import React from 'react';
import moment from 'moment';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default ({title, description, date, displayLine = true}) => {
  let duration = moment.duration(moment().diff(moment(date)));
  let days = Math.round(duration.asDays());
  return (
    <View>
      <TouchableOpacity style={styles.smallContainer}>
        <View style={styles.leftInnerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.date}>{days} {days > 1 ? 'dni' : 'dan'} nazaj</Text>
        </View>
      </TouchableOpacity>
      {displayLine && <View style={styles.containerStyle}>
        <View style={styles.dividerStyle} />
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  smallContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20
  },
  leftInnerContainer: {

  },
  rightInnerContainer: {
    flexDirection: 'column'
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {

  },
  date: {
    color: 'grey'
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