import * as React from 'react';
import { Alert, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import NextButton from './nextButton';


storiesOf('NextButton', module)
    .addDecorator(story => <View style={{ alignItems: "center", justifyContent: "center" }}>{story()}</View>)
    .add('Next button', () => (
        <NextButton
            title="Text"
            disabled={false}
            onPress={() => Alert.alert("adding")} />
    ))

    .add("Add button", () => (
        <NextButton
            title="Add"
            disabled={false}
            onPress={() => Alert.alert("Adding")}
        />
    ))

    .add("Add button disable", () => (
        <NextButton
            title="Add"
            disabled={true}
            onPress={() => null}
        />
    ))


