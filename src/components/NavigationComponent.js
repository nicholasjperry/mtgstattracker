import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashComponent';
import WelcomeScreen from './WelcomeComponent';
import LoginScreen from './LoginComponent';
import RegisterScreen from './RegisterComponent';
import HomeScreen from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

const RootStack = createStackNavigator();
const RootStackScreen = () => {
    return <RootStack.Navigator initialRouteName="Welcome">
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Register" component={RegisterScreen} />
    </RootStack.Navigator>
};

const AppStack = createMaterialBottomTabNavigator();
const AppStackScreen = () => {
    return <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title: "Home" }}
         />
    </AppStack.Navigator>
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
        };
        this.loginStatusCheck();
    };

    loginStatusCheck = async () => {
        try {
            const userToken = await AsyncStorage.getItem("userprofile");
            if(userToken !==null) {
                this.setState({ logged: true })
            } else {
                this.setState({ logged: false })
            }
        }   catch (err) {
                console.log(err);
        }
    };

    render() {
        return(
            <NavigationContainer>
                {this.state.logged ? <RootStackScreen /> : <AppStackScreen />}
            </NavigationContainer>
        );
    };
};
export default Navigation;