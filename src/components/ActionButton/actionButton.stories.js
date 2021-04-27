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
                color={"red"}
                Svg={VectorIcon}
                onPress={() => Alert} />)
    .add('Pick icon',
        () =>
            <ActionButtton
                text="Pick"
                Svg={VectorIcon} />)
    .add('True icon',
        () =>
            <ActionButtton
                text="correct"
                Svg={TrueIcon} />)
    .add('Wrong icon',
        () =>
            <ActionButtton
                text="wrong"
                Svg={wrongIcon} />)