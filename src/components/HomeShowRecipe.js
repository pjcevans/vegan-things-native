import FaDown from 'react-icons/lib/fa/chevron-down'
import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';


const HomeShowRecipe = (props) =>
  <View className="show-next-block">
    <Button title={"button"} className="show-next-button" onPress={() => props.showAnotherRecipe()}>Show next recipe...<br /> <FaDown /></Button>
  </View>

export default HomeShowRecipe
