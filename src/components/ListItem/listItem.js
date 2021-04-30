import * as React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableHighlight } from 'react-native'
import ActionButton from '../ActionButton/actionButton';

const styles = StyleSheet.create({
    listItem: {
        marginLeft: 16,
        marginRight: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 17,
        marginBottom: 17
    }
})
export default function ListItem({ item, text, Svg, color, onPress }) {
    return (
        <SafeAreaView >
            <TouchableHighlight onPress={onPress}>
                <View style={styles.listItem} >
                    <Text>{item}</Text>
                    <ActionButton text={text} Svg={Svg} color={color} onPress={onPress} />
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    );
}