import React from 'react';
import { Text, View, Button } from 'react-native';

const TagClearAll = (props) =>
      <Button title={`Searching for: ${props.searchTerm} x`}
              onPress={() => props.clearSearch()}>

      </Button>
export default TagClearAll
