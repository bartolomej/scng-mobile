import React from 'react'
import { ScrollView, Text, TouchableOpacity, Platform, RefreshControl } from 'react-native';
import { connect } from 'react-redux'
import {
  SettingsDividerShort,
  SettingsDividerLong,
  SettingsEditText,
  SettingsCategoryHeader,
  SettingsSwitch,
  SettingsPicker
} from "react-native-settings-components";

import {fetchSchools, fetchClasses} from "../actions";
import {changeSelectedClass, changeSelectedSchool} from "../actions";
import {fetchNews} from "../../news/actions";


class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      school: null,
      classes: null
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Vec',
      headerRight: (
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {navigation.getParam('goToNotification')()}}>
          <Text>N</Text>
        </TouchableOpacity>
      ),
    };
  };

  async componentDidMount() {
    await this.getSchools();
    this.props.navigation.setParams({
      goToNotification: () => {
        this.props.navigation.navigate('Notification');
      }
    });
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
    const {isLoading, selectedSchool, selectedClass} = this.props.settings.settings;
    return (
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={this.onRefresh}
          />
        }>
        <SettingsCategoryHeader
          title={"Nastavitve"}
          textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
        />
        <SettingsDividerShort />
        <SettingsPicker
          title="Sola"
          dialogDescription={"Izberi solo."}
          options={this.state.schools}
          onValueChange={async value => {
            await this.getClasses(value);
            this.props.dispatch(changeSelectedSchool(value));
          }}
          value={selectedSchool}
          styleModalButtonsText={{ color: colors.monza }}
        />
        <SettingsDividerShort />
        <SettingsPicker
          title="Razred"
          dialogDescription={"Izberi razred."}
          options={this.state.classes}
          onValueChange={async value => {
            this.props.dispatch(changeSelectedClass(value))
          }}
          value={selectedClass}
          styleModalButtonsText={{ color: colors.monza }}
        />
        <SettingsCategoryHeader
          title={"Drugo"}
          textStyle={Platform.OS === "android" ? { color: colors.monza } : null}
        />
        <SettingsDividerShort />
      </ScrollView>
    )
  }
}

export default connect(state => ({settings: state.settings}))(Settings);


const colors = {
  white: "#FFFFFF",
  monza: "#C70039",
  switchEnabled: "#C70039",
  switchDisabled: "#efeff3",
  blueGem: "#27139A",
};