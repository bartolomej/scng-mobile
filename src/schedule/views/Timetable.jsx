import React, {useState} from 'react';
import moment from 'moment';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';


export default ({dates, selected, onDayChange}) => {

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        {dates.map((date, index) => (
          <DayIcon
            key={index}
            index={index}
            date={date}
            onClick={(index, date) => {
              onDayChange(index);
            }}
            selected={selected === index}
            current={false}/>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});

const DayIcon = ({date, onClick, selected, index}) => {
  let weekDays = ['PON', 'TOR', 'SRE', 'CET', 'PET', 'SOB', 'NED'];
  let monthDay = moment(date).date();
  let weekDay = moment(date).weekday();

  return (
    <TouchableOpacity
      style={dayStyles.container}
      onPress={() => {
        onClick(index, date);
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={selected ? dayStyles.dayTextSelected : dayStyles.dayText}>{weekDays[weekDay]}</Text>
        <Text style={selected ? dayStyles.dayNumberSelected : dayStyles.dayNumber}>{monthDay}</Text>
      </View>
    </TouchableOpacity>
  );
};

const dayStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 20,
    marginBottom: 0,
    paddingBottom: 10,
    marginTop: 5
  },
  dayNumber: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  dayNumberSelected: {
    fontSize: 20,
    color: 'orange',
    fontWeight: '600',
    textAlign: 'center'
  },
  dayText: {
    fontSize: 10,
    textAlign: 'center'
  },
  dayTextSelected: {
    color: 'orange',
    fontSize: 10,
    textAlign: 'center'
  },
  dayNumberWrapper: {}
});