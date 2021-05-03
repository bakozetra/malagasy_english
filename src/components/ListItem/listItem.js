import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableHighlight } from 'react-native'
import ActionButton from '../ActionButton/actionButton';

const styles = StyleSheet.create({
    listItem: {
        paddingLeft: 16,
        paddingRight: 20,
        height: 50,
        display: "flex",
        color: "rgba(17, 24, 39, 1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: " rgba(229, 229, 229, 1)",
        borderStyle: "solid"
    }
})
export default function ListItem({ name, Svg, color, onPress, text }) {
    return (
        <SafeAreaView >
            <TouchableHighlight onPress={onPress}>
                <View style={styles.listItem} >
                    <Text>{name}</Text>
                    <ActionButton
                        text={text}
                        Svg={Svg}
                        color={color}
                        onPress={onPress}
                    />
                </View>
            </TouchableHighlight>

        </SafeAreaView>
    );
}