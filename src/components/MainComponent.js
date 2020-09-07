import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from './SplashComponent';
import WelcomeScreen from './WelcomeComponent';
import LoginScreen from './LoginComponent';
import RegisterScreen from './RegisterComponent';
import HomeScreen from './HomeComponent';
import { AuthContext } from './ContextComponent';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return <AuthStack.Navigator>
                <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
            </AuthStack.Navigator>;
};

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
            </HomeStack.Navigator>;
};

function Main() {

    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        setTimeout (() => {
            setIsLoading(!isLoading);
            setUser({});
        }, 500);
    }, []);

    return(
        <NavigationContainer>
            {isLoading ? (
                <SplashScreen /> 
            ) : user ? (
                <HomeStackScreen /> 
            ) : (
                <AuthStackScreen />
            )}
        </NavigationContainer>
    );
};

export default Main;