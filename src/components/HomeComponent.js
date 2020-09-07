import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }

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
    }

    render() {
        const { image } = this.state;
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
    }
}

export default HomeScreen;