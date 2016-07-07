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
            hand: "",
            winMessage: ""
        }
    }

    render(){
        var theirMove = this.state.hand;
        var MyMoveImage;
        var myMove;
        var winMessage="I won!";
        var exclamation="YAY!";
        var num = Math.floor(Math.random()*3);
        switch(num){
          case 0:
            myMove="scissors";
            MyMoveImage= <Image style={styles.winImage} source={require("./images/Scissors.png")} />
            break;
          case 1:
            myMove="rock";
            MyMoveImage= <Image style={styles.winImage} source={require("./images/Rock.png")} />
            break;
          case 2:
            myMove="paper";
            MyMoveImage= <Image style={styles.winImage} source={require("./images/Paper.png")} />
            break;
        }
        if((theirMove=="Rock" && myMove=="scissors")||(theirMove=="Paper" && myMove=="rock")||(theirMove=="Scissors" && myMove=="paper")){
          winMessage="You won!";
          exclamation="Damn!";
        } else if ((theirMove=="Rock" && myMove=="rock")||(theirMove=="Paper" && myMove=="paper")||(theirMove=="Scissors" && myMove=="scissors")){
          winMessage="We tied!";
          exclamation="#same tbh";
        }
        return (
            <View style={styles.whole}>


                        <Text style={styles.winText}>{winMessage}</Text>
                        <Text style={styles.instructions} >{exclamation} I put {myMove}!</Text>
            <View style={styles.imageCont}>
                {MyMoveImage}
            </View>
            <TouchableHighlight underlayColor="transparent" onPress={this.props.navigator.pop}><Text style={styles.back}>Play again!</Text></TouchableHighlight>
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
module.exports = WinningPage;
