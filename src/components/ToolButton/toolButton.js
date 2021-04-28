import * as React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    circle: {
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(6, 182, 212, 1)",
    }
})

export default function ToolButton({ Icon, OnPress }) {
    return (
        <View >
            <TouchableOpacity OnPress={OnPress} >
                <View style={styles.circle}>
                    <Icon />
                </View>
            </TouchableOpacity>
        </View>
    );
}