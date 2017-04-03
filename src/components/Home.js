import myData from '../testdata/recipes.json';
// import ReactDOM from 'react-dom'
import HomeContentItems from './HomeContentItems'
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ScrollView, ListView, scrollToEnd } from 'react-native';


class Home extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
    },
  }
  
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: 1
    };
  }
  //
  // scrollToBottom = () => {
  //   // Final item on page passed ref 'finalItem' in order to enable scrolling to that component
  //   const node = ReactDOM.findDOMNode(this.finalItem);
  //   node.scrollIntoView({behavior: "smooth"});
  // }

  showAnotherRecipe() {
    // after a new recipe has been added scroll to the bottom
    if (this.state.currentRecipe < myData.items.length) {
      this.setState({
        currentRecipe: this.state.currentRecipe + 1
      }, () => {
        // this.scrollToBottom();
        console.log(this._contentHeight - 100);

      });
    } else {
      return undefined;
    }
  }

  render() {
    // return <Text>List of all stuff</Text>
    return (
      <ScrollView ref= {(a) => { this.scroller = a; }}
                  onContentSizeChange={( contentWidth, contentHeight ) => {
                    // get content height and scroll to last content item
                    this._contentHeight = contentHeight;
                    this.scroller.scrollTo({y: this._contentHeight - 800, animated: true});}}>
        <HomeContentItems currentRecipe={this.state.currentRecipe}
                          showAnotherRecipe={this.showAnotherRecipe.bind(this)}
                          contentItems={myData.items.slice(0, this.state.currentRecipe + 1)} />


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bottombox: {
    height: 1,
    width: 70,
  },
});
export default Home;
