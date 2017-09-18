import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginView from './LoginView';
import {NavigationActions} from 'react-navigation';

export default connect(
  state => ({
    navigatorState: state.get('navigatorState').toJS()
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch)
    };
  }
)(LoginView);
