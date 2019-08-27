import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LogoO from 'react-native-vector-icons/FontAwesome';
import Icon1 from "react-native-vector-icons/Entypo";
import { connect } from 'react-redux';

import TextInput from '../views/TextInput';
import ValuePicker from '../views/ValuePicker';
import Button from '../views/Button';
import {changeSelectedSchool, postFeedback} from "../actions";
import parseError from '../../errors';
import Message from '../../views/Message';


class Report extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: '...',
      description: '',
      error: null,
      success: false
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerBackTitle: null,
      headerTintColor: 'black',
      headerStyle: {
        borderBottomWidth: 0
      },
    };
  };

  submit = async () => {
    if (this.state.description.length === 0) {
      return;
    }
    const classId = this.props.settings.selectedClass;
    try {
      let res = await postFeedback(this.state.type, this.state.description, classId);
      if (res.status === 'error') {
        this.setState({error: new Error(res.message)})
      } else {
        this.setState({success: true});
      }
    } catch (e) {
      this.setState({error: e})
    }
  };

  render() {
    if (this.state.error) {
      return (
        <View style={{height: '70%'}}>
          <Message
            title={'Hvala !'}
            description={'Sporocilo je bilo uspesno poslano'}
            image={<LogoO name="envelope-o" size={120} color={'black'} />}/>
        </View>
      )
    }
    if (this.state.success) {
      return (
        <View style={{height: '70%'}}>
          <Message
            title={parseError(this.state.error).title}
            description={parseError(this.state.error).description}
            image={parseError(this.state.error).image}/>
        </View>
      )
    }
    const typeValues = [
      {label: 'napaka (bugg)', value: 'napaka'},
      {label: 'pohvala', value: 'pohvala'},
      {label: 'predlov', value: 'predlog'},
    ];
    // TODO: doesn't show text - reason: have no fuking idea
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.description}>Imas tezavo z aplikacijo ?</Text>
            <Text style={styles.description}>Imas idejo o izboljsavi ? </Text>
          </View>
          <ValuePicker
            displayTopLine={false}
            displayBottomLine={false}
            items={typeValues}
            titleColor='black'
            backgroundColor='orange'
            selectionColor='orange'
            listTextColor='black'
            closeButton={() => <Icon1 name="cross" size={22} color={'white'} />}
            onValueChange={value => this.setState({type: value})}
            value={this.state.type}
            title={'Tip prijave'}/>
          <TextInput
            description={''}
            multiline={true}
            placeholder={'Vnesi opis ...'}
            value={this.state.description}
            onChange={description => this.setState({description})}/>
          <View style={styles.buttonWrapper}>
            <Button
              text={'Poslji'}
              onClick={this.submit}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    alignItems: 'center'
  },
  textContainer: {
  },
  formContainer: {
    marginTop: 20
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center'
  }
});

export default connect(state => ({settings: state.settings.settings}))(Report);