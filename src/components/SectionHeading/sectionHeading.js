import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function SectionHeading({ heading }) {
    console.log(heading);
    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            lineHeight: 22,
            color: "#111827",
            paddingBottom: 15,
        }
    })
    return (
        <SafeAreaView >
            <Text style={styles.text}>{heading}</Text>
        </SafeAreaView>
    );
}