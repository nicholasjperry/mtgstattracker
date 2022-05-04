import React, { Component, createContext } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeComponent';
import LoginScreen from './LoginComponent';
import RegisterScreen from './RegisterComponent';
import HomeScreen from './HomeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

const AppContext = createContext({
    isLoggedIn: {},
    setLoggedIn: () => {},
});

const Login = () => {
    const { setLoggedIn } = useContext(AppContext);

    return(
        <View>
            <Button onPress={() => setLoggedIn(true)} />
        </View>
    );
};

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
    return <AuthStack.Navigator initialRouteName="Welcome">
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
};

const HomeTab = createMaterialBottomTabNavigator();
const HomeTabScreen = () => {
    return <HomeTab.Navigator initialRouteName="Home">
        <HomeTab.Screen name="Home" component={HomeScreen} />
    </HomeTab.Navigator>
}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
        this.loginStatusCheck();
    };

    setLoggedIn = value => {
        this.setState({ isLoggedIn: value });
    }

    loginStatusCheck = async () => {
        try {
            const userToken = await AsyncStorage.getItem("userprofile");
            if(userToken !== null) {
                this.setState({ isLoggedIn: true })
            } else {
                this.setState({ isLoggedIn: false })
            }
        }   catch (err) {
                console.log(err);
        }
    };

    render() {
        return(
            <AppContext.Provider
                value={{
                    isLoggedIn: this.state.isLoggedIn,
                    setLoggedIn: this.setLoggedIn,
                }}>
                <NavigationContainer>
                    {this.state.isLoggedIn ? <AuthStackScreen /> : <HomeTabScreen />}
                </NavigationContainer>
            </AppContext.Provider>
        );
    };
};

export default Navigation;