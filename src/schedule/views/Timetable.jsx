import React from 'react';
import moment from 'moment';
import Icon from "react-native-vector-icons/AntDesign";
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';


export default ({dates, selectedDay, onDayChange, selectedWeek, onWeekChange}) => {

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            let next = selectedWeek - 1;
            onWeekChange(next);
          }}>
          <Icon name="arrowleft" size={20} color={'black'} />
        </TouchableOpacity>
        {dates.map((date, index) => (
          <DayIcon
            key={index}
            index={index}
            date={date}
            onClick={(index, date) => {
              onDayChange(index);
            }}
            selected={selectedDay === index}
            current={false}/>
        ))}
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            let next = selectedWeek + 1;
            onWeekChange(next);
          }}>
          <Icon name="arrowright" size={20} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  calendarContainer: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

const DayIcon = ({date, onClick, selected, index}) => {
  let weekDays = ['PON', 'TOR', 'SRE', 'CET', 'PET'];
  let monthDay = moment(date).date();
  let weekDay = moment(date).weekday();

  return (
    <TouchableOpacity
      style={dayStyles.container}
      onPress={() => {
        onClick(index, date);
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={selected ? dayStyles.dayTextSelected : dayStyles.dayText}>{weekDays[weekDay-1]}</Text>
        <Text style={selected ? dayStyles.dayNumberSelected : dayStyles.dayNumber}>{monthDay}</Text>
      </View>
    </TouchableOpacity>
  );
};

const dayStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
    paddingBottom: 10,
    paddingTop: 5,
    justifyContent: 'center'
  },
  dayNumber: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center'
  },
  dayNumberSelected: {
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