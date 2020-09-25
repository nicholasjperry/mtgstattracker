import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    };

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
            if (response.uri) {
                this.setState({ image: response });
            }
        });
    };

    render() {
        const { image } = this.state;
        return(
            <View style={styles.container}>
                {image && (
                    <Image
                        source={{ uri: image.uri }}
                        style={{ width: 300, height: 300 }}
                    />
                )}
                <Button title="Choose Photo" onPress={this.handleChoosePhoto}
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    imageButton: {

    }
});

export default HomeScreen;