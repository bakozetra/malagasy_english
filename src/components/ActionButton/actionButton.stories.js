import * as React from 'react';
import { Alert, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import ActionButtton from './actionButton';
import wrongIcon from '../../svg/wrong';
import TrueIcon from '../../svg/true';
import VectorIcon from '../../svg/vector';

storiesOf('ActionButton', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('Learn icon',
        () =>
            <ActionButtton
                text="Learn"
                color="rgba(6, 182, 212, 1)"
                Svg={VectorIcon}
                onPress={() => Alert.alert("clicked")} />)
    .add('Pick icon',
        () =>
            <ActionButtton
                text="Pick"
                color="rgba(6, 182, 212, 1)"
                Svg={VectorIcon}
                onPress={() => Alert.alert("I was clcked")} />)
    .add('True icon',
        () =>
            <ActionButtton
                text="Correct"
                color="rgba(6, 212, 64, 1)"
                Svg={TrueIcon}
                onPress={() => Alert.alert("true")} />)
    .add('Wrong icon',
        () =>
            <ActionButtton
                text="Wrong"
                color="rgba(212, 6, 142, 1)"
                Svg={wrongIcon}
                onPress={() => Alert.alert("wrong")} />)