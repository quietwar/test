// importing libraries from component
import React from 'react';
import { Text } from 'react-native';

//make a component
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style ={viewStyle}>
      <Text style={textStyle}>Welcome to the Hidden Genius Project Curriclum</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: 'black'

  },
  textStyles: = {
    fontSize: 20
  }
};

//make the component available to other parts of the app
export default Header;
