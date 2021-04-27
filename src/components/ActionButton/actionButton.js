import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        position: "absolute",
        top: 10,
        right: 10
    },
})

export default function ActionButton({ text, Svg, color, onPress }) {
    return (
        <View>
            <TouchableHighlight style={styles.pressButton} onPress={onPress}>
                <Text style={styles.text} color={color}>
                    {text ? text : ''}
                    {Svg ? <Svg /> : null}
                </Text>
            </TouchableHighlight>
        </View>
    );
}