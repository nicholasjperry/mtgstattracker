import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashComponent';
import WelcomeScreen from './WelcomeComponent';
import LoginScreen from './LoginComponent';
import RegisterScreen from './RegisterComponent';
import HomeScreen from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

class Navigation extends Component {
    
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
};
export default Navigation;
