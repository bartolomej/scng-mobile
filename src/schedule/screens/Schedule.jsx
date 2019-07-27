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
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.props.schedule.isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        <LessonCard
          periodStart={'8:00'}
          periodEnd={'9:00'}
          teacherName={'B. Pregelj'}
          shortName={'UME'}
          classRoom={'E31'}/>
        <LessonCard
          periodStart={'8:00'}
          periodEnd={'9:00'}
          teacherName={'B. Pregelj'}
          shortName={'UME'}
          classRoom={'E31'}/>
        <LessonCard
          periodStart={'8:00'}
          periodEnd={'9:00'}
          teacherName={'B. Pregelj'}
          shortName={'UME'}
          classRoom={'E31'}/>
      </ScrollView>
    )
  }
}

export default connect(state => ({schedule: state.schedule}))(Schedule);