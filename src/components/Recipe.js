// import React, { Component } from 'react';
import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
// <a key={id} href={"#/recipes/" + props.item.id}>{}<img key={id} src={require("../../images/" + image.url)} height="160" width="160"/></a>
// <Text><a href={"#/recipes/" + props.item.id}>{props.item.name}</a></Text>


const Recipe = (props) =>
  <View style={styles.centered}>
    {props.item.images.map( (image, id) =>
      (image.type === "main") ? (
        <Image key={id}
               source={{uri: image.url}}
               style={styles.base}/>
    ) : undefined
    )}
    <Text>{props.item.name}</Text>
  </View>

const styles = StyleSheet.create({
  base: {
    height: 300,
    width: 360,
  },
  centered: {
    alignItems: 'center',
  },
});



export default Recipe
