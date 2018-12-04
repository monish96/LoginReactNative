import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as firebase from 'firebase';
import { HomeComponent } from './../components/AppComponents';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onSignoutPress = () => {
    firebase.auth().signOut();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.getStartedContainer}>HI there</Text>
        <HomeComponent />
        <TouchableOpacity onPress={this.onSignoutPress} style={styles.button}><Text style={styles.buttonText}>signOut</Text></TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },button: {
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
