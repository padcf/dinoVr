import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  AppRegistry,
  Text,
} from 'react-native';
import Splash from './Components/SplashScreen/Splash';
import Login from './Components/LoginScreen/Login'

export default class App extends Component {
    render() {
        return (
            <Login />
        )
        
    };
};

