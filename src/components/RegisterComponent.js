import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

class RegisterScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            confirmpassword: '',
            agree: false
        };
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Text style={styles.titleText}>Register</Text>
                    <Input 
                        inputStyle={{color: 'white'}}
                        placeholder="First Name"
                        onChangeText={(firstname) => this.setState({firstname})}
                        value={this.state.firstname}
                    />
                    <Input 
                        inputStyle={{color: 'white'}}
                        placeholder="Last Name"
                        onChangeText={(lastname) => this.setState({lastname})}
                        value={this.state.lastname}
                    />
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
                    <Input 
                        inputStyle={{color: 'white'}}
                        placeholder="Confirm Password"
                        secureTextEntry
                        onChangeText={(confirmpassword) => this.setState({confirmpassword})}
                        value={this.state.confirmpassword}
                        leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white', marginRight: 10 }}
                        />
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            checked={this.state.agree}
                            onPress={() => this.setState({agree: !this.state.agree})}
                            checkedColor="crimson"
                        />
                        <Text style={{color: 'white', marginTop: 15, marginLeft: -5}}>I agree to the Terms of Services and Privacy Policy</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.button} 
                        title="Register" 
                        type="submit">
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', color: 'grey', marginTop: 20}}>OR use an account from one of the following:</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.twitterButton}>
                            <FontAwesome name="twitter" color="white" style={{marginRight: 5}}/>
                            <Text style={{color: 'white'}}>Twitter</Text>
                        </TouchableOpacity>
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
                </ScrollView>
            </SafeAreaView>
        );
    };
};

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
    titleText: {
        fontSize: 26,
        color: 'white',
        marginBottom: 30,
        marginTop: 20
    },  
    button: {
        backgroundColor: 'crimson',
        paddingVertical: 17,
        paddingHorizontal: 25,
        borderRadius: 20
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
    checkboxContainer: {
        flexDirection: 'row',
    }
});

export default RegisterScreen;