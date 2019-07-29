import React from 'react'
import { View, RefreshControl, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { connect } from 'react-redux'
import moment from 'moment';

import LessonCard from '../views/LessonCard';
import {fetchSchedule} from "../actions";
import Timetable from '../views/Timetable';
import Message from '../../Message';
import parseError from '../../errors';


class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Urnik',
    };
  };

  componentDidMount() {
    const {selected} = this.parseTimetableData(this.props.schedule.timetable);
    this.setState({selected})
  }

  onRefresh = () => {
    fetchSchedule(this.props.dispatch);
  };
  
  parseTimetableData = schedule => {
    let dates = [];
    let selected = 0;
    for (let i = 0; i < schedule.length; i++) {
      dates.push(schedule[i].date);
      let diff = moment(schedule[i].date).diff(moment(), 'days');
      if (diff === 0) {
        selected = i;
      }
    }
    return {dates, selected};
  };

  render() {
    const schedule = this.props.schedule;
    console.log(this.state);
    return (
      <View style={{flex: 1}}>
        {schedule.timetable.length > 0 && (
          <Timetable
            dates={this.parseTimetableData(this.props.schedule.timetable).dates}
            selected={this.state.selected}
            onDayChange={selected => this.setState({selected})}/>
        )}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.schedule.isLoading}
              onRefresh={this.onRefresh}/>
          }>
          {schedule.error && schedule.timetable.length === 0 && (
            <Message
              title={parseError(schedule.error).title}
              description={parseError(schedule.error).description}
              image={parseError(schedule.error).image}/>
          )}
          {schedule.timetable.length > 0 &&
          schedule.timetable[this.state.selected].lessons.map((ele, index) => {
            if (ele.groups.length === 0) return null;
            return <LessonCard
              key={index}
              periodStart={ele.groups[0].start}
              periodEnd={ele.groups[0].end}
              teacherName={ele.groups[0].teacher}
              fullName={ele.groups[0].fullName}
              shortName={ele.groups[0].shortName}
              displayLine={index+2 !== schedule.timetable[this.state.selected].lessons.length}
              classRoom={ele.groups[0].classRoom}/>
          })}
        </ScrollView>
      </View>
    )
  }
}

export default connect(state => ({schedule: state.schedule}))(Schedule);