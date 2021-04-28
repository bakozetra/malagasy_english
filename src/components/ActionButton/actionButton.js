import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    text: {
        fontSize: 16,
    },
})

export default function ActionButton({ text, Svg, color, onPress }) {
    return (
        <View>
            <TouchableOpacity style={styles.pressButton} onPress={onPress} >
                <View style={styles.content} >
                    <Text style={[styles.text, color = { color }]} >
                        {text}
                    </Text>
                    <Svg marginLeft={10} marginRight={20} />
                </View>
            </TouchableOpacity>
        </View>
    );
}