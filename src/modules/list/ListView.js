import React, {PropTypes, Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

class ListView extends Component {
  static displayName = 'ListView';

  constructor(props) {
    super(props)
    this.state = {
      rows: [
        {name: 'Sala1'},
        {name: 'Sala2'},
        {name: 'Sala3'}
      ]
    }
  }
  static navigationOptions = {
    title: 'Lista de salas'
  }

  static propTypes = {
    navigate: PropTypes.func.isRequired,
    navigatorState: PropTypes.any.isRequired
  };

  checkState = () => {
    console.log(this.props.navigatorState)
  }

  handlePress = () => {
    console.log('on press')
  }
  render() {
    let rows = this.state.rows.map((room) => {
      return <TouchableOpacity style={styles.touchContainer} key = {room['name']} onPress = {() => this.handlePress()}>
        <View style={styles.rowContainer}>
          <View style={styles.bodyContainer}>
            <Text style={styles.subtitle}> {room['name']} </Text>
          </View>
        </View>
      </TouchableOpacity>
    })

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Lista lista lista
          </Text>
          {rows}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 20
  },
  touchContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#dce0e1'
  },
  rowContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  imageContainer: {
    width: 100,
    height: 100
  },
  bodyContainer: {
    marginLeft: 10,
    flexDirection: 'column'
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Gill Sans'
  }
});

export default ListView;
