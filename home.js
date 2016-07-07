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
module.exports = Home;
