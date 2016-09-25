import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class Service extends Component { 
  render() {
    return (
      <Text>
        {this.props.serviceName}
      </Text>
    )
  }
}

export default Service;