import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import TextInput from '../views/TextInput';
import Button from '../views/Button';
import {postFeedback} from "../actions";
import parseError from '../../errors';
import Message from '../../Message';


class Report extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: '',
      description: '',
      error: null
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      style: { shadowColor: 'transparent' },
      headerTitle: 'Povratne info.',
    };
  };

  submit = async () => {
    const classId = this.props.settings.selectedClass;
    try {
      let res = await postFeedback(this.state.type, this.state.description, classId);
      if (res.status === 'error') {
        this.setState({error: new Error(res.message)})
      } else {
        this.props.navigation.goBack();
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
            title={parseError(this.state.error).title}
            description={parseError(this.state.error).description}
            image={parseError(this.state.error).image}/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.description}>Prijavi tezavo ali predlagaj ideje bla bla...</Text>
        </View>
        {/*TODO: add type selector (vprasanje, bugg,..)*/}
        <TextInput
          description={''}
          placeholder={'Vnesi tip ...'}
          value={this.state.type}
          onChange={type => this.setState({type})}/>
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