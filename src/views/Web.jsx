import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {darkTheme, lightTheme} from "../styles";

export default class MyWeb extends Component {

  static navigationOptions = ({ navigation }) => {
    const isDark = () => navigation.getParam('theme') === 'dark';
    return {
      headerBackTitle: null,
      headerTintColor: isDark() ? darkTheme.PRIMARY_COLOR : lightTheme.PRIMARY_COLOR,
    };
  };

  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.state.params.href}}
      />
    );
  }
}