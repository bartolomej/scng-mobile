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
        <View
          style={{
            flex: 0.4,
            borderLeftWidth: 1,
            borderLeftColor: 'grey',
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