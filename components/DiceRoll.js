import React, {Component} from 'react';
import {Subscribe} from "unstated";
import CharacterSheet from "./Containers/CharacterSheet";
import {Button} from "react-native-elements";
import {Text, View} from "react-native";

export default class DiceRoll extends Component{
    constructor(props){
        super(props)
    }
    state = {
        results: 0
    }
    _handleRollPress = (mod) => {
        let roll = this.roll(mod);
        this.setState({results: roll.toString() });
    };

    roll(mod){
        let roll = Math.floor(Math.random() * Math.floor(21));
        if (roll < 1 ){
            return Math.floor(Math.random() * Math.floor(21)) + mod
        } else {
            return roll + mod;
        }
    }
    render(props){
        return(
            <Subscribe to={[CharacterSheet]}>
                {
                    charStore => {
                        const {state: {initiative, proficiency, strMod, dexMod, constMod, intMod, wisMod, chaMod, hpMod, weaponMod}} = charStore
                        {
                            return(
                                <View>
                                <Text>{this.state.results}</Text>
                                <Button
                                    title="Initiative Roll"
                                    type="outline"
                                    raised
                                    onPress={this._handleRollPress(initiative)}/>
                            </View>);
                        }
                    }
                }
            </Subscribe>
        )
    }
}