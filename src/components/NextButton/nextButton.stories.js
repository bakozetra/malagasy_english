import * as React from 'react';
import { Alert, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import NextButton from './nextButton';

storiesOf('NextButton', module)
    .addDecorator(story => <View style={{ alignItems: "center", justifyContent: "center" }}>{story()}</View>)
    .add('Next button', () => (
        <NextButton
            text="Text"
            disabled={false}
            onPress={() => Alert.alert("adding")} />
    ))

    .add("Add button", () => (
        <NextButton
            text="Add"
            disabled={false}
            onPress={() => Alert.alert("Adding")}
        />
    ))

    .add("Add button disable", () => (
        <NextButton
            text="Add"
            disabled={true}
            onPress={() => null}
        />
    ))


