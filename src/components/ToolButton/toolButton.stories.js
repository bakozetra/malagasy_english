
import * as React from 'react';
import { View, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ToolButton from './toolButton';
import NextIcon from "../../svg/next-icon"
import SunIcon from "../../svg/sun-icon"
import DoubleIcon from "../../svg/double-icon"
import DoneIcon from "../../svg/done"
import AddIcon from "../../svg/add"


storiesOf('ToolButon', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('Add icon', () => <ToolButton OnPress={() => Alert.alert("add-icon")} Icon={AddIcon} />)
    .add('Done', () => <ToolButton Icon={DoneIcon} />)
    .add('Double icon', () => <ToolButton Icon={DoubleIcon} />)
    .add('Next icon', () => <ToolButton Icon={NextIcon} />)
    .add('Sun icon', () => <ToolButton Icon={SunIcon} />)

