export default class Main extends Component {
    render() {
        return ( 
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer> 
        );
    };
};

const Stack = createStackNavigator();

export class Main extends Component {
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator initalRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
};

createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: RootStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._loadData();
    };

    render() {
        return (    
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    };

    _loadData = async() => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App');
    };
};

const RootStack = createStackNavigator({ Home: HomeScreen });

const AuthStack = createStackNavigator({ Welcome: WelcomeScreen });

<NavigationContainer>
    {userToken ? (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    ) : (
        <AuthStack.Navigator initialRouteName="Welcome">
            <AuthStack.Screen name="Welcome" component={WelcomeScreen} title="Welcome" />
            <AuthStack.Screen name="Login" component={LoginScreen} title="Login" />
            <AuthStack.Screen name="Register" component={RegisterScreen} title="Register" />
        </AuthStack.Navigator>
    )}
</NavigationContainer>

{/* {this.state.userToken == null ? (
        <AuthStack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
                title: "Welcome"
            }}
        />
    ) : (
        <HomeStack.Screen name="Home" component={HomeScreen} />
    )} */}


// const userInfo = {username: 'admin', password: 'password'};

    // _login = async() => {
//     if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
//         // alert('Logged In');
//         await AsyncStorage.setItem('isLoggedIn', '1');
//         this.props.navigation.navigate("Home");
//     } else {
//         alert('Username or Password is incorrect.');
//     }
// }