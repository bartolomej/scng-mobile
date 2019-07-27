import React from 'react'
import { ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux'

import NotificationCard from '../views/NotificationCard';
import {fetchNotifications} from "../actions";


class Notification extends React.Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    fetchNotifications(this.props.dispatch);
  }

  render() {
    const {notifications, isLoading, error} = this.props.notification;
    return (
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => fetchNotifications(this.props.dispatch)}
          />
        }>
        {notifications.map((ele, index) => (
          <NotificationCard
            key={index}
            title={ele.title}
            shortDescription={ele.shortDescription}
            description={ele.description}
            date={ele.date}/>
        ))}
      </ScrollView>
    )
  }
}

export default connect(state => ({notification: state.settings.notification}))(Notification);