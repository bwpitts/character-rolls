import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header, Button} from "react-native-elements";
import DiceRoll from "../components/DiceRoll";
import {Provider} from "unstated";

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
        <Provider>
          <DiceRoll/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
