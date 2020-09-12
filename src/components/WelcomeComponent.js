import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class WelcomeScreen extends Component  {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headline}>Welcome to MTG Statistics Tracker!</Text>
                <View style={{margin: 20}}>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("Login")}
                        style={styles.button} 
                        title="Login">
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin: 20}}>
                    <TouchableOpacity 
                        onPress={ () => this.props.navigation.navigate("Register")}
                        style={styles.button} 
                        title="Register">
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
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
    headline: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        marginBottom: 50,
    }
});


export default WelcomeScreen;