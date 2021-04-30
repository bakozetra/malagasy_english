
import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ListItem from './listItem';
import VectorIcon from '../../svg/vector';

storiesOf('ListItem', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('Learn lists', () => <ListItem
        text="Learn"
        item="All"
        color="rgba(6, 182, 212, 1)"
        Svg={VectorIcon}
        onPress={() => Alert.alert("clicked")} />)
    .add("Pick List ", () => <ListItem
        text="Pick"
        color="rgba(6, 182, 212, 1)"
        Svg={VectorIcon}
        onPress={() => Alert.alert("I was clcked")} />)
