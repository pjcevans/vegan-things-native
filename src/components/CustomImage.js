import React, { Component } from 'react';
import { Image } from 'react-native';

class CustomImage extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    var location = require(this.props.imageName)
    return <Image source={location}/>
  }
}

export default CustomImage
