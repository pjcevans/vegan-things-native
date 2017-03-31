// import { Component } from 'react'
import myData from '../testdata/recipes.json';
import React from 'react';
import { Text, View } from 'react-native';
import RecipeList from './RecipeList'


const data = myData.items


const Gallery = () =>
  <View>
    <Text>Recipes:</Text>
    <RecipeList recipes={data}/>

  </View>







export default Gallery
