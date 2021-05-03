// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, SectionList, View, FlatList, TextInput, StyleSheet } from 'react-native';
import ListItem from "../ListItem/listItem"
import SectionHeading from "../SectionHeading/sectionHeading"
import Data from "../../data/categories.json"

const styles = StyleSheet.create({
    list: {
        marginRight: 23,
        marginLeft: 23
    }
})

export default function List({ text, Svg, color, onPress, data, heading }) {

    return (
        <SafeAreaView style={styles.list} >
            <SectionHeading heading={heading} />
            <FlatList
                data={data}
                renderItem={({ item: userData }) => {
                    return <ListItem
                        name={userData.name.en || userData.name.marginLeft}
                        Svg={Svg}
                        color={color}
                        onPress={onPress}
                        text={text} />
                }}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}