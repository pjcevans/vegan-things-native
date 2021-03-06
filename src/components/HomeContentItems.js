import HomeShowRecipe from './HomeShowRecipe'
import React, { Component } from 'react';
import RecipeFullPage from './RecipeFullPage'
import { Text, Image, View, StyleSheet } from 'react-native';

// The component takes 3 props:
// - A state variable that determines how many recipes are visible - `currentRecipe`
// - A function which increments that state variable - `showAnotherRecipe`
// - A set of data to display - `contentItems` - this can be any array of data where
// each item has a unique id variable `id` - schema dependant rendering can then
// be handled in another component.
//
// CSS Notes:
// - The Component has a containing class of `content-items-list`
// - Visible elements of the list have the class `content-shown`
// - The "next" element in a list has the class `content-hidden`, new items
// appearing on the page will transition from `content-hidden` to
// `content-shown` allowing animations to be added
//
// Dev Notes:
// - This component could hold its own state, which would make it more
// encapsulated, however consolidating as many state variables as possible
// within top level Components is a favoured design pattern so currently
// the parent Component controls this one's state, state variables and
// functions being passed in as props.

class HomeContentItems extends Component {
  constructor(props) {
    super(props);
  }



  render() {

    var displayedItems = [];
    // If no data is passed
    if (this.props.contentItems.length === 0) {
    	console.log("Whoops, no data provided.")
    // If a single datum is passed
    } else if (this.props.contentItems.length === 1) {
    		contentItems.push(<RecipeFullPage customStyle={styles.content}
                                      key={1}
                                      recipeId={this.props.contentItems[0].id} />)
    // If more than one datum is passed
    } else if (this.props.contentItems.length > 1) {
    	// FOR
    	// Loop through each datum and display or not according to position in set and current recipe variable
    	for (let i = 1; i <= this.props.contentItems.length; i++) {
    		// If current item is before the latest item to display just draw it
    		if (i < this.props.currentRecipe ) {
     		displayedItems.push(<RecipeFullPage customStyle={styles.content}
                                        key={i}
                                        recipeId={this.props.contentItems[i - 1].id} />)
    		// If the current item is the latest item to display draw it as well as a "show more" button
    		// unless it's also the last item in the dataset.
    		} else if (i === this.props.currentRecipe && this.props.currentRecipe !== this.props.contentItems.length) {
    	 		displayedItems.push(<RecipeFullPage customStyle={styles.content}
                                          key={i}
                                          recipeId={this.props.contentItems[i - 1].id} />);
        	displayedItems.push(<HomeShowRecipe key={i + "submit"}
                                            showAnotherRecipe={this.props.showAnotherRecipe} />)
    		// If the current item is the latest item to display and the last in the dataset,
    		// then just display it without a button
    		} else if (i === this.props.currentRecipe && this.props.currentRecipe === this.props.contentItems.length) {
    	 		displayedItems.push(<RecipeFullPage customStyle={styles.content}
                                          key={i}
                                          recipeId={this.props.contentItems[i - 1].id} />)
    		// If there is another item in the dataset after the current item, draw it as a hidden item, so that
    		// when it is re-drawn as visible later a transition effect can be applied
    		} else if (i === this.props.currentRecipe +1 && this.props.currentRecipe !== this.props.contentItems.length) {
    	 		displayedItems.push(<RecipeFullPage customStyle={styles.contentHidden}
                                          key={i}
                                          recipeId={this.props.contentItems[i - 1].id} />)
    		}
    	}
    	// END OF FOR
    	//
    }

    return (
      <View className="content-items-list">
        {displayedItems}
      </View>
      //

    );
  }
}

const styles = StyleSheet.create({
  contentHidden: {
    height: 0,
    opacity: 0,
  },
  content: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderTopWidth: 1,
  },
  base: {
    height: 300,
  },
});

export default HomeContentItems
