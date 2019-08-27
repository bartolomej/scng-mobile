import React from 'react';
import moment from 'moment';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Line from '../../views/HorizontalLine';
import {darkTheme, lightTheme} from '../../styles';


export default ({logo, school, title, date, description, onClick, style, theme, displayLine = true}) => {
  let duration = moment.duration(moment().diff(moment(date)));
  let days = Math.round(duration.asDays());
  const isDark = () => theme === 'dark';

  return (
    <View>
      <TouchableOpacity onPress={onClick} style={[styles.container, style, isDark() ? styles.darkContainer : styles.lightContainer]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{aspectRatio: 1, width: 30, resizeMode: 'contain', justifyContent: 'center'}}
            source={{uri: logo}}
          />
          <View style={styles.innerRightContainer}>
            <View style={styles.innerTopBottomContainer}>
              <Text style={[{fontSize: 12, fontWeight: '500'}, isDark() ? styles.darkTitle : styles.lightTitle]}>{school}</Text>
              <Text style={{fontSize: 11, textAlign: 'left', color: 'grey'}}>{days} {days > 1 ? 'dni' : 'dan'} nazaj</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', marginTop: 5}}>
          <Text style={[{fontSize: 16, fontWeight: '600', paddingBottom: 5}, isDark() ? styles.darkTitle : styles.lightTitle]}>{title}</Text>
          <Text style={[{fontSize: 13, lineHeight: 16, fontStyle: 'italic'}, isDark() ? styles.darkTitle : styles.lightTitle]}>
            {description.substring(0, 100)} ...
          </Text>
        </View>
      </TouchableOpacity>
      {displayLine && <Line backgroundColor={isDark() ? darkTheme.BACKGROUND_COLOR_DARK : lightTheme.BACKGROUND_COLOR_LIGHT}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  innerRightContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  innerTopBottomContainer: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
  },
  darkContainer: {backgroundColor: darkTheme.BACKGROUND_COLOR_DARK},
  lightContainer: {backgroundColor: lightTheme.BACKGROUND_COLOR_LIGHT},
  darkTitle: {color: darkTheme.PRIMARY_COLOR},
  lightTitle: {color: lightTheme.PRIMARY_COLOR}
});