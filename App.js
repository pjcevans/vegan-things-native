import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Dimensions, Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import ScrollingContent from './src/components/ScrollingContent'
import Gallery from './src/components/Gallery'
import SearchPage from './src/components/SearchPage'
import RecipeFullPage from './src/components/RecipeFullPage'
import myData from './src/testdata/recipes.json';


// // placeholder
// //
// class Search extends Component {
//   static navigationOptions = {
//     tabBar: {
//       label: 'Search',
//     },
//   }
//   render() {
//     return <Text>List of all contacts</Text>
//   }
// }
// //
// //

let screenWidth = Dimensions.get("window").width;

const MainScreenNavigator = TabNavigator({
  ScrollingContent: { screen: ScrollingContent },
  Gallery: { screen: Gallery },
  Search: { screen: SearchPage },
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
  // Empty text element used to set width for tab navigator; workaround.
  render() {
    return (
      <View>
        <Text style={styles.widther}></Text>
        <AppNavigator />
      </View>
    )
  }
}

const AppNavigator = StackNavigator({
  Home: {
    navigationOptions: {
      title: "Vegan Things",
    },
    screen: MainScreenNavigator
  },
  Recipe: {
    navigationOptions: {
      title: ({ state }) => `Recipe number ${state.params.recipeId}`,
    },
    path: "recipes/:recipeId",
    screen: RecipeFullPage,
  },
},{
  style: {
    width: screenWidth,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
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
    backgroundColor: "#123",
  },
  hellotext: {
    backgroundColor: "#123",
    color: "#fff",
  },
  widther: {
    width: screenWidth,
  },
});
