import React, { Component } from 'react';
import myData from '\../testdata/recipes.json';
import { Text, Image, View } from 'react-native';
import CustomImage from './CustomImage'
// Using data imported from the file on each recipe page is fubar,
// this should be done by passing data to the component or by redux


class RecipeFullPage extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    // Picks the data for the current recipe id
    var thisRecipe = (this.props.hasOwnProperty("params")) ? this.props.params.recipeId : this.props.recipeId
    var recipe = myData.items.find(x => x.id === parseInt(thisRecipe))
    var visibleClass = (this.props.visibleClass) ? this.props.visibleClass : undefined
    // recipe.images.map( (image, id) => {
    //   if (image.type === "main") {
    //     require()
    //   }
    // })

    return (
      <View className={visibleClass}>
        <Text>{recipe.name}<Text className="postscript"> - added {recipe.date}</Text></Text>
        <View id="recipefullpageblock">

          <View>
          {recipe.images.map( (image, id) =>
            (image.type === "main") ? (
            <CustomImage key={id} imageName={"../images/" + image.url} />
          ) : undefined
          )}
          </View>

          <View className="recipe-fullpage-text">
            <Text>This recipe:</Text>
            <Text>{recipe.blurb}</Text>
            <Text>Ingredients:</Text>
            <View>
              {recipe.ingredients.map( (ingredient, id) =>
                <Text key={id}>{ingredient.quantity + " " + ingredient.unit + " " + ingredient.type}</Text>
              )}
            </View>
            <Text>Method:</Text>
            <View>
              {recipe.method.map( (step, id) =>
                <Text key={id}>Step {id + 1}: {step}</Text>
              )}
            </View>
          </View>


        </View>
      </View>
    )
 }
}


export default RecipeFullPage
