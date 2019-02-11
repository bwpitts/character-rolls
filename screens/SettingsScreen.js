import React from 'react';
import {View} from 'react-native';
import {Content, Button, Item, Input, Header, Title, Body, Label, Form} from "native-base";
import CharacterForm from "../components/CharacterForm";
import {Provider} from "unstated";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View>
          <Header
            conterComponent={{text: "Settings"}}
          />
          <Provider>
            <CharacterForm/>
          </Provider>
        </View>
    );
  }
}
