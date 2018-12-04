import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Alert
} from 'react-native';
import * as firebase from 'firebase';


export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
        },(error) =>{
            Alert.alert(error.message);
        });
    }

    onCreateAccountPress = () => {
       
        this.props.navigation.navigate("Signup");
    }

    render() {
        return (

            <View style={styles.container}>

                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor="#000000"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }) }}

                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#000000"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }) }}
                />
                <TouchableOpacity style={styles.button} onPress={this.onLoginPress}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Button title="Signup" onPress={this.onCreateAccountPress} ></Button>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#81d4fa'
    },

    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#212121',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

});