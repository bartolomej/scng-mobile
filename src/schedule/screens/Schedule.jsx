import React from 'react'
import { View, RefreshControl, ScrollView } from 'react-native';
import {isIphoneX, getStatusBarHeight} from 'react-native-iphone-x-helper'
import Icon from "react-native-vector-icons/Feather";
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import moment from 'moment';
import {host} from '../../../app.json';

import LessonCard from '../views/LessonCard';
import {fetchSchedule} from "../actions";
import Timetable from '../views/Timetable';
import Message from '../../views/Message';
import parseError from '../../errors';
import TouchableOpacity from "react-native-gesture-handler/touchables/TouchableOpacity";


class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: this.getSelectedDay(),
      selectedWeek: 0,
      weekFetchPeriod: 3
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerMode: 'none',
      headerTitle: 'Urnik',
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToWeb')()}}>
          <Icon2 name="web" size={22} color={'black'} />
        </TouchableOpacity>
      ),
    };
  };

  componentDidMount() {
    this.setNavigationState();
  }

  setNavigationState() {
    this.props.navigation.setParams({
      goToWeb: () => {
        this.props.navigation.navigate('Web', {
          href: `${host}/schedule/${this.props.settings.selectedClass.value}/html`,
          theme: this.props.theme
        });
      },
      theme: this.props.theme
    });
  }

  onRefresh = () => {
    fetchSchedule(
      this.props.dispatch,
      this.props.settings.selectedClass.value,
      this.state.weekFetchPeriod
    );
  };

  getSelectedDay = () => {
    if (moment().weekday() === 0 || moment().weekday() === 6) {
      return 0;
    }
    return moment().weekday()-1;
  };
  
  parseTimetableData = (schedule, week) => {
    let dates = [];
    for (let i = 0; i < schedule[week].length; i++) {
      dates.push(schedule[week][i].date);
    }
    return dates;
  };

  render() {
    const schedule = this.props.schedule;
    const {selectedWeek, selectedDay} = this.state;

    if (
      this.props.settings.selectedClass.value === '...' ||
      this.props.settings.selectedSchool.value === '...' ||
      this.props.settings.selectedGroup.value === '...'
    ) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.schedule.isLoading}
              onRefresh={this.onRefresh}/>
          }>
          <Message
            title={'Opozorilo'}
            description={'Nastavite solo, razred in skupino v nastavitvah aplikacije'}
            image={<Icon name="settings" size={120} color={'black'} />}/>
        </ScrollView>
      )
    }

    if (schedule.error) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.schedule.isLoading}
              onRefresh={this.onRefresh}/>
          }>
          <Message
            title={parseError(schedule.error).title}
            description={parseError(schedule.error).description}
            image={parseError(schedule.error).image}/>
        </ScrollView>
      )
    }

    if (schedule.timetable.length === 0) {
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.schedule.isLoading}
              onRefresh={this.onRefresh}/>
          }>
          <Message
            title={'Ni najdenega urnika'}
            description={'Osvezite prikaz ali ponovno zazenite aplikacijo'}
            image={<Icon1 name="alert-triangle" size={120} color={'black'} />}/>
        </ScrollView>
      )
    }

    return (
      <View style={{flex: 1}}>
        {schedule.timetable.length > 0 && (
          <Timetable
            dates={this.parseTimetableData(this.props.schedule.timetable, this.state.selectedWeek)}
            selectedDay={this.state.selectedDay}
            selectedWeek={this.state.selectedWeek}
            onDayChange={selectedDay => this.setState({selectedDay})}
            onWeekChange={selectedWeek => {
              console.log('selectedWeek: ', selectedWeek);
              if (selectedWeek < this.state.weekFetchPeriod && selectedWeek >= 0) {
                this.setState({selectedWeek})
              }
            }}/>
        )}
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.props.schedule.isLoading}
              onRefresh={this.onRefresh}/>
          }>
          {schedule.timetable[selectedWeek] === undefined ||
          !schedule.timetable[selectedWeek][selectedDay].lessons && (
            <Message
              title={'Ni urnika !'}
              description={'V primeru zmote obvestite razvijalce.'}
              image={<Icon1 name="alert-triangle" size={120} color={'black'} />}/>
          )}
          {schedule.timetable[selectedWeek].length === 5 &&
          schedule.timetable[selectedWeek][selectedDay].lessons !== undefined &&
          schedule.timetable[selectedWeek][selectedDay].lessons.map((ele, index) => {
            const group = () => ele.groups.length > 1 ? this.props.settings.selectedGroup.value : 0;
            if (ele.groups.length === 0) {
              return null;
            }
            return (
              <LessonCard
                key={index}
                periodStart={ele.groups[group()].start}
                periodEnd={ele.groups[group()].end}
                teacherName={ele.groups[group()].teacher}
                fullName={ele.groups[group()].fullName}
                shortName={ele.groups[group()].shortName}
                displayLine={index+2 !== schedule.timetable[selectedWeek][selectedDay].lessons.length}
                classRoom={ele.groups[group()].classRoom}/>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

export default connect(state => ({
  schedule: state.schedule,
  settings: state.settings
}))(Schedule);