import {Container} from 'unstated';
export default class CharacterSheet extends Container {
    state = {
        initiative: "0",
        proficiency: "0",
        strMod: "0",
        dexMod: "0",
        constMod: "0",
        intMod: "0",
        wisMod: "0",
        chaMod: "0",
        hpMod: "6",
        weaponMod: "0",
    }

    saveMods = (mod, num) => {
        switch (mod) {
            case "initiative":
                this.setState({initiative: num});
                break;
            case "proficiency":
                this.setState({proficiency: num});
                break;
            case "strMod":
                this.setState({strMod: num});
                break;
            case "dexMod":
                this.setState({dexMod: num});
                break;
            case "constMod":
                this.setState({constMod: num});
                break;
            case "intMod":
                this.setState({intMod: num});
                break;
            case "wisMod":
                this.setState({wisMod: num});
                break;
            case "chaMod":
                this.setState({chaMod: num});
                break;
            case "hpMod":
                this.setState({hpMod: num});
                break;
            case "weaponMod":
                this.setState({weaponMod: num});
                break;
        }
    };
}