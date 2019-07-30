import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Platform, RefreshControl } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/Entypo";
import { connect } from 'react-redux'

import Line from '../../views/HorizontalLine';
import CategoryHeader from '../views/CategoryHeader';
import {fetchSchools, fetchClasses, setTheme} from "../actions";
import {changeSelectedClass, changeSelectedSchool} from "../actions";
import NotificationCard from '../views/NotificationCard';
import {fetchNotifications} from "../actions";
import ValuePicker from '../views/ValuePicker';
import ValueSwitch from '../views/ValueSwitcher';


class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      classes: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        borderBottomWidth: 0
      },
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToNotification')()}}>
          <Icon name="information" size={22} color={'black'} />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToReport')()}}>
          <Icon name="chat-processing" size={22} color={'black'} />
        </TouchableOpacity>
      ),
    };
  };

  async componentDidMount() {
    this.props.navigation.setParams({
      goToNotification: () => {
        this.props.navigation.navigate('Notification');
      },
      goToReport: () => {
        this.props.navigation.navigate('Report');
      }
    });
    await this.getSchools();
  }

  onRefresh = async () => {
    await this.getSchools();
    fetchNotifications(this.props.dispatch);
  };

  getSchools = async () => {
    const parseSchools = schools => (
      schools.map(s => ({label: s.fullName, value: s.id}))
    );
    let s = parseSchools(await fetchSchools(this.props.dispatch));
    this.setState({schools: s});
  };

  getClasses = async (id) => {
    const parseClasses = classes => (
      classes.map(s => ({label: s.name, value: s.id}))
    );
    let c = parseClasses(await fetchClasses(this.props.dispatch, id));
    this.setState({classes: c});
  };

  render() {
    const {selectedSchool, selectedClass} = this.props.settings;
    const {notifications} = this.props.notification;
    return (
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={this.props.settings.isLoading || this.props.notification.isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        <CategoryHeader
          title={"Nastavitve"}
          titleStyle={{ color: 'lightgrey' }}
        />
        <Line/>
        <ValuePicker
          displayTopLine={false}
          displayBottomLine={false}
          items={this.state.schools}
          titleColor='white'
          backgroundColor='orange'
          selectionColor = 'orange'
          listTextColor = 'black'
          closeButton={() => <Icon1 name="cross" size={22} color={'white'} />}
          onValueChange={async (value, label) => {
            this.props.dispatch(changeSelectedSchool(value, label));
            await this.getClasses(value);
          }}
          value={selectedSchool.label}
          title={'Sola'}/>
        <ValuePicker
          displayTopLine={true}
          displayBottomLine={false}
          items={this.state.classes}
          closeButton={() => <Icon1 name="cross" size={22} color={'white'} />}
          onValueChange={async (value, label) => {
            this.props.dispatch(changeSelectedClass(value, label))
          }}
          value={selectedClass.label}
          title={'Razred'}/>
        <ValueSwitch
          displayTopLine={true}
          displayBottomLine={false}
          title={'Dark mode'}
          onValueChange={value => value ? this.props.dispatch(setTheme('dark')) : this.props.dispatch(setTheme('light'))}
          value={this.props.settings.theme === 'dark'}/>
        <CategoryHeader
          title={"Obvestila"}
          titleStyle={{ color: 'lightgrey' }}
        />
        <Line/>
        {notifications.map((ele, index) => (
          <NotificationCard
            key={index}
            displayTopLine={false}
            displayBottomLine={index+1 !== notifications.length}
            title={ele.title}
            description={ele.description}
            displayLine={index+1 !== notifications.length}
            date={ele.date}/>
        ))}
      </ScrollView>
    )
  }
}

export default connect(state => ({
  settings: state.settings.settings,
  notification: state.settings.notification
}))(Settings);