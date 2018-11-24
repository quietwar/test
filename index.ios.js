// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <Header />
  <text> The Hidden Genius Project </text>
  // );
  // <View style={{ flex: 1 }}>
  //   <Header headerText={'Albums'} />
  //   <AlbumList />
  // </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
