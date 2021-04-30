import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    viewTextAndSvg: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    text: {
        fontSize: 16,
    },
    svg: {
        marginLeft: 10,

    }

})

export default function ActionButton({ text, Svg, color, onPress }) {
    return (
        <View>
            <TouchableHighlight style={styles.content} onPress={onPress}>
                <View style={styles.viewTextAndSvg} >
                    <Text style={[styles.text, color = { color }]}>{text}</Text>
                    <Svg style={styles.svg} />
                </View>
            </TouchableHighlight>
        </View>
    );
}