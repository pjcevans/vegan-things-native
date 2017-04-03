// import { Component } from 'react'
import myData from '../testdata/recipes.json';
import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import RecipeList from './RecipeList'
// <Button title="jeff"
//         onPress={() => navigation.navigate("Recipe", {recipeId: 1})} >jeff</Button>

const data = myData.items


const Gallery = ({navigation}) =>
  <ScrollView>

    <Text>Recipes:</Text>
    <RecipeList recipes={data}
                navigation={navigation} />

  </ScrollView>







export default Gallery
