import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity, Text, Linking } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false
        };

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.titleText}>Login</Text>
                    <Text style={styles.fillerText}>Hi there! Nice to see you again.</Text>

                    {/* Username/Password */}
                    <Input 
                        inputStyle={{color: 'white'}}
                        placeholder="Username or Email"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        keyboardType="email-address"
                        leftIcon={{ type: 'font-awesome', name: 'user-circle-o', color: 'white', marginRight: 10 }}
                    />
                    <Input
                        inputStyle={{color: 'white'}}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white', marginRight: 10 }}
                    />

                    {/* Remember Me  */}
                    <CheckBox 
                        title="Remember Me"
                        checked={this.state.remember}
                        onPress={() => this.setState({remember: !this.state.remember})}
                        containerStyle={styles.rememberCheckbox}
                        textStyle={{color: 'white'}}
                        checkedColor="crimson"
                    />

                    {/* Login Button */}
                    <TouchableOpacity style={styles.loginButton} title="Login" type="submit">
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    {/* Break Text */}
                    <Text style={{textAlign: 'center', color: 'grey', marginTop: 20}}>OR use an account from one of the following:</Text>

                    {/* Buttons Container */}
                    <View style={styles.buttonsContainer}>
                        {/* Twitter Button */}
                        <TouchableOpacity style={styles.twitterButton}>
                            <FontAwesome name="twitter" color="white" style={{marginRight: 5}}/>
                            <Text style={{color: 'white'}}>Twitter</Text>
                        </TouchableOpacity>
                        {/* Facebook Button */}
                        <TouchableOpacity style={styles.facebookButton}>
                            <FontAwesome name="facebook-square" color="white" style={{marginRight: 5}}/>
                            <Text style={{color: 'white'}}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.googleButton}>
                        <FontAwesome name="google" color="black" style={{marginRight: 5}}/>
                        <Text style={{color: 'grey'}}>Google</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Misc Links */}
                    <View style={styles.linkContainer}>
                        <TouchableOpacity style={{marginTop: 75}} onPress={() => Linking.openURL('#')}>
                            <Text style={{color: 'white'}}>
                                Forgot Your Password?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop: 75, marginLeft: 210}} onPress={() => Linking.openURL('#')}>
                            <Text style={{color: 'white'}}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    buttonsContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    linkContainer: {
        flex: 3,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 26,
        color: 'white',
        marginBottom: 30,
        marginTop: 20
    },  
    fillerText: {
        color: 'grey',
        marginBottom: 20
    },
    loginButton: {
        backgroundColor: 'crimson',
        paddingVertical: 17,
        paddingHorizontal: 25,
        borderRadius: 20,
        textAlign: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    twitterButton: {
        backgroundColor: '#00acee',
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        marginLeft: 20,
        flexDirection: 'row',
        borderRadius: 20
    },
    facebookButton: {
        backgroundColor: '#4267B2',
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        marginLeft: 20,
        flexDirection: 'row',
        borderRadius: 20
    },
    googleButton: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        marginLeft: 20,
        flexDirection: 'row',
        borderRadius: 20
    },
    rememberCheckbox: {
        margin: 10,
        marginBottom: 20,
        backgroundColor: null
    }
});

export default LoginScreen;