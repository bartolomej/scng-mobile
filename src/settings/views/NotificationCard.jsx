import React from 'react';
import moment from 'moment';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Line from '../../views/HorizontalLine';


export default ({title, description, date, displayTopLine = true, displayBottomLine = true}) => {
  let duration = moment.duration(moment().diff(moment(date)));
  let days = Math.round(duration.asDays());
  return (
    <View>
      {displayTopLine && <Line/>}
      <TouchableOpacity style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: '500'}}>{title}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.date}>{days} {days > 1 ? 'dni' : 'dan'} nazaj</Text>
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
    margin: 16
  },
  date: {
    color: 'grey',
    textAlign: 'right'
  }
});