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
    .add('Add icon', () => <ToolButton Icon={AddIcon} onPress={() => Alert.alert("add-icon")} />)
    .add('Done', () => <ToolButton Icon={DoneIcon} onPress={() => Alert.alert("done")} />)
    .add('Double icon', () => <ToolButton Icon={DoubleIcon} onPress={() => Alert.alert("double-icon")} />)
    .add('Next icon', () => <ToolButton Icon={NextIcon} onPress={() => Alert.alert("next-icon")} />)
    .add('Sun icon', () => <ToolButton Icon={SunIcon} onPress={() => Alert.alert("snu-icon")} />)

