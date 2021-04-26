import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import SectionHeading from './sectionHeading';


storiesOf('SectionHeading', module)
    .addDecorator(story => <View style={{ paddingLeft: 23 }}>{story()}</View>)
    .add('Section heading', () => <SectionHeading text='Select a category:' />)
