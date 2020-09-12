import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, AsyncStorage } from 'react-native';

const SplashScreen = () => {
    // useEffect(() => {
    //     checkToken();
    // }, []);

    // const checkToken = async () => {
    //     const token = await AsyncStorage.getItem("token");
    //     const user = await AsyncStorage.getItem("user");
    //     const userData = JSON.parse(user);
    //     if (token != null) {
    //         props.save_user(userData);
    //     } else {
    //         props.navigation.navigate("Welcome");
    //     }
    // };

    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#5637DD' />
                <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingText: {
            color: '#5637DD',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
);

export default SplashScreen;