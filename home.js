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
module.exports = Home;
