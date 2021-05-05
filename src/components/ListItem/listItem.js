import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
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
        borderStyle: "solid",
        backgroundColor: "rgba(255, 255, 255, 1)"

    }
})
export default function ListItem({ name, Svg, color, onPress, text }) {

    return (
        <SafeAreaView >
            <TouchableOpacity onPress={onPress}>
                <View style={styles.listItem}>
                    <Text>{name}</Text>
                    <TouchableHighlight >
                        <ActionButton
                            text={text}
                            Svg={Svg}
                            color={color}
                        // onPress={onPress}
                        />
                    </TouchableHighlight>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}