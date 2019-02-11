import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Input} from "react-native-elements";
import {Subscribe} from "unstated";
import CharacterSheet from "./Containers/CharacterSheet";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const window = Dimensions.get("window");

export default class CharacterForm extends Component {
    render(){
        return (
            <Subscribe to={[CharacterSheet]}>
                {
                    charStore => {
                        const {state: {initiative, proficiency, strMod, dexMod, constMod, intMod, wisMod, chaMod, hpMod, weaponMod}} = charStore
                        {
                           return(
                               <KeyboardAwareScrollView
                                   style={{ backgroundColor: '#fff' }}
                                   resetScrollToCoords={{ x: 0, y: 0 }}
                                   scrollEnabled={true}
                               >
                                   <Input style={styles.input} value={initiative} label={"Initiative"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("initiative", text.toString())}/>
                                   <Input style={styles.input} value={proficiency} label={"Proficiency"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("proficiency", text.toString())}/>
                                   <Input style={styles.input} value={strMod} label={"Strength Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("strMod", text.toString())}/>
                                   <Input style={styles.input} value={dexMod} label={"Dexterity Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("dexMod", text.toString())}/>
                                   <Input style={styles.input} value={constMod} label={"Constitution Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("constMod", text.toString())}/>
                                   <Input style={styles.input} value={intMod} label={"Intelligence Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("intMod", text.toString())}/>
                                   <Input style={styles.input} value={wisMod} label={"Wisdom Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("wisMod", text.toString())}/>
                                   <Input style={styles.input} value={chaMod} label={"Charisma Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("chaMod", text.toString())}/>
                                   <Input style={styles.input} value={hpMod} label={"HP Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("hpMod", text.toString())}/>
                                   <Input style={styles.input} value={weaponMod} label={"Weapon Modifier"} keyboardType={'numeric'} onChangeText={ (text) => charStore.saveMods("weaponMod", text.toString())}/>
                                   <Button
                                       title="Save"
                                       type="outline"
                                       onPress={()=> console.log(initiative)}
                                       raised
                                   />
                               </KeyboardAwareScrollView>
                               )
                        }
                    }
                }
            </Subscribe>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginHorizontal: 10,
        marginVertical: 5,
        width: window.width - 30
    }
})