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
    flex: 1,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const DayIcon = ({date, onClick, selected, index}) => {
  let weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  let monthDay = moment(date).daysInMonth();
  let weekDay = moment(date).weekday();

  return (
    <TouchableOpacity
      style={dayStyles.container}
      onPress={() => {
        onClick(index, date);
      }}>
      <Text styles={selected ? dayStyles.dayTextSelected : dayStyles.dayText}>{weekDays[weekDay]}</Text>
      <View>
        <Text style={selected ? dayStyles.dayNumberSelected : dayStyles.dayNumber}>{monthDay}</Text>
      </View>
    </TouchableOpacity>
  );
};

const dayStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10
  },
  dayNumber: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  dayNumberSelected: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  dayText: {
    fontSize: 5,
    textAlign: 'center'
  },
  dayTextSelected: {},
  dayNumberWrapper: {}
});