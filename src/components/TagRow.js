import React, { Component } from 'react';
import { Button, View } from 'react-native';

const TagRow = (props) =>
  <View>
    <Button className={props.clicked}
            title={`${props.item} (${props.filterByTag(props.item).length})`}
            onPress={() => props.toggleTagFilter(props.item)}>

    </Button>
  </View>

export default TagRow

// The call to: ({props.filterByTag(props.item).length}) is extremely
// inefficient as it is called for each tag item. It would be much
// better to populate tag numbers as top level state and pass them
// down rather than having a component call functions
