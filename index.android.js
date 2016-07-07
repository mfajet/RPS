/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
      AsyncStorage,
  Component,
      Image,
      Navigator,
  StyleSheet,
  Text,
      TouchableHighlight,
  View
} from 'react-native';

import Home from 'home.js'
import WinningPage from 'winning.js'

class RPS extends Component {

    renderScene (route, navigator){
    switch (route.id) {
      case 'Home':
        return (<Home navigator={navigator} />);
      case 'WinningPage':
        return (<WinningPage navigator={navigator}/>);
    }
  }


  render() {
      return (
      <Navigator initialRoute={{id: 'Home', name: 'Home'}} renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        />
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c36d9f',
  },
    container2: {
        flexDirection:"row",
    alignItems: 'center',
    backgroundColor: '#c36d9f',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
    winText:{
        fontSize: 50,
    textAlign: 'center',
    marginTop: 30,
    },
  instructions: {
    textAlign: 'center',
    margin: 5,
  },
   images: {

       flex:1,
       resizeMode: "contain",
   },
    touchable: {
               flex:1,
    },
    back: {
        textAlign: 'center',
        fontSize: 20,
        margin: 30
    },
    win: {
        flex:1,
        marginLeft:50
    },
    whole: {
            backgroundColor: '#c36d9f',
            flex:1,
    },
    imageCont: {
        flex: 1,
        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c36d9f',
    },
    winImage: {
        width: 200,
        height: 200,
    }
});

AppRegistry.registerComponent('RPS', () => RPS);
