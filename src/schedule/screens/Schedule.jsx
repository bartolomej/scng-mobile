import React from 'react'
import { RefreshControl, ScrollView } from 'react-native';
import { connect } from 'react-redux'

import LessonCard from '../views/LessonCard';
import {fetchSchedule} from "../actions";


class Schedule extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Urnik',
    };
  };

  componentDidMount() {
    fetchSchedule(this.props.dispatch);
  }

  onRefresh = () => {
    fetchSchedule(this.props.dispatch);
  };

  render() {
    const schedule = this.props.schedule.schedule;
    console.log(this.props);
    return (
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={this.props.schedule.isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        {schedule !== null && schedule.lessons.map((ele, index) => {
          if (ele.groups.length === 0) return null;
          return <LessonCard
            key={index}
            periodStart={ele.groups[0].start}
            periodEnd={ele.groups[0].end}
            teacherName={ele.groups[0].teacher}
            shortName={ele.groups[0].shortName}
            classRoom={ele.groups[0].classRoom}/>
        })}
      </ScrollView>
    )
  }
}

export default connect(state => ({schedule: state.schedule}))(Schedule);