import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import moment from 'moment';


export default ({periodStart, periodEnd, shortName, fullName, classRoom, teacherName, group, displayLine = true}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.fromHour}>{moment(periodStart).format('HH:mm')}</Text>
          <Text style={styles.toHour}>{moment(periodEnd).format('HH:mm')}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.fullName}>{fullName}</Text>
          <View style={styles.bottomTextWrapper}>
            <Text style={styles.textDetails}>{teacherName}, {classRoom}</Text>
          </View>
        </View>
      </View>
      {displayLine && <View style={styles.containerStyle}>
        <View style={styles.dividerStyle} />
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  rightContainer: {
    flex: 3,
    textAlign: 'center'
  },
  bottomTextWrapper: {
    paddingTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textDetails: {
    textAlign: 'right'
  },
  fromHour: {
    fontSize: 15,
    fontWeight: '500',
  },
  toHour: {
    fontSize: 15,
    fontWeight: '500',
  },
  fullName: {
    paddingBottom: 2,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'left'
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