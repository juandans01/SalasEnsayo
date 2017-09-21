import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ListView from './ListView';
import {setDatabase} from './../FirebaseState'
import {NavigationActions} from 'react-navigation';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    navigatorState: state.get('navigatorState').toJS(),
    rooms: state.getIn(['firebase','data']),
    roomsLoaded : state.getIn(['firebase','loaded'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    navigate: bindActionCreators(NavigationActions.navigate, dispatch),
    storeDatabase: (data) => dispatch(setDatabase(data))
  }
}

const ListViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView)

export default(ListViewContainer)
