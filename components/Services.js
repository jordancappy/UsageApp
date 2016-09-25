import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const servicesData = [
  {
    product: 'phone',
    name: '0458237396'
  },
  {
    product: 'adsl',
    name: 'internet'
  }
];

export default class Services extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(servicesData),
    };
    this.renderRow = this.renderRow.bind(this);
    this.onPress = this.onPress.bind(this);
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
  renderRow(service) {
    return (
      <TouchableHighlight style={styles.list}
        onPress={ () => this.onPress(service.name) }
      >
        <Text>{service.name}</Text>
      </TouchableHighlight>
    )
  }
  onPress(serviceName) {
    this.props.navigator.push({
      id: 'service',
      title: serviceName,
      passProps: {
        serviceName
      }
    })
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100
  },
})