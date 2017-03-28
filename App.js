import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Home from './src/components/Home'
//
//
// class Home extends Component {
//   static navigationOptions = {
//     tabBar: {
//       label: 'Home',
//     },
//   }
//   render() {
//     return <Text>List of all homes</Text>
//   }
// }

class Gallery extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Gallery',
    },
  }
  render() {
    return <Text>List of all contacts</Text>
  }
}

class Search extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Search',
    },
  }
  render() {
    return <Text>List of all contacts</Text>
  }
}


const MainScreenNavigator = TabNavigator({
  Home: { screen: Home },
  Gallery: { screen: Gallery },
  Search: { screen: Search },
  }, {
    tabBarOptions: {
      activeTintColor: '#191',
      pressColor: '#fff',
      showLabel: true,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        width: 360
      },
      tabStyle: {
        backgroundColor: '#fff',
        height: 40,
      },
      indicatorStyle: {
        backgroundColor: '#fff',
      },
    },
  });

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Vegan Things</Text>
        <MainScreenNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  hellotext: {
    backgroundColor: '#127',
    color: '#fff',
  },
});
