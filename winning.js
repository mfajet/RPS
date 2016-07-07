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
module.exports = WinningPage;
