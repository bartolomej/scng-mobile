import React from 'react';
import moment from 'moment';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Line from '../../views/HorizontalLine';


export default ({title, votes, date, displayTopLine = true, displayBottomLine = true}) => {
  let duration = moment.duration(moment().diff(moment(date)));
  let days = Math.round(duration.asDays());
  return (
    <View>
      {displayTopLine && <Line/>}
      <TouchableOpacity style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={{fontWeight: '500'}}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.votes}>{votes} glasov</Text>
          {/*<Text style={styles.date}>{days} {days > 1 ? 'dni' : 'dan'} nazaj</Text>*/}
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
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  votes: {
    fontWeight: '400',
    textAlign: 'right'
  },
  date: {
    color: 'grey',
    textAlign: 'right'
  },
});