import React from 'react';
import { Button} from 'react-native';

const TagFilterItem = (props) =>
  <Button title={`${props.item} x`}
          onPress={() => props.toggleTagFilter(props.item)}>

  </Button>
export default TagFilterItem
