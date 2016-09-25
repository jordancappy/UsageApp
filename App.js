import React, { Component }  from 'react';
import { 
  StyleSheet,
  Text, 
  Navigator, 
  View,
  TouchableHighlight
} from 'react-native';

import Services from './components/Services';
import Service from './components/Service';
import Loading from './components/Loading';

class App extends Component {
  render() {
    return (
      <Navigator style={{paddingTop: 100}}
        initialRoute={{ id: 'services', title: 'My Services' }}      
        renderScene={this.renderScene}
        configureScene={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom
        }
        navigationBar={
          <Navigator.NavigationBar style={{ backgroundColor: 'lightblue' }}
            routeMapper={NavBarRouteMapper} />
        }
      />
    );
  }
  renderScene(route, navigator) {
    switch (route.id) {
      case 'services':
        return (<Services navigator={navigator} />);
      case 'service':
        return (<Service navigator={navigator} {...route.passProps} />)
      default:
        return (<Loading navigator={navigator} style={styles.container}/>)
    }
  }
}

const NavBarRouteMapper = {
  LeftButton(route, navigator, index, navState) { 
    if (index === 0)
      return null

    return (<Text onPress={ () => navigator.pop() }>Cancel</Text>); 
  },
  RightButton(route,navigator, index, navState) {
    return null;
  },
  Title (route, navigator, index, navState) {  
    return (
      <Text style={{color: 'white', fontSize: 15}}>
        {route.title}
      </Text>
    ); 
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navBar: {
    backgroundColor: 'lightblue'
  }
});

export default App;