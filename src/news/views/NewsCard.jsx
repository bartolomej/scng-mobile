import React from 'react';
import moment from 'moment';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default ({logo, school, title, date, description, onClick, style, displayLine = true}) => {
  let duration = moment.duration(moment().diff(moment(date)));
  let days = Math.round(duration.asDays());
  return (
    <View>
      <TouchableOpacity onPress={onClick} style={[styles.container, style]}>
        <View style={{flexDirection: 'row', paddingBottom: 10}}>
          <Image
            style={{aspectRatio: 1, width: 50, resizeMode: 'contain'}}
            source={{uri: logo}}
          />
          <View style={styles.innerRightContainer}>
            <View style={styles.innerTopBottomContainer}>
              <Text style={{fontSize: 14, fontWeight: '500'}}>{title}</Text>
              <Text style={{fontSize: 10, textAlign: 'left', paddingTop: 5}}>{days} {days > 1 ? 'dni' : 'dan'} nazaj</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={{fontSize: 13, lineHeight: 16, fontStyle: 'italic'}}>{description.substring(0, 100)} ...</Text>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  innerRightContainer: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center'
  },
  innerTopBottomContainer: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
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