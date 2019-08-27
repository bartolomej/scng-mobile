import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import moment from 'moment';

import Line from '../../views/HorizontalLine';


export default ({periodStart, periodEnd, shortName, fullName, classRoom, teacherName, group, displayLine = true}) => {
  let isCurrent = moment().isSameOrAfter(moment(periodStart)) && moment().isSameOrBefore(moment(periodEnd));
  return (
    <View style={isCurrent ? {backgroundColor: 'orange'} : {}}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.fromHour}>{moment(periodStart).format('HH:mm')}</Text>
          <Text style={styles.toHour}>{moment(periodEnd).format('HH:mm')}</Text>
        </View>
        <View
          style={{
            flex: 0.4,
            borderLeftWidth: 1,
            borderLeftColor: 'orange',
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.fullName}>{fullName}</Text>
          {teacherName.length > 0 && classRoom.length > 0 &&
          <View style={styles.bottomTextWrapper}>
            <Text style={styles.textDetails}>{teacherName}, {classRoom}</Text>
          </View>}
        </View>
      </View>
      {displayLine && <Line/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center'
  },
  rightContainer: {
    flex: 4,
    textAlign: 'center',
    justifyContent: 'center'
  },
  bottomTextWrapper: {
    paddingTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textDetails: {
    textAlign: 'right',
    color: 'grey'
  },
  fromHour: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  toHour: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
  },
  fullName: {
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left'
  }
});