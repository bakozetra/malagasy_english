
import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ListItem from './listItem';
import VectorIcon from '../../svg/vector'; // Vector icon is not a good name, as it does not make clear that it is an arrow


storiesOf('ListItem', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('Learn lists', () => <ListItem
        text="Learn"
        name="All"
        color="rgba(6, 182, 212, 1)"
        Svg={VectorIcon}
        onPress={() => Alert.alert("clicked")} />)
    .add("Pick List ", () => <ListItem
        text="Pick"
        name="All"
        color="rgba(6, 182, 212, 1)"
        Svg={VectorIcon}
        onPress={() => Alert.alert("I was clcked")} />)
