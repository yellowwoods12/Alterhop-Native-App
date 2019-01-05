import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import {  StackNavigator  } from 'react-navigation';
import Main from './Components/Main'
import Signup from './Components/signup'
import Forgot from './Components/Forgot'

const Navigation = StackNavigator(
  {
   First: { screen: Main },
   
   Second: { screen: Signup },

   Third: { screen: Forgot }
  });
   
export default Navigation;
