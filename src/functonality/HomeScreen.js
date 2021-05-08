import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import List from "../components/List/list"
import ToolButton from '../components/ToolButton/toolButton'
import SunIcon from "../svg/sun-icon"
import DoubleIcon from "../svg/double-icon"
import DoneIcon from "../svg/done"
import AddIcon from "../svg/add"
import SwitchIcon from "../svg/translate"
import LanguageSwitcher from "../components/languageSwitcher/languageSwitcher"
import { LANGUAGE_NAMES } from "../data/dataUtils";



const styles = StyleSheet.create({
    iconList: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 23,
        paddingTop: 35,
        paddingBottom: 56,
        justifyContent: "space-between",
        width: 290
    },

})
const HomeSreen = () => {
    function Languages() {
        const [toggle, setToggle] = React.useState(true);
        return (
            <LanguageSwitcher
                english={toggle ? <Text>{LANGUAGE_NAMES.EN}</Text> : <Text>{LANGUAGE_NAMES.MG}</Text>}
                gasy={!toggle ? <Text>{LANGUAGE_NAMES.EN}</Text> : <Text>{LANGUAGE_NAMES.MG}</Text>}
                SwitchIcon={SwitchIcon}
                onPress={() => setToggle(!toggle)}
            />
        )
    }


    return (
        <SafeAreaView>
            <View style={styles.iconList}>
                <ToolButton Icon={AddIcon} />
                {Languages()}
                <ToolButton Icon={DoneIcon} />
                <ToolButton Icon={DoubleIcon} />
                <ToolButton Icon={SunIcon} />
            </View>
            <List />
        </SafeAreaView>
    )
}
export default HomeSreen;
