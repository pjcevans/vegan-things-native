// import React, { Component } from 'react';
import React from 'react';
import { Text, ScrollView } from 'react-native';
import SearchTool from './SearchTool'

// import SearchT//     <SearchTool />

const SearchPage = ({navigation}) =>
  <ScrollView>
    <SearchTool navigation={navigation} />
  </ScrollView>


export default SearchPage
