// import {Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ListViewContainer from '../list/ListViewContainer';
// const headerColor = '#39babd';
// const activeColor = 'white';

// // TabNavigator is nested inside StackNavigator
// export const MainScreenNavigator = TabNavigator({
//   Counter: {screen: CounterViewContainer},
//   Color: {screen: ColorViewContainer}
// }, {
//   tabBarOptions: {
//     ...Platform.select({
//       android: {
//         activeTintColor: activeColor,
//         indicatorStyle: {backgroundColor: activeColor},
//         style: {backgroundColor: headerColor}
//       }
//     })
//   }
// });
//
// MainScreenNavigator.navigationOptions = {
//   title: 'Busca tu sala!',
//   headerTitleStyle: {color: 'white'},
//   headerStyle: {
//     backgroundColor: headerColor,
//     elevation: 0 // disable header elevation when TabNavigator visible
//   }
// };

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: ListViewContainer}
});

export default AppNavigator;
