import React from 'react';
import { Button } from 'react-native';

const TagClearAll = (props) =>
  <Button title="Clear all x"
          onPress={() => props.clearAllTagsAndSearch()}>
  </Button>
export default TagClearAll
