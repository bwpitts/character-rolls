import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header, Button} from "react-native-elements";


export default class HomeScreen extends React.Component {
  state = {
    results: '',
    count: 0
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Header
          centerComponent={{text: "Home"}}
        />
        <Button
            title="Save"
            type="outline"
            raised
            onPress={this._handleRollPress}/>
        <Text>{this.state.results}</Text>
        <Text>{this.state.count}</Text>
      </View>
    );
  }


  _handleRollPress = () => {
    let roll = this.roll();
    if(roll < 1){
      this._handleRollPress();
    } else {
      this.setState({results: roll, count: this.state.count + 1});
    }
  };

  roll(){
    return Math.floor(Math.random() * Math.floor(21));
  }
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
