import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import NavigatorViewContainer from './navigator/NavigatorViewContainer';
import LoginView from './login/LoginView';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import Firebase from './Firebase'

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    snapshotUtil.resetSnapshot()
      .then(snapshot => {
        const {dispatch} = this.props;

        if (snapshot) {
          dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
        } else {
          dispatch(SessionStateActions.initializeSessionState());
        }

        store.subscribe(() => {
          snapshotUtil.saveSnapshot(store.getState());
        });
      });


    // data.on('value', (snapshot) => {
    //   console.log('on function')
    //   console.log(snapshot.val())
    //   this.props.storeDatabase(snapshot.val())
    // })
    // console.log('after get')
    // firebase.database().ref('rooms/' + '1').set({
    //     name: 'Sala 1',
    //     location: 'Palermo'
    // })
    // console.log(data)
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor='#455a64' barStyle='light-content' />
        <Firebase/>
        <NavigatorViewContainer />
        {/*<LoginView/>*/}
        {__DEV__ && <DeveloperMenu />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
