import * as React from "react"
import { View } from "react-native"
import { storiesOf } from "@storybook/react-native"
import ActionButton from "./actionButton"

storiesOf("ActionButton", module)
    .addDecorator(story => <View>{story}</View>)
    .add("ActionButton", () => <ActionButton></ActionButton>)


