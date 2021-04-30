import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    languageSwitcher: {
        height: 40,
        width: 90,
        borderRadius: 30,
        backgroundColor: "rgba(6, 182, 212, 1)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

    },
    malagasyLanguage: {
        marginRight: 10,
        color: "white",
        fontSize: 13,

    },
    englishLanguage: {
        marginLeft: 10,
        color: "white",
        fontSize: 13
    }

})
export default function LanguageSwitcher({ gasy, english, SwitchIcon, onPress }) {

    return (
        <SafeAreaView >
            <View style={styles.languageSwitcher}>
                <Text style={styles.englishLanguage}>{english}</Text>
                <SwitchIcon onPress={onPress} />
                <Text style={styles.malagasyLanguage}>{gasy}</Text>
            </View>
        </SafeAreaView>
    );
}