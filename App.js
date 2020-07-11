import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://whitehatjr.github.io/T-Rex-Runner-Color/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
