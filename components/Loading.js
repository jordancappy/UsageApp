import React, { Component } from 'react';
import { Text } from 'react-native';

class Loading extends Component {
  render() {
    return ( <Text style={this.props.style}>Loading...</Text>);
  }
}

export default Loading;