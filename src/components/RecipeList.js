// import React, { Component } from 'react';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Recipe from './Recipe'


const RecipeList = (props) =>

            <ScrollView>
            { (props.recipes) ? (
                <View id="gallerybox">
                  {props.recipes.map( item =>
                    <Recipe key={item.id} item={item} />
                  )}
                </View>
            ) : (
                <Text>No recipes found!</Text>
            )}
            </ScrollView>


export default RecipeList
