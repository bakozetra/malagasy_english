import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function SectionHeading({ text }) {
    console.log(text);
    const styles = StyleSheet.create({
        text: {
            fontSize: 18,
            lineHeight: 22,
            color: "#111827",
        }
    })
    return (
        <SafeAreaView >
            <Text style={styles.text}>{text}</Text>
        </SafeAreaView>
    );
}