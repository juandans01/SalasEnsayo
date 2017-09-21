import React, {PropTypes, Component} from 'react';
import * as firebase from "firebase";
import {connect} from 'react-redux';
import {setDatabase} from './FirebaseState'

class Firebase extends Component{

  componentWillMount(){
    //Start Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAGcV1xAkSvB-YNrYzKZSShTUrbnGs32hE",
        authDomain: "ensayolocation.firebaseapp.com",
        databaseURL: "https://ensayolocation.firebaseio.com",
        storageBucket: "ensayolocation.appspot.com"
      });
    }

    firebase.database().ref('rooms/').on('value',(snap) => {
      this.props.rooms(snap.val())
    })
  }

  render(){
    return(
      null
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    rooms : (data) => dispatch(setDatabase(data))
  }
}

const mapStateToProps = (state) =>{
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Firebase)

