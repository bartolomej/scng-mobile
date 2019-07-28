import React from 'react';
import moment from 'moment';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default ({logo, school, title, date, description, onClick, style, displayLine = true}) => {
  let duration = moment.duration(moment().diff(moment(date)));
  let days = Math.round(duration.asDays());
  return (
    <View>
      <TouchableOpacity onPress={onClick} style={[styles.container, style]}>
        <View style={styles.leftContainer}>
          <Image
            style={{aspectRatio: 1, width: 50, resizeMode: 'contain'}}
            source={{uri: logo}}
          />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.topRightContainer}>
            <Text style={styles.schoolText}>objavil {school.toUpperCase()}</Text>
            <Text style={styles.dayText}>{days} {days > 1 ? 'dni' : 'dan'} nazaj</Text>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>{description.substring(0, 70)} ...</Text>
          </View>
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
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topRightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightContainer: {
    flex: 4,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: '500'
  },
  schoolText: {
    fontSize: 11,
  },
  dayText: {
    fontSize: 10
  },
  description: {
    fontSize: 13,
    fontStyle: 'italic'
  },
  titleWrapper: {
    paddingTop: 5,
    paddingBottom: 5
  },
  descriptionWrapper: {

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