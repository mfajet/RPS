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

class Home extends Component {
    constructor (props) {
      super(props);
    }
    onPressRock(){
        console.log("Damn I put scissors!");
        var _this = this;
        AsyncStorage.setItem("hand", "Rock").then(function(){
            _this.props.navigator.push({
               id: 'WinningPage',
               name: 'WinngingPage'
             });
        }).done();
        


    }
    onPressPaper(){
        console.log("Damn I put rock!");
        var _this = this;
        AsyncStorage.setItem("hand", "Paper").then(function(){
            _this.props.navigator.push({
               id: 'WinningPage',
               name: 'WinngingPage'
             });
        }).done();
    }
    onPressScissors(){
        console.log("Damn I put paper!");
        var _this = this;
        AsyncStorage.setItem("hand", "Scissors").then(function(){
            _this.props.navigator.push({
               id: 'WinningPage',
               name: 'WinngingPage'
             });
        }).done();
    }
    
    render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Rock, Paper, Scissors!
        </Text>
        <Text style={styles.instructions}>
          Choose what to play!
        </Text>
            <TouchableHighlight underlayColor="transparent" style={styles.touchable} onPress={e => {this.onPressRock(e)}}>
                <Image  style={styles.images} source={require("./images/Rock.png")} />
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent" style={styles.touchable} onPress={e => {this.onPressPaper(e)}}>
                <Image style={styles.images} source={require("./images/Paper.png")} />
            </TouchableHighlight>
            <TouchableHighlight underlayColor="transparent" style={styles.touchable} onPress={e => {this.onPressScissors(e)}}>
                <Image style={styles.images} source={require("./images/Scissors.png")} />
            </TouchableHighlight>                                                     
      </View>
    );
                                                    }
}
module.exports = Home               

class WinningPage extends Component {
    componentDidMount(){
        var _this = this;
        AsyncStorage.getItem("hand").then(function(hand){
          _this.setState({hand: hand})
        });
    }
    
    constructor (props) {
      super(props);
        this.state = {
            hand: ""
        }
    }
    
    render(){
        var theirMove = this.state.hand;
        var MyMoveImage;
        var myMove;
        switch(theirMove){
            case 'Rock':
                myMove="scissors";
                MyMoveImage= <Image style={styles.winImage} source={require("./images/Scissors.png")} />
                break;
            case 'Paper':
                myMove="rock";
                MyMoveImage= <Image style={styles.winImage} source={require("./images/Rock.png")}></Image>
                break;
            case 'Scissors':
                myMove="paper";
                MyMoveImage= <Image style={styles.winImage} source={require("./images/Paper.png")} />
                break;
        }
        return (
            <View style={styles.whole}>

                        
                        <Text style={styles.winText}>YOU WON!</Text>
                        <Text style={styles.instructions} >Damn! I put {myMove}!</Text>
            <View style={styles.imageCont}>
                {MyMoveImage}
            </View>
            <TouchableHighlight underlayColor="transparent" onPress={this.props.navigator.pop}><Text style={styles.back}>Play again!</Text></TouchableHighlight>
            </View>
        );
    }
        
        
}

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
