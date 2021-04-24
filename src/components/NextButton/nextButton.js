// components/Task.js
import * as React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';


const styles = StyleSheet.create({
    clickButton: {
        fontFamily: "Inter",
        fontWeight: "600",
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
    unclickButton: {
        fontFamily: "Inter",
        fontWeight: "600",
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

export default function NextButton({ onPress, title, disabled }) {
    console.log(title);
    return (
        <View style={disabled ? styles.unclickButton : styles.clickButton}>
            <TouchableHighlight
                onPress={onPress}
                disabled={disabled}
            >
                <View >
                    <Text
                        style={disabled
                            ? styles.blueText
                            : styles.whiteText}>
                        {title}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}
