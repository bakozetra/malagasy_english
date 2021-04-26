import * as React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';

const styles = StyleSheet.create({
    clickButton: {
        width: 90,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        textTransform: "lowercase",
        backgroundColor: "#06b6d4",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 19,
    },
    disableButton: {
        width: 90,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        textTransform: "lowercase",
        borderStyle: 'solid',
        borderColor: "blue",
        borderWidth: 1,
    },

    whiteText: {
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 19,
    },
    blueText: {
        color: "#06b6d4",
        fontSize: 16,
        lineHeight: 19,
    }
})

export default function NextButton({ onPress, text, disabled }) {
    console.log(text);
    return (
        <View style={disabled ? styles.disableButton : styles.clickButton}>
            <TouchableHighlight
                onPress={onPress}
                disabled={disabled}>
                <Text style={disabled ? styles.blueText : styles.whiteText}>
                    {text}
                </Text>
            </TouchableHighlight>
        </View>
    )
}
