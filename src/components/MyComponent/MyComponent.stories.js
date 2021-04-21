
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyComponent from './MyComponent';


storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('greeting', () => <MyComponent word= {'hi' }/>)
