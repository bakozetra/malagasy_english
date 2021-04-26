import * as React from "react"
import { SafeAreaView } from "react-native"
import { Text, SafeAreaView } from "react-native"

export default function ActionButton({ text }) {
    console.log(text);
    return (
        <SafeAreaView>
            <Text>{text}</Text>
        </SafeAreaView>
    )
}

