
import * as React from 'react';
import { Alert, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import List from './list';
import VectorIcon from '../../svg/vector';
import Data from "../../data/categories.json"

storiesOf('List', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('List', () =>
        <List
            data={Data.categories}
            text="Learn"
            color="rgba(6, 182, 212, 1)"
            heading='Select a category:'
            Svg={VectorIcon}
            onPress={() => Alert.alert("I was clcked")
            }
        />)
