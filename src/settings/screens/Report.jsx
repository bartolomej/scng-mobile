import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LogoO from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import TextInput from '../views/TextInput';
import Button from '../views/Button';
import {postFeedback} from "../actions";
import parseError from '../../errors';
import Message from '../../views/Message';


class Report extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: '',
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
      headerTitle: 'Povratne info.',
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
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>Imas tezavo s aplikacijo ? Imas idejo o izboljsavi ? Poslji nam povratne informacije ;)</Text>
        </View>
        {/*TODO: add type selector (vprasanje, bugg,..)*/}
        <TextInput
          style={{marginTop: 10}}
          description={''}
          placeholder={'Vnesi tip ...'}
          value={this.state.type}
          onChange={type => this.setState({type})}/>
        <TextInput
          style={{marginTop: 10}}
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
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  buttonWrapper: {
    alignItems: 'center'
  },
  textContainer: {

  },
  formContainer: {

  },
  type: {
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center'
  },
  description: {
    padding: 10,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center'
  }
});

export default connect(state => ({settings: state.settings.settings}))(Report);