import React from 'react';
import { Text} from 'react-native';

const TagCategoryRow = (props) =>
  <Text>{props.name.charAt(0).toUpperCase() + props.name.slice(1)} of Dish</Text>

export default TagCategoryRow
