import * as React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import LanguageSwitcher from './languageSwitcher';
import SwitchIcon from '../../svg/translate';

const language = {
  gasy: 'MA',
  english: 'EN',
};
function Languages() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <LanguageSwitcher
      english={toggle ? <Text>EN</Text> : <Text>MA</Text>} // in the component, there is already a text element, so you are duplicating it.
      gasy={!toggle ? <Text>EN</Text> : <Text>MA</Text>}
      SwitchIcon={SwitchIcon}
      onPress={() => setToggle(!toggle)}
    />
  );
}
storiesOf('LanguageSwitcher', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('languages switcher', () => <Languages></Languages>);
