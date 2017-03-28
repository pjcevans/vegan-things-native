import myData from '../testdata/recipes.json';
// import ReactDOM from 'react-dom'
import HomeContentItems from './HomeContentItems'
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


class Home extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
    },
  }

    constructor(props) {
        super(props)
        this.state = {
          currentRecipe: 1
        }
    }

    scrollToBottom = () => {
      // Final item on page passed ref 'finalItem' in order to enable scrolling to that component
      const node = ReactDOM.findDOMNode(this.finalItem);
      node.scrollIntoView({behavior: "smooth"});
    }

    showAnotherRecipe() {
      // after a new recipe has been added scroll to the bottom
      if (this.state.currentRecipe < myData.items.length) {
        this.setState({
          currentRecipe: this.state.currentRecipe + 1
        }, () => {
          // this.scrollToBottom();
        });
      } else {
      }
    }

  render() {
    // return <Text>List of all stuff</Text>
    return (
      <ScrollView>
        <Text>List of recent chats</Text>
        <Text>List of recent chats</Text>
        <Text>List of recent chats</Text>
        <HomeContentItems currentRecipe={this.state.currentRecipe}
                          showAnotherRecipe={this.showAnotherRecipe.bind(this)}
                          contentItems={myData.items.slice(0, this.state.currentRecipe + 1)} />
        <Text style={styles.bottombox}
              ref={(a) => { this.finalItem = a; }}></Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  bottombox: {
    height: 1,
    width: 70,
  },
});
export default Home
