import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Home from './src/components/Home'
import Gallery from './src/components/Gallery'
import RecipeFullPage from './src/components/RecipeFullPage'


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

// class Gallery extends Component {
//   static navigationOptions = {
//     tabBar: {
//       label: 'Gallery',
//     },
//   }
//   render() {
//     return <Text>List of all contacts</Text>
//   }
// }

class Search extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Search',
    },
  }
  render() {
    return <Text>List of all contacts</Text>;
  }
}

let screenWidth = Dimensions.get("window").width;

const MainScreenNavigator = TabNavigator({
  Home: { screen: Home },
  Gallery: { screen: Gallery },
  Search: { screen: Search },
},{
  tabBarOptions: {
    activeTintColor: "#191",
    pressColor: "#fff",
    showLabel: true,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      width: screenWidth,
    },
    tabStyle: {
      backgroundColor: "#fff",
      height: 40,
    },
    indicatorStyle: {
      backgroundColor: "#fff",
    },
  },
});

class MainScreen extends Component {
  render() {
    return (
      <View>
      <Text>Hey</Text>
        <MainScreenNavigator />
      </View>
    );
  }
}

const AppNavigator = StackNavigator({
  Top: { screen: MainScreen },
  Recipe: {
    path: "recipes/:recipeId",
    screen: Home,
  },
}, {
  initialRouteName: 'Top',
});



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  hellotext: {
    backgroundColor: "#127",
    color: "#fff",
  },
});
