import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import * as firebase from "firebase";

class LoginView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      pass: ''
    }
  }

  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAGcV1xAkSvB-YNrYzKZSShTUrbnGs32hE",
      authDomain: "ensayolocation.firebaseapp.com",
      databaseURL: "https://ensayolocation.firebaseio.com",
      storageBucket: "ensayolocation.appspot.com"
    });
  }

  async signup(){
    // this.state.email,this.state.pass
    console.log(firebase)
    try{
      await firebase.auth().createUserWithEmailAndPassword('juandans02@gmail.com','asdasd')
      console.log("Account created")
    }catch(error){
      console.log(error.toString())
    }
  }
  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          onChangeText={(text) => {this.setState({email:text})}}
        />
        <TextInput
          onChangeText={(text) => {this.setState({pass:text})}}
        />
        <TouchableOpacity onPress={this.signup}>
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginView