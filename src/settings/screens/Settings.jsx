import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Platform, RefreshControl } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from "react-native-vector-icons/Entypo";
import { connect } from 'react-redux'

import Line from '../../views/HorizontalLine';
import CategoryHeader from '../views/CategoryHeader';
import {fetchSchools, fetchClasses, setTheme, changeSelectedGroup} from "../actions";
import {changeSelectedClass, changeSelectedSchool} from "../actions";
import NotificationCard from '../views/FeatureView';
import ValuePicker from '../views/ValuePicker';
import ValueSwitch from '../views/ValueSwitcher';


class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      classes: [],
      groups: [
        {label: '1. skupina', value: 1},
        {label: '2. skupina', value: 2}
      ]
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        //borderBottomWidth: 0
      },
      headerTitle: 'Vec',
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
    const {selectedSchool, selectedClass, selectedGroup} = this.props.settings;

    return (
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={this.props.settings.isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        <CategoryHeader
          title={"Nastavitve"}
          titleStyle={{color: 'grey'}}
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
          titleColor='white'
          backgroundColor='orange'
          selectionColor = 'orange'
          listTextColor = 'black'
          closeButton={() => <Icon1 name="cross" size={22} color={'white'} />}
          onValueChange={async (value, label) => {
            this.props.dispatch(changeSelectedClass(value, label))
          }}
          value={selectedClass.label}
          title={'Razred'}/>
        <ValuePicker
          displayTopLine={true}
          displayBottomLine={false}
          items={this.state.groups}
          titleColor='white'
          backgroundColor='orange'
          selectionColor = 'orange'
          listTextColor = 'black'
          closeButton={() => <Icon1 name="cross" size={22} color={'white'} />}
          onValueChange={async (value, label) => {
            this.props.dispatch(changeSelectedGroup(value, label))
          }}
          value={selectedGroup.label}
          title={'Skupina'}/>
        <ValueSwitch
          switchColor={'black'}
          bcgColor={'orange'}
          displayTopLine={true}
          displayBottomLine={false}
          title={'Dark mode'}
          onValueChange={value => value ? this.props.dispatch(setTheme('dark')) : this.props.dispatch(setTheme('light'))}
          value={this.props.settings.theme === 'dark'}/>
        <CategoryHeader
          title={"Glasovanje"}
          titleStyle={{color: 'grey'}}
        />
        <Line/>
        {this.props.features.map((ele, index) => (
          <NotificationCard
            key={index}
            displayTopLine={false}
            displayBottomLine={index+1 !== this.props.features.length}
            title={ele.title}
            votes={ele.votes}
            displayLine={index+1 !== this.props.features.length}
            date={ele.date}/>
        ))}
      </ScrollView>
    )
  }
}

export default connect(state => ({
  settings: state.settings,
  features: state.settings.features
}))(Settings);